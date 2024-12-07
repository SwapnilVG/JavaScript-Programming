console.log('--------------------let Var And Const and Temporal Dead Zone--------------------------')
var name = 'PW Skills'
console.log(name)

var name1  = 'PW Skills';
console.log(name1)

function PrintName(){
    console.log(name1)
}
PrintName()

//In JavaS0ript, the var keyword i# used to declare a variable. this keyword has been used sin0e the early days of JavaS0ript and is still widely used today.
try{
    function Youtube(){
        var ChannelName = "College Wallah"
    }
    console.log(ChannelName)
    
}catch(error){
    console.log(error.message)
}


console.log(namee)
var namee = 'Pw Skills'


var name2 = 'PW Skills'
var name2 = 'College Wallah'
console.log(name2)



try{
    //Arrow functions declared with var are hoisted but are not accessible until they are assigned
    printName()
    var name3 = 'PW Skills'
    var printName = function(){
        console.log(name3)
    }       
}catch(error){
    console.log(error.message)
}



//Let is a keyword used to declare block-scoped variables. Block-scoped variables are only accessible within the block they are declared in, which is defined by curly braces {}.

let name4 = 'PW Skills'
console.log(name4)

try {
    {
        let name5 = 'PW Skills'
    }
    console.log(name5)
} catch (error) {
    console.log(error.message)
}



// let name6 = 'PW Skills'
// let name6 = 'College Wallah'

let name6 = 'PW Skills'
name6 = 'College Wallah'
console.log(name6)



try {
    console.log(name7)
    let name7 = 'PW Skills'
} catch (error) {
    console.log(error.message)
}




let PrintName3 = function(){
    console.log('PW Skills')
}
PrintName3()


try {
    PrintName4()
    let PrintName4 = function(){
        console.log("PW Skills")
    } 
} catch (error) {
    console.log(error.message)
}



const name8 = 'PW Skills'
console.log(name8)

try {
    const name9 = 'College Wallah'
    name9 = 'PW Skills'
} catch (error) {
    console.log(error.message)
}


const techStack =  ['HTML','CSS']
console.log(techStack)
techStack.push("JavaScript")
console.log(techStack)



// const name10 = 'PW Skills'
// const name10 ='College Wallah'


try {
    {
        const name11 = 'PW Skills'
    }
    console.log(name11)
} catch (error) {
    console.log(error.message)
    
}



try {
    console.log(name12)
    const name12 = 'PW Skills'
} catch (error) {
    console.log(error.message)
}


try {
    printName5()
    const printName5 = function(){
        console.log('PW Skills')
    }
} catch (error) {
    console.log(error.message)
}


try {
    console.log(name13); // Variable name is in TDZ
    let name13 = "PW Skills";
    
} catch (error) {
    console.log(error.message)
}


try {
    var printName = () => {
        console.log(name); // ReferenceError: Cannot access 'name' before initialization   
        let name = "PW SKills";     
      };
      
      printName();
} catch (error) {
    console.log(error.message)
}


console.log('--------------------Scope / Lexical Scope / Block Scope--------------------------')

console.log("--------------global Scrope------------------")
var name14 = 'Pw Skills'
function printName6(){
    console.log(name14)
}
printName6()
console.log(name14)

console.log("\n--------------Local Scope------------------")

try {
    function printName7(){
        var name15 = 'Pw Skills'
        console.log(name15)
    }
    printName7()
    console.log(name15)
} catch (error) {
    console.log(error.message)
}

console.log("\n--------------Lexical Scope------------------")
function parentFunction(){
    var parentVariable = "I am a variable declared in parent function."

    function childFunction(){
        var childVariable = "I am a variabe declared in child function"
        console.log(parentVariable)
        console.log(childVariable)
    }
    childFunction()
}
parentFunction()

console.log("\n--------------Block Scope------------------")
try {
    function printValues(){
        let a = 1
        if(a==1){
            let b = 2
            let c = 3
            console.log(a,b,c)
        }
        console.log(a)
        console.log(b)
        console.log(c)
    }
    printValues()
} catch (error) {
    console.log(error.message)
}

console.log("\n--------------Hoisting------------------")
var name16; // Variable "name" is initialized: memory is allocated with the value undefined.
console.log(name16); // undefined
name16 = "PW Skills"; // Variable "name" is assigned with a value "PW Skills".
console.log(name16); // PW Skills

console.log("\n--------------Single Thread------------------")
// console.log("Start")
// setTimeout(function(){
//     console.log("setTimeout")
// },0)
// console.log("End")

console.log("\n--------------Execution Context------------------")
let x = 10 
let y = 15
let result2 = eval("x+y")
console.log("eval",result2)

console.log("\n--------------Call Stack------------------")
function getsum(x,y){
    return x+y
}
function findavg(x,y){
    return getsum(x,y)/2
}

let result = findavg(10,2)
console.log(result)

console.log("\n--------------Working of Function------------------")
printMessage();
function printMessage() {
  console.log("Welcome to PW Skills");
}


try {
    console.log(printMessage01());

    var printMessage01 = function () {
    console.log("Welcome to PW Skills");
};
} catch (error) {
    console.log(error.message)
}

console.log("\n-----Arrow functions.----------")

try {
    console.log(printMessage02());

    var printMessage02 = ()  => {
    console.log("Welcome to PW Skills");
};
} catch (error) {
    console.log(error.message)
}