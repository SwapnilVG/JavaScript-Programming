// 1. Use logical operators to find whether the age of a person lies between 10 and 20?

let prompt = require("prompt-sync")();
let Age =parseInt(prompt("Please Enter Your Age "))
if (Age >10 && Age<20){
    console.log("Your Age is Lies Between 10 and 20");
}
else{
    console.log("Your Age Not Lies Between 10 and 20")
}


// 2 Demonstate The Use Of Switch Case Statements 
let user = prompt("Enter User No: ")
switch(user){
    case "a":
        console.log("The User is student");
        break
    case "b":
        console.log("The User is Teacher");
        break
    case "c":
        console.log("The User is Principal");
        break
    case "d":
        console.log("The User is Administrator");
        break
}


// write a javascript program to find whether a number is Divisible by 2 and 3
let number = parseInt(prompt("Enter Number: "))
if(number%2==0 && number%3==0){
    console.log(`${number} is Divisible by 2 and 3`);
}
else{
    console.log(`${number} is Not Divisible by 2 and 3`);
    
}



// write a javascript program to find whether a number is Divisible by either 2 and 3
let number_or = parseInt(prompt("Enter Number: "))
if(number_or%2==0){
    console.log(`${number_or} is Divisible by 2`);
}
else if(number_or%3==0){
    console.log(`${number_or} is Divisible by 3`);
}
else{
    console.log(`${number_or} is Not Divisible by 2 or 3`);
    
}



//print "You can drive" or "You Cannot Drive" based on age being greater the 18 using ternary operator
let drivingAge = parseInt(prompt("Enter drivingAge :"))
console.log((drivingAge>=18? "You Can Drive":"You Cannot Drive"));