console.log("---------------------------------------\n");
function fun() {
    return "Swapnil"
}
let d = fun() + " Gadekar"
console.log(d);

console.log("---------------------------------------\n");
function fun1(){
    console.log("Hi My Name is Swapnil Gadekar");
}
fun1()
fun1()
fun1()

console.log("---------------------------------------\n");
function fun2(name){
    console.log(name);
}
fun2("Hi Harshal")
fun2("Hi Swapnil")

console.log("---------------------------------------\n");
function fun3(x){
    return x*x
}
let s = fun3(4)
console.log("Square",s);

console.log("---------------------------------------\n");
function fun4(a,b){
    return a+b
}
let b = fun4(4,6)
console.log("Addition",b);


console.log("---------------------------------------\n");
function fun5(x,y=2) {
    return x - y
}
f=fun5(8)
console.log("Substraction",f);


console.log("---------------------------------------\n");
function fun5(x=8,y=2) {
    return x + y
}
console.log("Addition",fun5());


console.log("---------------------------------------\n");
function fun6(name){
    console.log(name);
}
fun6("Hi My Name is Swapnil  And I Am Full Stack Web Developer")
fun6("Hi My Name is Harshal  And I Am Pharmacist")
fun6("Hi My Name is Pravin  And I Am Web Developer")

console.log("---------------------------------------\n");
//Function with unlimited number of parameters
function Add() {
    let sum=0;
    for(let i=0; i<arguments.length; i++)
    sum += arguments[i];
    return sum;
}
let result = Add(1,2,3,4,5,6)
console.log(result);

console.log("------------------- Arrow Function--------------------\n");

//1. One parameter, and a single return statement
let add = x => x+x;
let result1 = add(2,2)
console.log(result1);

console.log("---------------------------------------\n");

//2. Multiple parameters, and a single return expression
let mul =(x,y)=> x*y;
let result2 = mul(4,2)
console.log(result2);

console.log("---------------------------------------\n");

// 3. Multiple statements in function expression
const sum = (x, y) => {
    console.log(`Adding ${x} and ${y}`);
    return x + y;
    };
let result3 = sum(1, 2);
console.log(result3);

console.log("---------------------------------------\n");

// 4. Returning an object
const sumAndDifference = (x, y) => ({ sum: x + y, difference: x - y });
let result4 = sumAndDifference(5, 3);
console.log(result4);


console.log("-------------------Anonymous Function--------------------\n");
let swap = function() {
    console.log("HI Swapnil");
}
swap();

console.log("---------------------------------------\n");

let swap1 = function(career) {
    console.log("HI My name is Swapnil And i Am",career);
}
swap1("Full stack web developer")

console.log("---------------------------------------\n");

(function (x) {
    console.log(x * x);
})(5);

console.log("---------------------------------------\n");

setTimeout(function(){
    console.log("Swapnil Vilas Gadekar");
},2000)


console.log("----------------IIFE Function-----------------------\n");
// Immediately Invoked Function Expression
/*An IIFE (Immediately Invoked Function Expression) is a JavaScript function that gets called immediately. It is
a way to execute functions immediately, as soon as they are created.*/

(function(){
    console.log("Swapnil Vilas Gadekar")
})
();

console.log("---------------------------------------\n");

(function(x){
    console.log(x*x)
})
(5)

console.log("----------------Expression Function-----------------------\n");
// Function Expression
let variableName = function () {
    // Function Body
    };
    // Calling a Function
    console.log(variableName());

    console.log("---------------------------------------\n");

// Named Function Expression
let variableName1 = function functionName() {
    // Function Body
    };
    // Calling a Function
    console.log(variableName1());

    console.log("---------------------------------------\n");
    
// Function Declaration
function add1(x, y) {
    return x + y;
    }
    // Function Expression
    let addTwoNumbers = function (x, y) {
    return x + y;
    };

    // Calling the functions
    // Function Declaration : Function Name
    console.log(add1(3, 4)); // OUTPUT: 7
    // Function Expression : Variable Name
    console.log(addTwoNumbers(10, 20));

    console.log("---------------------------------------\n");
    

console.log("----------------Self-invoking functions-----------------------\n");
/* A funcion ha invokes iself immediaely afer is definiion is referred o as a self-invokin. (or self-
execuin.) funcion.

A second se of parenheses follows he se of parenheses surroundin. he anonymous funcion (which
performs he execuion).*/   

(function(){
    console.log(Math.PI);
    })();

(function(x){
console.log(x);
})("Welcome to PW Skills !");    