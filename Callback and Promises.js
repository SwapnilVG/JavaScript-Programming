function h(x,fn){
    console.log( x+x)
    fn(x*x)
}
// h(6,function(){
//     console.log("Addition")
// })
h(6,exec)


function exec(n){
    console.log("Square root is",n)
}

// function h(x,fn){
//     console.log(x+x)

//     fn(3)
// }

// h(5, function(mul){
//     console.log("hello")
//     console.log(mul * mul)
// })


// console.log("Start")
// setTimeout(function s(){
//     console.log("Calling setTimeout 1")
// },500)

// setTimeout(function v(){
//     console.log("Calling setTimeout 2")
// },0)
// console.log("End")

console.log("\n--------------------------------")


function operation(num, func) {
    func(num);
  }
  operation(5, squareOfANumber);  
  function squareOfANumber(num){
      console.log(num * num);
    }
      
console.log("\n-------------Synchronous operations------------------")

console.log("Start");
function function1() {
  console.log("Executing Function 01");
}
function function2(callback) {
  callback();
  console.log("Executing Function 02");
}
function2(function1);
console.log("End");

console.log("\n-------------Asynchronous operations.------------------")

console.log("Start");
setTimeout(() => {
  console.log("Set Timeout is being executed");
}, 2000);
console.log("End");

console.log("\n--------------------------------")
console.log("Start");
setTimeout(function () {
  console.log("Executing Function 01");
  setTimeout(function () {
    console.log("Executing Function 02");
    setTimeout(function () {
      console.log("Executing Function 03");
    }, 1000);
  }, 1000);
}, 1000);
console.log("End");

console.log("\n-------------Promise Constructor------------------")
let newPromise = new Promise((resolve,reject)=>{
  let random = Math.random()
  console.log(random)
  if(random > 0.5){
      resolve("The Promise is resolved. The number is greater than 0.5")
  }
  else{
      reject("The Promise is rejected. The number is lesser than 0.5")
  }
})

console.log(newPromise)

newPromise
.then((result)=>console.log(result))
.catch((error)=>console.log(error))
.finally(()=>console.log("Print value"))


console.log("\n--------------------------------")

let prompt = require("prompt-sync")();
let p = new Promise((resolve,reject)=>{
  let age = prompt("Enter Your Age")
  if(age>18){
      resolve("You Can vote")
  }
  else{
      reject("You Cannot vote")
  }
})
console.log(p)

p
.then((result)=>console.log(result))
.catch((error)=>console.log(error))
.finally(()=>{console.log("Promise done")})

console.log("\n--------------------------------")

let pro = new Promise(function(resolve,reject){
  resolve({name:"Swapnil", Email:"swapnilgadekar2000@gmail.com"})
})

pro.then(function(user){
  return user.name
}).then(function(username){
  console.log(username)
}).catch(function(error){
  console.log(error)
})

console.log("\n----------async- await---------------------")
function createPromise(){
  return new Promise(function exe(resolve,reject){
    setTimeout(function(){
      console.log("Timer Done")
      resolve(45)
      // reject("Error")
    },3000)
  })
}

async function consume(){
  try{
    console.log("inside function")
    let respond = await createPromise();
    console.log("Respond is",respond)
    console.log("Async Executed")
  }catch(error){
    console.log(error)
  }
}

console.log("Start")
consume();
console.log("End")

console.log("\n--------------------------------")


let promise = new Promise((resolve,reject)=>{
  console.log("Promise Is Printing")
  setTimeout(function(){
    let prompt = require("prompt-sync")();
    let age = prompt("Enter Your Age :")
    if(age>18){
      resolve("You Can Vote")
    }else{
      reject("You Cannot Vote")
    }
  },3000)
})

async function consume(){
  try {
    console.log("async Function Is Printing")
    let reponse = await promise
    console.log("Respond",reponse)
    console.log(promise)
  } catch (error) {
    console.log("Error Occur",error)
    console.log(promise)

    
  }
}
console.log("Start")
consume()
console.log("End")


console.log("\n-------------Fetch API-------------------")
fetch('https://type.fit/api/quotes')
.then((respond)=>{
  return respond.json()
})
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log(error)
})

console.log("\n--------------------------------")

async function getdata(){
  let respond = await fetch('https://type.fit/api/quotes')
  let data = await respond.json()
  console.log(data)
}
getdata()

console.log("\n--------------------------------")

async function getquotes(){
  try{
    let respond = await fetch('https://type.fit/api/quotes')
    let data = await respond.json()
    console.log(data)
  }catch(error){
    console.log(error)
  }finally{
    console.log("API Request Is Closed")
  }
}
getquotes()