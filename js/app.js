//////////////////////////////////////////////////////////////////
//////////////////////// Day 12 Challange ////////////////////////
//////////////////////////////////////////////////////////////////

////////declare buttons
const button1 = document.getElementById('btn_task1');
const button2 = document.getElementById('btn_task2');
const button3 = document.getElementById('btn_task3');
const button5 = document.getElementById('btn_task5');
const button6 = document.getElementById('btn_task6');
const button8 = document.getElementById('btn_task8');
   // Add an event listener to the button
   button1.addEventListener('click', task1);
   button2.addEventListener('click', task2);
   button3.addEventListener('click', task3);
   button5.addEventListener('click', task5);
   button6.addEventListener('click', task6);
   button8.addEventListener('click', task8);
function task1() {
console.log(" ---------- Task 1: Variable Declaration ---------- ");
let myAge = 29;
let isStudent = false;
let favoriteColors = ["bleu","red","black"];
}
function task2() {
console.log(" ---------- Task 2: Variable Types ---------- ");
let newVariable = ' "Hello" \'World\'';
console.log(newVariable);
}

function task3() {
console.log(" ---------- Task 3: Concatenation ---------- ");
let myName = "Mustapha";
let myAge = 29;
let isStudent = false;
console.log(`My name is ${myName}, I am ${myAge} years old. Am I student ? : ${isStudent}.`);
}

function task5() {
console.log(" ---------- Task 5: Logical Operators ---------- ");
let favoriteColor = prompt("What is your favorite color?");
let favoriteAnimal = prompt("What is your favorite Animal?");
let myFavoriteAnimal = "Dog";
let favoriteColors = ["bleu","red","black"];
let myFavoriteColor = favoriteColors[0];
if(favoriteColor==myFavoriteColor){
    console.log("Wow we both like "+favoriteColor);
}else  console.log("Unfortunatly we don't like the same color.");
if(favoriteAnimal==myFavoriteAnimal){
    console.log("Wow we both like "+favoriteAnimal);
}else  console.log("Unfortunatly we don't like the same Animal.");
}

function task6() {
console.log(" ---------- Task 6: Comparison Operators ---------- ");

let userNumber = prompt("What is the number that you want to compare with 0?");
if (userNumber>0) console.log(`${userNumber} is positive number`);
else if (userNumber<0) console.log(`${userNumber} is a negative number`);
else console.log(`${userNumber} equal to zero`);
}

function task8() {
console.log(" ---------- Task 8: Truthy & Falsy Values ---------- ");

let userValue = prompt("Enter a value:");
if (userValue) { console.log("The value you entered is truthy.");}
else { console.log("The value you entered is falsy.");}
}
 
