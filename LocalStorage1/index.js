
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

   
// }
// Define a variable to store the data array retrieved from localStorage
// let dataArr = [];

// // Retrieve the data from localStorage on page load
// function loadData() {
//   const storedData = localStorage.getItem("set");
//   if (storedData) {
//     dataArr = JSON.parse(storedData);
//   }
// }

// // Save the form data to localStorage
// function submits(event) {
//   event.preventDefault();

//   // Get the form values
//   const name = document.getElementById("name").value;
//   const company = document.getElementById("com").value;
//   const age = document.getElementById("age").value;
//   const date = document.getElementById("date").value;

//   // Create a new object with the form values
//   const newData = { name, company, age, date };

//   // Add the new object to the data array
//   dataArr.push(newData);

//   // Save the updated data array to localStorage
//   localStorage.setItem("set", JSON.stringify(dataArr));

//   // Clear the form fields
//   document.getElementById("name").value = "";
//   document.getElementById("com").value = "";
//   document.getElementById("age").value = "";
//   document.getElementById("date").value = "";

//   // Refresh the table
//   displayData();
// }

// // Display the data in a table
// function displayData() {
//   const tableBody = document.getElementById("tb");

//   // Clear the table before repopulating it
//   while (tableBody.firstChild) {
//     tableBody.removeChild(tableBody.firstChild);
//   }

//   // Add a row for each object in the data array
//   dataArr.forEach((data, index) => {
//     const row = document.createElement("tr");

//     const nameCell = document.createElement("td");
//     nameCell.textContent = data.name;

//     const companyCell = document.createElement("td");
//     companyCell.textContent = data.company;

//     const ageCell = document.createElement("td");
//     ageCell.textContent = data.age;

//     const dateCell = document.createElement("td");
//     dateCell.textContent = data.date;

//     const deleteCell = document.createElement("td");
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.addEventListener("click", () => {
//       // Remove the selected object from the data array
//       dataArr.splice(index, 1);

//       // Save the updated data array to localStorage
//       localStorage.setItem("set", JSON.stringify(dataArr));

//       // Refresh the table
//       displayData();
//     });
//     deleteCell.appendChild(deleteBtn);

//     // Add all the cells to the row
//     row.appendChild(nameCell);
//     row.appendChild(companyCell);
//     row.appendChild(ageCell);
//     row.appendChild(dateCell);
//     row.appendChild(deleteCell);

//     // Add the row to the table
//     tableBody.appendChild(row);
//   });
// }

// // Call the functions on page load
// loadData();
// displayData();

// Add event listener to the form submit button
// document.getElementById("submit-btn").addEventListener("click", submits);





  
