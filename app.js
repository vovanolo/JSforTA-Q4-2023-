// console.log("hello world!");  

// console.log("hello world!"); // here is an output of hello world

// // here is my comment



// console.log(some);

// variables - place to store the data

// var  (const let)

// let message = "hello world!"; // can be changed
// const VARIABLE = "hello";


// message = "hello guys";
// message = 25;
//  " " - string - represt the text
// dynamic typed language
// message = 25;
// 1 word - lovercase
// 2 or more words - camelCase or PascalCase

// myNameIsCorrect - camelCase
// myNameisCorrect - PascalCase

// console.log(message);  


// Data types

// 

// console.log("hello" + "world!");

// let name = 5;

// let name = true;


// console.log(`My name is ${name}`);

// let x = "ssfsf";

// console.log(typeof x);


// interaction with user


// alert()

// let name = "John"

// alert(`my name is ${name}`)

// prompt()

// let name = prompt("Please enter your name");

// console.log(name);

// confirm()

// let isOk = confirm("Are you okay?");

// console.log(isOk);

// task2

// ...

// task3

// ....

// Math

// 2 ** 4

// 4 ** (1/2)
// Math.sqrt(4);
// Math.pow(2, 4);


// console.log(10 + "5"); // "105"

// 1 - true
// 0 - false
// "" - false
// "sfs" - true


// let age = prompt("How old are you");

// let result = (age > 21) ? "You are 21+" : "You are 21-";

// alert(result);


// const people = ["John", "Peter", "Bob", "Doe"];

// console.log(people);
// console.log(people[1]);
// people[1] = "Mykola";
// console.log(people);

// console.log(people[5]);

// people[4] = "Ivanna";

// people[8] = "Virginia"

// console.log(people);

// console.log(people.length);
// people.push("Virginia");

// console.log(people);

// people.pop();

// console.log(people);

// people.unshift("Olha");

// console.log(people);
// let age = +prompt("How old are you");

// if (age > 21) {
//     console.log("age is 21 +");
// }

// if (age > 21) {
//     console.log("age is 21 +");
// } else {
//     console.log("age is 21-");
// }

// if (age > 21 && age < 30){
//     console.log("age is 21-30");
// }else if (age > 30 && age < 40){
//     console.log("age is 30-40");
// }else if (age > 40 && age < 50){
//     console.log("age is 40-50");
// }else{
//     console.log(" age is 21- or 50+");
// }


// switch case


// let age = +prompt("How old are you");

// switch(age){
//     case 21:
//         console.log("age is 21");
//         break;
//     case 22:
//         console.log("age is 22");
//         break;
//     default:
//         console.log("age is not 21 or 22");
        // break;
// }


// switch(true){
//     case age > 21 && age < 30:
//         console.log("age is 21-30");
//         break;
//     case age > 30 && age < 40:
//         console.log("age is 30-40");
//     default:
//         console.log("age is not 21-40");
//         break;
// }


// let age = +prompt("How old are you");

// if (age !== 21){

// }


// for loop
// let k = 5
// for(let i = 10; i >= 0; i -= 1) {
//         console.log(i);
// }

// break; continue

// for (let i = 0; i < 10; i++){
//         console.log(i);
//         if(i === 5){
//            break;
//         }
// }
// for (let i = 0; i < 10; i++){
//         if(i === 5){
//            continue;
//         }
//         console.log(i);

// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// for(let i = 0; i < numbers.length; i+= 1){
//         // console.log(numbers[i]);
//         if(numbers[i] === 5){
//                 console.log("five is here");
//                 break;
//         }
// }

// for of / for in

// for(let element of numbers ){
//         console.log(element);
// }

// for(let index in numbers){
//         console.log(numbers[index]);
// }

// function

// function sayHello(){
//         console.log("hello huys");
// }

// sayHello();


// function myFunction(message){
//         console.log(message);
// }


// myFunction("hello guys");

// function sum(a,b){
//         console.log(a + b);
// }

// sum(5,6);


// function sum(){
//         // console.log(arguments);
//         let result = 0;
//         for(let element of arguments){
//            result += element;
//         }
//         console.log(result);
// }

// sum(3,4,5,6,7,8,9,8,45,3,2);

// function sum(a,b){
//         // console.log(a + b);
//         let result = a + b;
//         // alert(result);
//         return result;
// }

// let result = sum(5,5);

// console.log(result);

// name();
// secondName();

// function declaration
// function name(){
//         console.log("name");
// }

// function expression

// let secondName = function(){
//         console.log("second name");
// }

// let x = 10;
// let y = 5;
// let z = x + y;

// console.log(z);

// console.log(;

// printMe();

// try{
//         let x = 10;
//         printMe();
// } catch(exception){
//         console.log("Error found");
// }

// try{
//     printMe(); //error
// }catch(exception){
//         console.log(exception.name);
//         console.log(exception.message);
//         console.log(exception.stack);


// }



// try{
//         let age = prompt("How old are you?");
//         if(age < 18){
//                 throw new Error("Age must be greater than 18");
//         }else{
//                 console.log("Welcome user");
//         }
// }catch(exception){
//         console.log(exception.name);
// }


// const people = ["John", "Diana", "Peter", "Mykola", "Vsevolod"];


// forEach map reduce filter find

// for(let element of people){
//         console.log(element);
// }

// people.map(function(element, index){
//         // console.log(element);
//         // console.log(index);
// })

// let newPeople = people.map(function(element, index){
//         return element + "2";
// })
// console.log(newPeople)

// const numbers = [1,2,3,4,5,6,7,8,9];

// let result = numbers.reduce(function(multRes, element){
//         return multRes * element;
// }, 1)

// console.log(result);

// const user = {
//         name: "John",
//         age: 15,
//         address: '123 Main St',
//         friends: ["John", "John"], 
//         // age: 18,
//         sayHello: function(){
//                 // console.log("hello");
//                 // console.log(user.name);
//                 // this
//                 // console.log(this.name); - best practice
//         }
// }

// console.log(user);
// console.log(user.name);

// let key = "name";
// console.log(user[key]);
// console.log(user.key);

// user.name = "Peter";

// user.surname = "PeterSon"

// delete user.address;

// user.name = "Volodymyr"

// user.sayHello();
// console.log(user);


// class User {
//         constructor(name, age, email){
//                 this.name = name;
//                 this.age = age;
//                 this.email = email;
//         }

//         showName(){
//                 console.log(this.name);
//         }
// }

// let user1 = new User("Peter", 20, "peter@gmail.com");
// let user2 = new User("John", 25, "john@gmail.com");

// console.log(user1.name);
// user1.name = "John";

// console.log(user1.name);



// user1.showName();

// user2.showName();
// console.log(user1);

// const title = document.getElementById("title");
// const title = document.querySelector("#title");

// console.log(title);

// let titles = document.querySelectorAll("#title");

// titles = [...titles];

// console.log(titles);

// const list = document.querySelector(".list");


// console.log(list.children);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
// console.log(list.lastElementChild.previousElementSibling);
// console.log(list.firstElementChild.nextElementSibling);

// const textbox = document.querySelector(".textbox");

// console.log(textbox.innerHTML);
// console.log(textbox.outerHTML);

// textbox.outerHTML = "<h1>text from js<h1/>"

// textbox.innerHTML = "text from js";
// textbox.innerHTML = "<h1>text from js<h1/>";


// const input = document.querySelector(".inp");

// console.log(input);
// console.log(input.value);
// console.log(input.className);
// input.value = "new value";
// input.className = "textbox";

// const heading = document.createElement("h1");
// const textbox = document.querySelector(".textbox");


// heading.className = "heading";
// heading.innerHTML = "text from js";



// textbox.appendChild(heading);
// textbox.append(heading);

// console.log(heading);


// const textbox = document.querySelector(".textbox");

// textbox.innerHTML = '<h1 class="heading">text from js</h1>'
// textbox.innerHTML += '<h1 class="heading">text from js</h1>'

// textbox.innerHTML = `<h1 class="heading">text from js</h1>
// <p>some text from js</p>
// <button>press me</button>
// `

// textbox.style.color = "red";
// textbox.style.backgroundColor = "blue";

// let newWindow = window.open("https://google.com" , "", "width=250 height=250 top=200 left=150");

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// function sayHello(){
//         console.log("hello world!");
// }


// header.addEventListener("click", function(){
//         console.log("click from js");
// })


// let btn = document.querySelector(".btn");
// let header = document.querySelector(".header");
// let inp = document.querySelector(".inp");


// function handleClick(){
//         console.log("click from js");
// }

// btn.addEventListener("click", function(event){
//         // console.log(event.type);
//         // console.log(event.target);
//         event.target.style.color = "green";

// });

// btn.addEventListener("click", function(event){
//         header.style.color = "red";
// })

// btn.addEventListener("click", function(){
//         console.log(inp.value);
// })

// let form = document.querySelector(".form");
// const name = document.querySelector(".name");
// const surname = document.querySelector(".surname");

// form.addEventListener("submit", function(event){
//         event.preventDefault();
//         // console.log("form was submitted");

//         alert(`Welcome ${name.value} ${surname.value}`);


// })


// setTimeout


// setTimeout(function(){
//         console.log("message after 5 sec")
// }, 5000);

// setInterval(function() {
//        console.log("message every 5 sec") 
// }, 5000);