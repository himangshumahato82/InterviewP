
   const Fetch=()=>{
    const movieName =document.getElementById("movie").value 
   fetch(`https://www.omdbapi.com/?apikey=e76d383b&s=${movieName}`)
    .then((res)=>res.json())
     .then((data)=>{
        console.log(data)
        if(data.Response==="True"){
             ShowUi(data.Search)
            console.log(data.Search)
        }
        return data;
     })

}
const ShowUi=(data)=>{
document.getElementById("main").innerHTML="";
data.map((el)=>{
  const div= document.createElement("div")
  div.setAttribute("id","subMain");
  const img =document.createElement("img");
  img.setAttribute("id","image");
  img.src=el.Poster;
   const title=document.createElement("h2")
   title.textContent=el.Title;
     
   div.append(img,title);
   document.getElementById("main").append(div)
})



}



const data=()=>{
    Fetch()
}
