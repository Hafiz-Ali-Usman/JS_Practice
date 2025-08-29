console.log("Basic JavaScript Practice"); 

// Var can be redefine and declare
var x=0;
console.log(x);
var x=10;
console.log(x);

// Let declare only once but change the value again and again
let y=10;
console.log(y);
y=11;
console.log(y);

// Const only once define and declare
const z=9;
console.log(z)

// ...............................Data Types..............................
var x='ali usman';   // String
var x=25;            // Number
var x=true;          // Boolean
var x=['ali','usman']; // Array
var x={a:10,b:9};    // Object
var x=null;          // Null
var x;               // Undefined

// ...............................Arithmetic Operators..............................
let a=10, b=3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// ...............................Assignment Operators..............................
let c=5;
c+=2;
console.log(c);
c-=1;
console.log(c);
c*=3;
console.log(c);
c/=2;
console.log(c);

// ...............................Comparison Operators..............................
console.log(5==5);
console.log(5===5);
console.log(5!=4);
console.log(5>3);
console.log(5<10);
console.log(5>=5);
console.log(5<=2);

// ...............................If Statements..............................
let num=7;
if(num>5){
  console.log("Greater than 5");
}

if(num<5){
  console.log("Less than 5");
}else{
  console.log("Not less than 5");
}

if(num<5){
  console.log("Less than 5");
}else if(num==7){
  console.log("Equal to 7");
}else{
  console.log("Other number");
}

// ...............................Logical Operators..............................
console.log(true && false);
console.log(true || false);
console.log(!true);

// ...............................Ternary Operator..............................
let age=18;
let result=(age>=18) ? "Adult" : "Minor";
console.log(result);

// ...............................Switch Statement..............................
let day=2;
switch(day){
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Other day");
}

// ...............................Alert, Confirm, Prompt..............................
// Uncomment to test in browser
// alert("Hello");
// let isOk=confirm("Are you sure?");
// console.log(isOk);
// let name=prompt("Enter your name:");
// console.log(name);

// ...............................Functions..............................
function add(a,b){
  return a+b;
}
console.log(add(4,6));

const multiply=(x,y)=>x*y;
console.log(multiply(3,5));


// ...............................Function with Return Value..............................
function square(n){
  return n*n;
}
console.log(square(5));

// ...............................Global and Local Variables..............................
var globalVar="I am global";
function test(){
  let localVar="I am local";
  console.log(globalVar);
  console.log(localVar);
}
test();

// ...............................Events (works in browser)..............................
// <button onclick="alert('Button Clicked')">Click Me</button>

// ...............................While Loop..............................
let i=1;
while(i<=5){
  console.log(i);
  i++;
}

// ...............................Types of Loops..............................
// for, while, do...while, for...of, for...in

// ...............................Do While Loop..............................
let j=1;
do{
  console.log(j);
  j++;
}while(j<=5);

// ...............................For Loop..............................
for(let k=1;k<=5;k++){
  console.log(k);
}

// ...............................Break and Continue..............................
for(let m=1;m<=5;m++){
  if(m==3) break;
  console.log(m);
}
for(let n=1;n<=5;n++){
  if(n==3) continue;
  console.log(n);
}

// ...............................Nested Loop..............................
for(let x=1;x<=3;x++){
  for(let y=1;y<=2;y++){
    console.log(x,y);
  }
}

// ...............................Arrays..............................
let arr=[10,20,30,40];
console.log(arr);

// ...............................Multidimensional Arrays..............................
let multi=[[1,2],[3,4],[5,6]];
console.log(multi[1][0]);

// ...............................Modify, Delete Array Elements..............................
arr[1]=25;
console.log(arr);
delete arr[2];
console.log(arr);

// ...............................Sort and Reverse..............................
let numer=[3,1,4,2];
numer.sort();
console.log(numer);
numer.reverse();
console.log(numer);

// ...............................Pop and Push..............................
let fruits=["apple","banana"];
fruits.push("mango");
console.log(fruits);
fruits.pop();
console.log(fruits);

// ...............................Slice and Splice..............................
let colors=["red","green","blue","yellow"];
console.log(colors.slice(1,3));
colors.splice(2,1,"purple");
console.log(colors);

// ...............................Shift and Unshift..............................
let cities=["Lahore","Karachi","Islamabad"];
cities.shift();
console.log(cities);
cities.unshift("Multan");
console.log(cities);

// ...............................Concat and Join..............................
let arr1=[1,2], arr2=[3,4];
let merged=arr1.concat(arr2);
console.log(merged);
console.log(merged.join("-"));

// ...............................Array Methods..............................
let numbers=[5,10,15,20];
console.log(numbers.indexOf(15));
console.log(numbers.includes(10));
console.log(numbers.map(n=>n*2));
console.log(numbers.filter(n=>n>10));
console.log(numbers.reduce((a,b)=>a+b));

// ...............................Objects..............................
let person={name:"Ali",age:22,city:"Lahore"};
console.log(person.name);
console.log(person["city"]);

// ...............................Array of Objects..............................
let students=[
  {name:"Ali",marks:85},
  {name:"Usman",marks:90},
  {name:"Sara",marks:78}
];
console.log(students[1].name);

// ...............................For...in Loop..............................
for(let key in person){
  console.log(key,person[key]);
}

// ...............................Array Methods..............................
let nums=[1,2,3,4,5];
console.log(nums.map(n=>n*2));       // map
console.log(nums.filter(n=>n>2));    // filter
console.log(nums.find(n=>n==3));     // find
console.log(nums.every(n=>n>0));     // every
console.log(nums.some(n=>n>4));      // some
console.log(nums.reduce((a,b)=>a+b)); // reduce

// ...............................String Methods..............................
let str=" JavaScript ";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.includes("Script"));
console.log(str.indexOf("S"));
console.log(str.slice(0,4));
console.log(str.replace("Java","Type"));
console.log(str.split(" "));

// ...............................Math Methods..............................
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.max(10,5,20));
console.log(Math.min(10,5,20));
console.log(Math.random());
console.log(Math.pow(2,3));
console.log(Math.sqrt(16));
