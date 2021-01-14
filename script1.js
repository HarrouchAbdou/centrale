console.log("hello world")


var algo;
var file;

var fileBtn = document.getElementById("file");

fileBtn.addEventListener("change",evt => {file = evt.target.files[0]; console.log(file.name);fileName.innerHTML=evt.target.files[0].name})


var btnAlgo1=document.getElementById("algo1")
var btnAlgo2=document.getElementById("algo2")
var btnAlgo3=document.getElementById("algo3")
var fileName=document.getElementById("fileName")


var icon1 = document.getElementById("icon1")
var icon2 = document.getElementById("icon2")
var icon3 = document.getElementById("icon3")





const handleSend = (file, algo) => {

    const url_local = `http://localhost:5000/algo${algo}`;
    const url_remote = `https://centraleapi.herokuapp.com/algo${algo}`;
    const formdata = new FormData();
    formdata.append('datafile',file)

    btnAlgo1.className="px-8 py-3 border border-blue-600  text-blue-700 hover:bg-blue-600 hover:text-white"
    
   // animation depending on the algo chosed 
    switch (algo) {
        case 1:
            icon1.className="fas fa-circle-notch animate-spin"

            
            break;
            case 2:
                icon2.className="fas fa-circle-notch animate-spin"
                break;

    
        default:
            icon3.className="fas fa-circle-notch animate-spin"

            break;
    }
  
    fetch(url_remote,{
        method:"post",
        body:formdata
                    
    })
    .then((res) => {

        // stop animation depending on algo chosed
        switch (algo) {
            case 1:
                icon1.className="far fa-check-circle text-green-100 text-xl "
                btnAlgo1.className= "focus:outline-none px-8 py-3 border bg-green-600 border-gray-100 font-semi-bold text-gray-100 hover:bg-blue-600 hover:text-white"

    
                
                break;
                case 2:
                    icon2.className="far fa-check-circle text-green-500   "
                    btnAlgo2.className= "focus:outline-none px-8 py-3 border bg-green-600 border-gray-100 font-semi-bold text-gray-100 hover:bg-blue-600 hover:text-white"
                    break;
    
        
            default:
                icon3.className="far fa-check-circle text-green-500"
                btnAlgo3.className= "focus:outline-none px-8 py-3 border bg-green-600 border-gray-100 font-semi-bold text-gray-100 hover:bg-blue-600 hover:text-white"

    
                break;
        }

        return res.blob();

    })
    .then((blob) => {
        console.log(blob)
        const href = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', `response ${new Date().getSeconds()}.xlsx`); //or any other extension
        document.body.appendChild(link);
        link.click();
    }) 
    .catch (e=> console.error(e))

}





btnAlgo1.addEventListener("click",()=>{algo=1;handleSend(file,algo)});
btnAlgo2.addEventListener("click",()=>{algo=2;handleSend(file,algo)});
btnAlgo3.addEventListener("click",()=>{algo=3;handleSend(file,algo)});






