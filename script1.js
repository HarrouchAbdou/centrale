console.log("hello world")


var algo;
var file;

var fileBtn = document.getElementById("file");



var btnAlgo1=document.getElementById("algo1")
var btnAlgo2=document.getElementById("algo2")
var btnAlgo3=document.getElementById("algo3")
var fileName=document.getElementById("fileName")

btnAlgo1.addEventListener("click",()=>algo=1);
btnAlgo2.addEventListener("click",()=>algo=2);
btnAlgo3.addEventListener("click",()=>algo=3);


fileBtn.addEventListener("change",evt => {file = evt.target.files[0]; console.log(file.name);fileName.innerHTML=evt.target.files[0].name})



