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