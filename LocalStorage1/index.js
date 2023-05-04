
var dataArr=JSON.parse(localStorage.getItem("set")) || []

function submits(event){
event.preventDefault();
console.log("Himu")
 var data={
     name:document.getElementById("name").value,
     company:document.getElementById("com").value,
     age:document.getElementById("age").value,
     date:document.getElementById("date").value
 }

 dataArr.push(data)
//  console.log(dataArr)
 localStorage.setItem("set",JSON.stringify(dataArr))

}

 
function Display(){

    var arr=JSON.parse(localStorage.getItem("set")) || [];
    console.log(arr)
   
    var tbody=document.getElementById("tb")
    while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
          }
    arr.map((el,i)=>{
     var tr=document.createElement("tr")
        tr.innerText="";
     var td1=document.createElement("td")
      td1.innerText=el.name

      
      var td2=document.createElement("td")
      td2.innerText=el.company

      var td3=document.createElement("td")
      td3.innerText=el.age

      var td4=document.createElement("td")
      td4.innerText=el.date

      var td5=document.createElement("td")
       td5.innerText="delete"
      td5.addEventListener("click",()=>{
        console.log()
        arr.splice(i,1)
        localStorage.setItem("set",JSON.stringify(arr))
       Display()
      })
     tr.append(td1,td2,td3,td4,td5)
      tbody.append(tr)
    })
}

   
