console.log("---------------------------------------\n");
let age = 17
if (age >= 18){
    console.log("you are allowed to be vote")
}
else{
    console.log("you are not allowed to be vote")
} 
console.log("---------------------------------------\n");

console.log("---------------------------------------\n");
let signal = "red"
if (signal == "red"){
    console.log("Red =>Stop");
}//Condition 1
else if (signal=="Yellow"){
    console.log("Yellow => Go slow");
//Condition 1
} 
else if (signal == "Green") {
    console.log("Green => Go Fast");
//Condition 1
}
else{
    console.log("Invalid");
}
console.log("---------------------------------------\n");

console.log("---------------------------------------\n");
let number = 9
if (number%2==0){
    console.log("Even number");
}
else{
    console.log("Odd number");
}
console.log("---------------------------------------\n");

let balance = 5000
let withdrawal = 2080

if(withdrawal>balance){
    console.log("Insufficent Balance");
}
else{
    let availabe = balance-withdrawal
    console.log("Your available balance is",availabe);
}

console.log("---------------------------------------\n");
let prompt=require("prompt-sync")();
let a = Number.parseInt(prompt("Enter First Number :"))
let c =prompt("Enter Operator:+,-,*,/,% :")
let b = Number.parseInt(prompt("Enter second Number :"))

if(c=="+"){
    console.log("Addition",a+b)
}
else if(c=="-"){
    console.log("Substraction",a-b)
}
else if(c=="*"){
    console.log("Multiplication",a*b)
}
else if(c=="/"){
    console.log("Division",a/b)
}
else{
    console.log("Invalid");
}

console.log("-------------------Ternary Operator--------------------------");
let votingAge = Number.parseInt(prompt("Enter Your Age :"))
console.log(votingAge>=18 ? `Your age ${votingAge} you can vote` : votingAge<=9? `Your age ${votingAge} you are kid now` : votingAge<=10 || votingAge<=15? `Your age ${votingAge} you are teenager now` : `Your age ${votingAge} you cannot vote`  )