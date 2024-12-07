let prompt = require("prompt-sync")();
let age = prompt("Enter your age:")

switch(age){
    case "12":
        console.log("Your age is 12");
        break
    case "15":
        console.log("Your age is 15");
        break
    case "18":
        console.log("Your age is 18");
        break
    case "16":
        console.log("Your age is 16");
        break
    case "20":
        console.log("Your age is 20");
        break
    default:
        console.log("Your age is not valid age");

}


const newDate = new Date().toLocaleString()
console.log(newDate)