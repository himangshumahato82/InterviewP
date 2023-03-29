const line = document.querySelectorAll('li');
line.forEach((li) => {
  li.addEventListener('mouseenter', () => {
    li.classList.add('color');
  });

  li.addEventListener('mouseleave', () => {
    li.classList.remove('color');
  });
});
var arr = [6,2,"d", 4, "r"];
var integers = [];
var strings = [];
var bc=[]
for (var i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
     integers.push(arr[i]);
    
}
  else {
    strings.push(arr[i]);
  }
}
integers.sort(function(a, b) {
    return a - b;
  });

var newarr=[...integers,...strings]

console.log(newarr)

const myPromise = new Promise((resolve, reject) => {
    // Perform some asynchronous operation
    setTimeout(() => {
      const randomNumber =1
      if (randomNumber > 0.5) {
        // If the operation was successful, call the 'resolve' function with the result
        resolve(randomNumber);
      } else {
        // If the operation failed, call the 'reject' function with an error message
        reject(new Error("Operation failed"));
      }
    }, 3000);
  });
  console.log("Promise pending");
  
  // The three possible states of a Promise are:
  myPromise
    .then(result => {
      // 1. The Promise resolved successfully, and the 'then' method is called with the result
      console.log("Promise resolved with result:", result);
    })
    .catch(error => {
      // 2. The Promise rejected, and the 'catch' method is called with the error
      console.error("Promise rejected with error:", error);
    })
    .finally(() => {
      // 3. The Promise is settled, and the 'finally' method is called (with no arguments)
      console.log("Promise settled");
    });
  

// console.log("Integers: ", integers); // [1, 4]
// console.log("Strings: ", strings); // ["d", "r"]
