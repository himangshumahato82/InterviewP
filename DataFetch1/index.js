
document.getElementById("btn").addEventListener("click",Getdata)
document.getElementById("btn1").addEventListener("click",Getsortdata)

// var arr=[]
async function data(a){
        try {
        await fetch(`https://fakestoreapi.com/products`)
         .then((res)=>  res.json())
         .then((data)=>{
              if(a===true){
                displaydata(data)
              } else{
                sortByprice(data)
              } 
         })
      }  

 catch (error) {
    console.log(error.message)
}
    }
 
function Getdata(){ 
 data(true)
}

function Getsortdata(){
     data(false)
}

function sortByprice(products){
    let data=[]
  data = products.sort((a, b) => (a.price > b.price ? 1 : -1))
  displaydata(data)
  console.log(data)
      
}


function displaydata(data){
    document.getElementById("Product")
  data.map((el)=>{
   var div=document.createElement("div")
   div.setAttribute("id","smalldiv")
   var img=document.createElement("img")
    img.setAttribute("id","img")
   img.src=el.image
   var h1=document.createElement("h1")
    h1.innerText="price :-"+ el.price
   div.append(img,h1)
    
document.getElementById("Product").append(div)
   
  })
}


