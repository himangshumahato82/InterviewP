document.getElementById("btn").addEventListener("click",Submit)
//  var arr=JSON.parse(localStorage.getItem("display")) || []
var arr=[]
 arr=JSON.parse(localStorage.getItem("display"))
displayhere(arr)
function Submit(){
var name=document.getElementById("name").value
var no=document.getElementById("no").value
const data={
   name:name,
   phno:no
}
arr.push(data)
localStorage.setItem("display",JSON.stringify(arr))
console.log(arr)
displayhere(arr)
}
function displayhere(arr){

 document.getElementById("main").innerText="" ;


 arr.map((el)=>{
   var div=document.createElement("div")
 div.setAttribute("id","childdiv")
var h1=document.createElement("h1")
   h1.innerText="Name:"+ el.name
   var h=document.createElement("h1")
   h.innerText="Phone No:"+ el.phno
  var btn=document.createElement("button")
  btn.innerText="DELETE"
  btn.setAttribute("id","btn1")
  btn.addEventListener("click",delet)
div.append(h1,h,btn)
document.getElementById("main").append(div)
document.getElementById("name").value="" 
document.getElementById("no").value="" 
})
}

function delet(index){
 arr.splice(index,1);
 localStorage.setItem("display",JSON.stringify(arr))
 displayhere(arr)
}
