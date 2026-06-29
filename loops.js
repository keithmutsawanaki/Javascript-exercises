 const name =["Alice","Bob","Charlie","David"]
    name.forEach(function(name){
        console.log(name)});



        
const fruits = ["apple","banana","orange"]
fruits.forEach(fruit=> {
    console.log(fruit.toUpperCase());
});

const numbers = [2,4,6,8,10]
let sum = 0;
numbers.forEach(number => {
    sum += number;
});
console.log(sum);


const numbers =[5,10,15,20,25]
let count=0
numbers.forEach(()=>{count++});
console.log(count)



const numbers= [12,45,7,89,23];
let largest = numbers[0];
numbers.forEach(number => {
    if (number > largest) {
        largest = number;
    }
});
console.log(largest);



const numbers = [1,2,3,4,5,6,7,8,]
let evenCount = 0;
numbers.forEach(number => {
    if (number % 2 === 0) {
        evenCount++;
    }
});
console.log("Even Numbers =", evenCount);



const names = ["Alice", "Bob", "Andrew", "Charlie", "Amy"];

names.forEach(name => {
    if (name.startsWith("A")) {
        console.log(name);
    }
});




const letters = ["a", "b", "e", "g", "i", "o", "u"];

let vowelCount = 0;

letters.forEach(letter => {
    if (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
    ) {
        vowelCount++; }
});


console.log(vowelCount);


const numbers = [1, 2, 3, 4, 5];

const doubled = [];

numbers.forEach(number => {
    doubled.push(number * 2);
});

console.log(doubled);



const numbers = [2, 4, 6, 8, 10];

let sum = 0;

numbers.forEach(number => {
    sum += number;
});

let average = sum / numbers.length;

console.log(average);




const words = ["cat", "elephant", "dog", "giraffe"];

let longest = words[0];
words.forEach(word => {
    if (word.length > longest.length) {
        longest = word;
    }
});
console.log(longest);




const marks = [34, 56, 78, 45, 90, 50];

let passed = 0;

marks.forEach(mark => {
    if (mark >= 50) {
        passed++;
    }
});

console.log(passed);