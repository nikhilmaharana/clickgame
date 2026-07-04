// console.log("Hello World");
// console.log("Welcome to JS class");

// // Variables : 
// name = "Nikhil";
// console.log(name);

// name = "Nikhil";
// Name = "Sivam";

// // letter, digit , underscore, $ 

// fullname = "Sivam Gouda";
// full_name = "Sivam Gouda";
// _fullname = "Sivam Gouda";
// $fullname = "Sivam Gouda";

// Name , age , gender 

// var , let , const

// var name = "Nikhil";
// var name = "Sivam";
// console.log(name);
// // re declare and update


// let Name = "Sivam";
// Name = "Nikhil";
// console.log(Name);
// // not redeclare but update is possible


// const fullname = "Sivam Gouda";
// fullname = "Nikhil";
// console.log(fullname);
// // not redeclare and not update

// let name;
// name = "Sivam";
// name = "Nikhil";
// console.log(name);

// const age=23;
// console.log(age);


// Block Scope :

// const fullname = "Sivam Gouda";
// console.log(fullname);

// {
//     {
//         const fullname = "Sivam Gouda";
//         console.log(fullname);
//     }
//     const fullname = "Sivam Gouda";
//     console.log(fullname);
// }

// {
//     const fullname = "Sivam Gouda";
//     console.log(fullname);
// }

// Data Types : 


// Primitive : Number , String , Boolean , Null , Undefined , Symbol , BigInt
// age = 23;
// price = 99.99;  // Number

// name = "Sivam";
// fullname = 'Sivam Gouda'; // String

// isPass = false;  // boolean

// Nu = null; // null

// y = undefined; // undefined

// let a = Symbol("Sivam");  // Symbol

// let b= BigInt(1234567890123456789012345678901234567890);   // BigInt

// typeof



// Non Primitive : Object , Array , Function

// // Object : key value pair
// const person ={
//     fullname : "Sivam Gouda",
//     age : 22,
//     gender: "male",
//     isValid : true
// };
// console.log(person);
// // Key : Value,

// console.log(typeof person.fullname);

// console.log(typeof person.age);

// console.log(typeof person.gender);

// console.log(typeof person.isValid);



// Arithmatic Operator ( + , - , * , / , % ,**)

// Assignment Operator ( = , += , -= , *= , /= , %= , ** =)

// a = 5;
// a **= 3; 
// console.log(a);

/* 
jbsdgkjsbmnsdc
skjdbcksjdb
kcjsbkdvb
kn sdcmn zd

*/

//Operators

// b = 10
// c = b-- + --b;


// console.log(c);

// Comparision Operators

// a = 2;
// b = 2;
// c = 2;

// // console.log(a>b);
// // console.log(a<b);
// // console.log(a>=b);
// // console.log(a<=b);

// // Logical Operator

// // && = 2  , || = 1 , ! 

// console.log(a==b || b<c);
// console.log(a!=b || b==c);

// d= true;
// console.log(!d);

// Conditional Statements 

// if 

// a = 17;

// if (a<5){
//     console.log("A is Less than 5");
// }else if(a>20){
//     console.log("A is greater than 20");
// }else{
//     console.log("Between 5 - 20");
// }

// age = 17;
// age >= 18 ? console.log("Ready for vote") : console.log("Not Ready for vote");

// cgpa = Number(prompt("Enter your CGPA : "));

// switch (cgpa) {
//     case 9:
//         console.log("Grade A");
//         break;
//     case 8:
//         console.log("Grade B");
//         break;

//     default:
//         console.log("Grade C");
//         break;
// }


// even or odd 

// switch 80> - A
// 70 > - b
// 60> - c
// 60< - f

// marks = Number(prompt("Enter your marks : "));

// switch(marks){
//     case 80:
//         console.log("Grade A");
//         break;
//     case 70:
//         console.log("Grade B");
//         break;
//     case 60:
//         console.log("Grade C");
//         break;
//     default:
//         console.log("Grade F");
//         break;
// }


// Loops : 
// console.log("For Loop: ");
// for (let i =1 ; i<=100 ; i++){
//     console.log("Sivam");
// }

// console.log("While Loop : ");
// let j = 0;
// while(j>1){
//     console.log("Sivam");
//     j++;
// }

// console.log("Do While Loop : ");
// k=0;
// do{
//     console.log("Sivam");
// }while(k>1);

// let str = "Sivam Gouda"
// for (let i in str){
//     console.log(i);
// }

// 0 - 100 
// let evencount =0;
// console.log("Even Numbers: ");
// for(let i= 1; i<=100; i++){
//     if (i%2==0){
//         evencount++;
//         console.log(i);
//     }
// }

// let oddcount = 0;
// console.log("Odd Numbers: ");
// for(let i= 1; i<=100; i++){
//     if (i%2!=0){
//         oddcount++;
//         console.log(i);
//     }
// }

// console.log("Total Even Numbers: ", evencount , "Total Odd Numbers: ", oddcount);



//  String  

// a - z ; characters 
// String - Collection of characters

// let str = "Hello World";
// let i = 200;
// let age = 23;
// //         0123456789 - Indexing
// //         12345678910 - Length
// // console.log(typeof str);
// // console.log(str.length);
// // console.log(str[9]);

// // Template Lirterals :  ` `

// console.log(str , i);

// console.log("Nikhil ","Roll Number: ", 20+20 , "Age : " , age);

// console.log(`Nikhil, RolNumber: ${40} , Age: ${10+10+3}`);

// let obj = {
//     item: "Motorola",
//     price : 13999
// };

// console.log(obj);
// // console.log(`Item Name: ${obj.item}\nPrice: ${obj.price}/-`); // String Interpolation

// let firstname = "Sivam";
// let lastname = " Gouda"

// firstname = firstname.replace('a', 'o');
// // console.log(name);
// // console.log(name.toLowerCase());
// // console.log(name.trim());
// console.log(firstname.concat(lastname));

// FullName: Nikhil Maharana ; Output: UserName: @nikhilmaharana14 

// Arrays 
// let a = [12,"Nikhil",23.99];
// let marks = [98,99,97,82,87];
// let len = marks.length;

// // console.log(marks);
// // console.log(marks.length);
// // marks[2] = 66;
// // console.log(marks);
// console.log(marks);
// for(let i = 0; i<len ; i++){
//     marks[i] = i+1;
//     console.log(marks[i]);
// }
// console.log(marks);
// console.log(marks.toString());

// // [250,645,300,900,500,466,789,987,998]  10%  o/p : [225, ... , ... ,... ,...]

// ((90/100)*250)

// let marvelheros = ["Spiderman","Ironman","Captain America"];
// let dcheros = ["Superman","Batman"];

// console.log(marvelheros);
// console.log(dcheros);

// let heros = marvelheros.concat(dcheros);
// console.log(heros);
// console.log(heros.toString());


// function greet(){
//     console.log("Good AfterNoon");
// }

// greet();
// greet();
// greet();
// greet();
// greet();

// // Function 
// // let a = 20;
// // let b = 30;
// // let c = a+b;

// function add(a, b){
//     let c =a+b;
//     console.log(`${a} + ${b} = ${c}`);
// }

// // console.log(`${a} + ${b} = ${c}`);
// add(20,30);
// add(30,50);
// add(87,13);


// "TCS" ["Google", "Microsoft","Netflix"] "Infosys" 

// Arrow Function

// const arrowAdd = (a,b) => {
//     return a+b;
// }

// let nu = arrowAdd(2,3);
// let n = arrowAdd(5,5);

// String Input -- Output No of vowels 


// let vowelcount = (str) => {
//     str.toLowerCase();
//     let count = 0;
//     for(let i = 0; i < str.length ; i++){
//         if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' ){
//             count++;
//         }
//     }
//     return count;
// }

// let name = prompt("Enter A String: ")
// console.log(`The Vowel Count of String ${name} is ${vowelcount(name)}`);

// DOM - Document Object Model

// function changeText(){
//     document.getElementById("title").innerHTML= "Hello This is A JS Class...";
// }
//document.querySelector(".classname")
// "#idname"
// "h1"

// .querySelectorAll("")

// .innerHTML
// .InnerText
// .textContent

// const heading = document.createElement("h1");
// const headingText = document.createTextNode("Big Head!");

// .name
// #name
// h1


// Class - Object - Properties

// function createContent() {
//             // Create a heading
//             // 100
//             let heading = document.createElement("h1");
//             heading.textContent = "Welcome to JavaScript DOM";

//             // Create a paragraph
//             let para = document.createElement("p");
//             para.textContent = "This paragraph is created using JavaScript.";

//             // Add them to the webpage
//             document.body.appendChild(heading);
//             document.body.appendChild(para);
//         }

// => 

// Calculator 

// let evenno = () => {
//     a = prompt("Enter a Range: ")
//     let result = [];
//     if (a > 0) {
//         for (let i = 0; i <= a; i++) {
//             if (i % 2 == 0) {
//                 result.push(i);
//             }
//         }
//     } else {
//         let par = document.createElement("p");
//         par.textContent = "Error";
//         document.body.appendChild(par);
//     }
//     let par = document.createElement("p");
//     par.textContent = `${result}`;
//     document.body.appendChild(par);
// }


// // Math.floor(2.666); - 2
// let i = Math.floor(Math.random() * 10); // 0 - 1 , 0.999999999 
// //  1 - 10  ( 0.9999999 * 10 ) - 9
// console.log(i);

let clicks = 0;

let btn = document.getElementById("btn");
let count = document.getElementById("count");

const colors = [
    "lightblue",
    "lightgreen",
    "lightpink",
    "lightyellow",
    "lavender",
    "lightred"
];

btn.addEventListener("click",function(){

    const randomIndex = Math.floor(Math.random() * colors.length); // 0 - 5 

    document.body.style.backgroundColor = colors[randomIndex];

    clicks++;

    count.innerText = `Button clicked: ${clicks} times`;

});