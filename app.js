//task 68

// Write a function using hoisting by calling a variable before its declaration and observe the result.

// hoisting:variable

console.log(number);
var number=10  //undefined

// console.log(num);
// let num= 20;  //Cannot access 'num' before initialization


// console.log(add);
// const add=30; //Cannot access 'add' before initialization

//hoisting: Function

add(2,3)
function add(a,b){
    console.log(a+b) //5
}

// sum(2,3)
// let sum=function(a,b){
//     console.log(a+b)//Cannot access 'sum' before initialization

// }


//task 69

// To Create a Progress Bar


//task 70

const books = [
    { title: "1984", author: "George Orwell", rating: 3 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4 },
    { title: "Pride and Prejudice", author: "Jane Austen", rating: 2 },
    { title: "Great Gatsby", author: "F. Scott Fitzgerald", rating: 5 },
    { title: "Catcher in the Rye", author: "J.D. Salinger", rating: 9 }
  ];

  let filteredBooks=books.filter(num=>{
    return num.rating>=4;
  }).sort((a,b)=>{
    return a.title.localeCompare(b.title)
  });
  console.log(filteredBooks);

//task-71
// const shoppingCart = [
//     { id: 1, name: 'Laptop', price: 800, quantity: 2 },
//     { id: 2, name: 'Smartphone', price: 500, quantity: 1 },
//     { id: 3, name: 'Tablet', price: 300, quantity: 3 },
//     { id: 4, name: 'Headphones', price: 50, quantity: 2 }
// ];
// a) map Method: Calculate the total cost for each product
// b) filter Method: Filter products with a total cost greater than 1000
// c) reduce Method: Calculate the overall total cost of the shopping cart
// d) sort Method: Sort products by quantity in descending order.

const shoppingCart = [
    { id: 1, name: 'Laptop', price: 800, quantity: 2 },
    { id: 2, name: 'Smartphone', price: 500, quantity: 1 },
    { id: 3, name: 'Tablet', price: 3000, quantity: 3 },
    { id: 4, name: 'Headphones', price: 5000, quantity: 2 }
];

let total_cost=shoppingCart.map((product)=>{
    return product.price*product.quantity;
})
console.log(total_cost)

let greater_1000=total_cost.filter((num)=>{
    return num >1000;
})
console.log(greater_1000)

let overall_cost=total_cost.reduce((total,number)=>{
    return total+=number;
})
console.log(overall_cost)

let  descending_order=total_cost.sort((a,b)=>{
    return b-a
})
console.log(descending_order)

//task-72
// Create an object representing a person with properties like name, age and address. Use destructuring to extract these properties and create a new object with only the name and age.

// Steps:
// 1. Start
// 2. Define an object called person with properties like name, age, and address.
// 3. Create a new object called "basicInfo".
// 4. Assign the name property of the person object to the name property of the "basicInfo" object.
// 5. Assign the age property of the person object to the age property of the "basicInfo" object.
// 6. Return the "basicInfo" object.
// 7. End

let basicInfo={
    name:"shruthi",
    age:25,
    address:"KNR"
}

let {name,age}=basicInfo
console.log(name,age)
//task-73
// Suppose you have an object representing a student with properties name, age, and grade. Write a function called "printStudentInfo" that takes the student object as input and prints out the student's information

// 1. Start
// 2. Define an object called student with properties name, age, and grade.
// 3. Define a function called "printStudentInfo" that takes the student object as input.
// 4. Inside the "printStudentInfo" function:
// a. Extract the name, age, and grade properties from the student object.
// b. Print the student's information in the following format:
// 5. Print "Name: " followed by the value of the name property.
// 6. Print "Age: " followed by the value of the age property.
// 7. Print "Grade: " followed by the value of the grade property.
// 8. End

let student={
    name:"shruthi",
    age:25,
    grade:12
}
function printStudentInfo(){
    let {name,age,grade}=student;
    console.log("name : "+name);
    console.log("age : "+age);
    console.log("grade : "+grade)
}
printStudentInfo();

//task-74
// Write a function that takes two arrays of numbers as arguments and returns a new array with the elements from both arrays combined.

// Steps:
// 1. Start
// 2. Define a function called "combineArrays" that takes two arrays array1 and array2 as arguments.
// 3. Initialize an empty array called "combinedArray" to store the combined elements from both arrays.
// 4. Iterate over each element in array1 using a loop and push each element into "combinedArray".
// 5. Iterate over each element in array2 using a loop and push each element into "combinedArray".
// 6. Return "combinedArray".
// 7. End

function combineArrays(array1,array2){
    let combinedArray=[]
    for(let i=0;i<array1.length;i++){
        combinedArray.push(array1[i])
    }
    for(let j=0;j<array2.length;j++){
        combinedArray.push(array2[j])
    }
    return combinedArray
}
let a=[1,2,3]
let b=[5,6,7]
let result=combineArrays(a,b)
console.log(result)

let another_method=a.concat(b)
console.log(another_method)

// const prompt=require('prompt-sync')();
// let FullName =prompt("enter the name :")
// console.log(FullName)

//task-75
// Implement a counter function using closure that returns an object with two methods: increment( ) and getCount( ). 
// The increment( ) method should increment a counter variable, and getCount( ) should return the current count value.

function create_counter(){
    let count=0;
    return {
        increment:function() {
            count++
        },
        getCount:function (){
            return count;
        }
    }
}

let closure =create_counter()
closure.increment();
console.log(closure.getCount())

// task-76

// Write a function that logs a message after a delay of 2 seconds using setTimeout.

// Steps:
// 1. Start
// 2. Define a function called "logMessageAfterDelay".
// 3. Inside the "logMessageAfterDelay" function:
// Use setTimeout function.
// 4. Pass a callback function as the first argument to setTimeout.
// Inside the callback function:
// 5. Log the message "Message after 2 seconds!".
// 6. Set the delay to 2000 milliseconds (2 seconds).
// 7. Call the "logMessageAfterDelay" function.
// 8. End

function logMessageAfterDelay(){
    setTimeout(function() {
        console.log("Message after 2 seconds!");
    }, 2000); 
}
 logMessageAfterDelay();

//  task 77
// Task: Order Food Delivery

// Steps :
// 1. We define a function called "orderFoodDelivery" that takes the name of the food item as an argument.
// 2. Inside the function, we return a new Promise .
// 3. We placing an order by displaying a message.
// 4. We use "setTimeout" to simulate waiting for the order confirmation.
// 5. After the delay, we resolve the Promise to indicate that the order has been confirmed.
// 6. We call the "orderFoodDelivery" function with the chosen food item.
// 7. We handle the resolved Promise by displaying a message that the order has been confirmed and the food is on its way.


function orderFoodDelivery(foodItem){
    return new Promise((resolve,reject)=>{
        console.log(`Placing order for ${foodItem}...`);
        setTimeout(()=>{
            resolve(`Order for ${foodItem} has been confirmed. Your food is on its way!`)
        },2000);
    });
}
orderFoodDelivery("pizza")
.then((message)=>{
    console.log("order is confirm")
});

// task-78

function orderFoods(){
     return new Promise((resolve,reject)=>{
       console.log("placing the order");
       setTimeout(()=>{
        resolve("order is confirming")
       },2000);
     });
}
async function working(){
    await orderFoods();
}
working();

// task-79

// To Create an instagram website & Fetch the images using 
// url = "https://fakestoreapi.com/products".

let url="https://fakestoreapi.com/products"
fetch(url)
.then((Response)=>{
    return Response.json();
})
.then((data)=>{
    for(let item in data){
         console.log(data[item].image);
        //console.log(`Rate:${data[item].rating.rate} ,count: ${data[item].rating.count}`) // for getting both rate and count
    }
})