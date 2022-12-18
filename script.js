//grab span element
const kittenCounter = document.getElementById("kitten-counter");
console.log(kittenCounter);




//grab button + element
const incrementButton = document.getElementById("increment");
console.log(incrementButton);


let kittenNumber = 0;


// const addKitten = function() {
//    return kittenNumber + 1;
// }

// console.log(addKitten());

incrementButton.addEventListener("click", function () {
   kittenNumber = kittenNumber + 1;
   kittenCounter.innerText = kittenNumber;
});

console.log(kittenNumber);


const decrementButton = document.getElementById("decrement");
// console.log(decrementButton);
//decrement amount - update span element
//grab button "random" element
const addButton = document.getElementById("add-random");
// console.log(addButton);
//generate random number and update span element

//maybe:
// stop from removing amount of kittens below zero





