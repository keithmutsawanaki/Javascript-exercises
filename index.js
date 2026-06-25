const fullName="Keith Kapfunde";
console.log(fullName);

const age=22;
console.log(age);

const length=7;
const width=11;
const area= width*length;
console.log(area);

//adding two numbers
const firstNum=70;
const secondNum=7;
const sum=firstNum+secondNum;
console.log(sum);

// combining first name and last name
const firstName="Keith";
const lastName="Orei";
const myName=firstName+" "+lastName;
console.log(myName);


// my  favouriteColor
const favouriteColor="blue";
console.log('my favourite color is ' + favouriteColor);

// finding remainder 
const oranges = 77;
const students = 9;
const orangePerStudent = oranges%students;
console.log(orangePerStudent);

// converting a string into a number
const numAsString ="77";
 numAsString == 77;
console.log(numAsString);

// swaping two variables

let a =7;
let b =17;
[a,b] = [b,a];
console.log(a,b);

// average of three numbers
const n1 = 70;
const n2 = 77;
const n3 = 73;
const average =(n1+n2+n3)/3;

console.log("Average:",average);

// greetimg user
const userName = prompt("Enter your name:");
console.log('Greetings Gentleman!');

// sum two inputs
let firstNumm = Number(prompt("enter firstNumm"))
let secondNumm = Number(prompt("enter secondNumm"))

console.log("Sum:", firstNumm + secondNumm)

// Display age

const age1 = Number(prompt("Enter your age1:"));
console.log(`You are ${age1} years old`);

// asking for temperature in celsius and converting it to fahrenheit
const celsius = Number(prompt("Enter temperature:"));
const fahrenheit = (celsius*9/5) + 32;
console.log (`Temperature in fahrenheit:${fahrenheit}`)

// square of a numbers
const number = Number(prompt("Enter a number:"))
console.log("Square:",number**2);

// conditional Statements
// positive and negative
const number1 = Number(prompt("Enter a number1:"))
if (number1>=0){
    console.log ("positive");
}else{
    console.log("negative");
}

// even or odd
const number2 = Number(prompt("Enter a number2:"))
if (number2%2===0){
    console.log("even");
}else{
    console.log("odd");
}

// Large number
const first = Number(prompt("Enter first number:"))
const second = Number(prompt("Enter second number:"))

if (first>second){
    console.log(first);
}else{
    console.log(second)
}

// voting eligible
const age2 = Number(prompt("Enter age2:"));
if (age2 >=18){
    console.log("eligible to vote");
}else{
    console.log("Not eligble to vote")
} 