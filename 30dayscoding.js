// for(let i=1;i<=10;i++){
//     if(i==6){
//         continue
//     }
//     // console.log(`2 * ${i} = ${2*i}`)
//     console.log(i)
// }

// let i = 1
// while(i<=10){
//     console.log(`2 * ${i} = ${2*i}`)
//     i++
// }

// let i = 1
// do{
//     console.log(`2 * ${i} = ${2*i}`)
//     i++
// }while(i<=10)

// function myName(name){
//     // console.log(`Hi my Name is ${name}`)
//     return(`Hi my Name is ${name}`)
// }

// myName('Swapnil Gadekar')

// function addition(a,b){
//     console.log(`Addition of ${a} and ${b} is ${c=a+b}`)
//     // return a+b
// }

// // console.log(addition(2,2))
// addition(5,3)

//There are four type of Functions in JS
// function fun1(){
//     console.log('swapnill')
// }
// fun1()

// const fun2 = function(){
//     console.log("Swapnil2")
// }
// fun2()

// (function(){
//     console.log("Swapnil Gadekar")
// })();

// const myname = (name) => console.log(`My name is ${name}`)
// myname("Swapnil Vilas Gadekar")

// let array = [1,2,3,4,5,6,7,8,9,10]
// for(i=0;i<array.length;i++){
//     console.log(array[i])
// }

// array.forEach((item,index,array)=>{
//     console.log(item,index,array)
// })

// array = [1,2,3,4,5,6,7,8,9,10]
// let newaee = array.map((item)=>{
//     return item + 2
// })

// console.log(newaee)

// array = [1,2,3,4,5,6,7,8,9,10]
// let b = array.filter((item)=>{
//     return item > 7 && item < 9
// })
// console.log(b)

// array = [1,2,3,4,5,6,7,8,9,10]
// let v = array.every((item)=>{
//     return typeof item == 'number'
// })
// console.log(v)

// array = [1,2,3,4,5,6,7,8,9,10]
// let o = array.find((item)=>{
//     if (item == 8){
//         console.log("Present")
//         return true
//     }
// })
// console.log(o)

// function reverse(str){
//     let strr = ''
//     for(let  i = str.length-1;i>=0;i--){
//         strr+=str[i]
//     }
//     return strr
// }

// console.log(reverse("Swapnil"))

// function reverseS(str){
//     return str.split('').reverse().join('')
// }
// console.log(reverseS("Swapnil"))

// let obj = {
//     name:"Swapnil",
//     Surname:"Gadekar",
//     prn:1921341242080,
//     op(){
//         console.log(`Hi my name is ${this.name} and my Surname ${this.Surname}`)
//     }
// }

// // obj.op()

// // for(let i in obj){
// //     console.log(obj[i])
// // }

// // for(let i of Object.entries(obj)){
// //     console.log(i)
// // }

// let arrobj = [
//     {
//         name:"Swapnil",
//         age:23
//     },
//     {
//         name:"Radhesham",
//         age:23
//     },
//     {
//         name:"Harshal",
//         age:23
//     }
// ]

// for(let i of arrobj){
//     console.log(i.name)
// }

// let [item1 ,...item2]=arrobj
// console.log(item1)
// console.log(item2)

// //simpple function to add items
// function addition(numbers){
//     return numbers.reduce((cur,pre)=>cur+pre)
// }
// let arrr = [1,2,3,4,5,6,7,8,9]
// console.log(addition(arrr))

// //Rest and Spread functions for addition
// function addition2(...numbers){
//     return numbers.reduce((cur,pre)=>cur+pre)
// }
// let arrr2 = [1,2,3,4,5,6,7,8,9]
// console.log(addition2(...arrr2))

// function addition3(...numbers){
//     return numbers.reduce((cur,pre)=>cur+pre)
// }
// console.log(addition3(1,2,3,4,5,6,7,8,9))

// function myName(){
//     debugger
//     let a = 45
//     console.log("Swapnil",a)
//     function mySurname(){
//         console.log("Gadekar",a)
//     }
//     mySurname()
// }

// myName();

// function fun(){

//     for(let i = 1;i<=5;i++){
//         console.log(i)
//     }
// }
// fun()

// let set  = new Set([1,2,3,5,4,6,9,2,3])
// set.add(14)
// console.log(set)

// function ad(...num){
//     let addt = 0;
//     for(let i = 0 ; i<num.length;i++){
//         addt += num[i];
//     }
//     return addt;
// }
// console.log(ad(1,5,6,8,7,4,9,7));

// let map = new Map([
//     [1,"one"],
//     ["name","Swapnil"],
//     ["numbers",[1,2,3,4,5,6,7,8,9]]
// ]
// )

// let a = map.entries();
// console.log(a)

// for(let  i of a){
//     console.log(i)
// }
// console.log(map)
// console.log(map.set("Name","Rohit"))
// console.log(map.get("name"))

// let thisObject = {
//     name:"Swapnil",
//     age:23,
//     role:"Full Stack Web Developer",

//     func1:function(){
//         console.log(this)
//         console.log(`My name is ${this.name} and i am ${this.age} i am ${this.role}`)
//     }
// }

// thisObject.func1()

// function Myname(name) {
//   if (!new.target) {
//     return new Myname(name);
//   }
//   this.name = name;
// }

// let person = new Myname("Swapnil")
// console.log(person)
// let person = Myname("Swapnil")
// console.log(person)
// let person2 = new Myname("Vilas")
// console.log(person2.name)
// let perso3 = new Myname("Gadekar")
// console.log(perso3)

// function Addition(numbers){
//     const allnumbers = numbers.every((items)=>typeof items == 'number')
//     if(allnumbers){
//         console.log("Numbers")
//     }else{
//         console.log("String")
//     }
// }

// Addition([1,2,3,4,5,6,7,8,9,1,0])
// Addition([1,2,3,4,"Swapnil",6,7,8,9,1,0])

// function myFullname(name){
//     if(!new.target){
//         return new myFullname(name)
//     }
//     this.name = name
// }

// let myName = myFullname("Swapnil Gadekar")
// console.log(myName.name)

// let id = Symbol('id');
// let obj = {
//     name:'John',
//     age:20
// }
// obj[id] = 1
// console.log(obj)

// for(let key in obj){
//     console.log(key)
// }

//recursion

// function recursion(n){
//     if(n<=10){
//         console.log(n)
//         recursion(n+1)
//     }
// }
// recursion(1)

// function fact(n){
//     if(n==0){
//         return 1;
//     }else{
//         return n*fact(n-1)
//     }
//     return n
// }

// console.log(fact(5))

// function additionOfNumbers(n){
//     if(n==0){
//         return 1
//     }else{
//         return n+additionOfNumbers(n-1)
//     }
// }

// console.log(additionOfNumbers(5))

// function fun(){
//     console.log("Vilas")
// }
// setTimeout(fun,5000)

// setTimeout(()=>{
//     console.log("Swapnil")
// },4000)
// console.log("Gadekar")

//callback
// function func1(value){
//     console.log(value);
//     console.log("I am Function 1");
// }
// function func2(a,b,callback){
//     let sum = a+b;
//     callback(sum);
//     console.log("I am Function 2");

// }

// func2(4,5,func1)

// callback
// function loadingData(callback){
//     setTimeout(()=>{
//         console.log("1. Loading_Data");
//         callback();
//     },2000)
// }

// function collectingData(callback){
//     setTimeout(()=>{
//         console.log("2. Collecting_Data");
//         callback();
//     },2000)
// }

// function ApprovingData(callback){
//     setTimeout(() => {
//         console.log("3. Approving_Data");
//         callback();
//     }, 2000);
// }

// function Approved_Data(){
//     console.log("4. Approved_Data");
//     console.log("Callback Hell Examble");
// }

// //Callback Hell
// loadingData(function(){
//     collectingData(function(){
//         ApprovingData(function(){
//             Approved_Data();
//         });
//     });
// });

// function myPromise(task) {
//   return new Promise((resolve, reject) => {
//     if (task) {
//       resolve("Promise is resolve");
//     } else {
//       reject("Promise is Rejected");
//     }
//   });
// }

// myPromise(false)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// function loadingData() {
//     console.log("Processing...");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("1. Loading_Data...");
//       resolve();
//     }, 2000);
//   });
// }

// function collectingData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2. Collecting_Data...");
//       resolve();
//     }, 2000);
//   });
// }

// function approvingData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("3. Approving_Data...");
//       reject("Fail to Approved ");
//     },2000);
//   });
// }

// function Approved_Data() {
//     return new Promise((resolve,reject)=>{
//         console.log("4. Approved_Data!");
//         resolve()
//     })
// }

// loadingData()
//   .then(collectingData)
//   .then(approvingData)
//   .then(Approved_Data)
//   .catch((error) => console.log(error));

// async await
// async function func() {
//     await loadingData();
//     await collectingData();
//     await approvingData();
//     await Approved_Data();
// }

// func().catch((error)=>{
//     console.log(error)
// })

// let inter = setInterval(()=>{
//     let data = new Date().toLocaleTimeString()
//     console.log(data)
// },1000)

// setTimeout(()=>{
//     clearInterval(inter)
// },10000)

// function fun(age, gender) {
//   console.log(this.fname, age, gender);
// }

// let obj1 = {
//   fname: "Swapnil",
// };
// let obj2 = {
//   fname: "Harshal",
// };

// fun.call(obj1, 23, "Male");
// fun.call(obj2, 22, "Male");

// fun.apply(obj1,[23,"Male"])
// fun.apply(obj2,[22,"Male"])

// let a = fun.bind(obj1,[23,"Male"])
// console.log(a)
// let b = fun.bind(obj2,[22,"Male"])
// console.log(b)

// let emp  = {};
// emp.name = "John"

// console.log(Object.getOwnPropertyDescriptor(emp,'name'))

// Object.defineProperty(emp,'age',{
//     value:23,
//     writable:true,
//     enumerable:true,
//     configurable:true
// })

// console.log(emp)
// console.log(Object.getOwnPropertyDescriptor(emp,'age'))

// for(let k in emp){
//     console.log(k)
// }

// let obj = {
//     fname:"John"
// }
// let obj2 = {
//     lname:"smith"
// }

// obj2.__proto__ = obj
// console.log(obj2.fname)
// obj.__proto__ = obj2
// console.log(obj2.lname)

// let obj = {
//     fname:"John"
// }

// obj2 = Object.create(obj)
// obj2.lname = "smith"
// console.log(obj2)

// function Person(name,age){
//     let person = Object.create(obj)
//     person.name = name
//     person.age = age
//     return person
// }

// let obj = {
//     greet(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// let user = Person("John",23)
// user.greet()
// console.log(user)

// function Person(name,age){
//     this.name = name,
//     this.age = age

// }

// Person.prototype.greet = function(){
//     console.log(`Hello ${this.name}`)
// }

// let user = new Person("Swapnil",23)
// user.greet()
// console.log(user)

// class Person {
//     constructor(name,age,role,college){
//         this.name = name,
//         this.age = age,
//         this.college = college,
//         this.role = role
//     }

//     fun(){
//         console.log(`Hi My name is ${this.name} and my age is ${this.age}`)
//     }
//     fun2(){
//         console.log(`i am ${this.role} and my College is ${this.college}`)
//     }
// }

// let user = new Person("Swapnil",23,"Full Stack Web Developer","PES College OF Engineering Aurangabad")
// user.fun()
// user.fun2()

// console.log(user)

// let user2 = new Person("Harshal",22,"Pharmacist","Sai krupa college of Pharmacy")
// user2.fun()
// user2.fun2()

// class Per extends Person{
//     constructor(name,age){
//         super(name,age)

//     }
// }

// let us =  new Per("Subodh",22)
// us.fun()

// class Person {
//     constructor(name,age,role,college){
//         this.name = name,
//         this.age = age,
//         this.college = college,
//         this.role = role
//     }

//     static fun(person){
//         console.log(`Hi My name is ${person.name} and my age is ${person.age}`)
//     }
//     fun2(){
//         console.log(`i am ${this.role} and my College is ${this.college}`)
//     }
// }

// let user = new Person("Swapnil",23,"Full Stack Web Developer","PES College OF Engineering Aurangabad")
// Person.fun(user)

// class Game{
//     static score = 0
//     constructor() {
//         this.isplaying = false;
//     }

//     start(){
//         this.isplaying = true;
//         console.log("Game has Started")
//     }
//     end(){
//         this.isplaying = false;
//         console.log("Game has end")
//         Game.updateScore()
//     }
//     static updateScore(){
//         Game.score++
//         console.log(`Game score is ${Game.score}`)
//     }
// }

// let game = new Game()
// game.start()
// game.end()
// game.start()
// game.end()
// game.start()
// game.end()
// game.start()
// game.end()
// game.start()
// game.end()

// class BankAccount{
//     #balance = 0;

//     deposite(amount){
//         this.#balance += amount;
//         console.log(`You have Deposited ${amount} in your account \n Your Available balance is ${this.#balance}`)
//     }

//     withdrawal(amount){
//         if(amount>this.#balance){
//             console.log("insufficent funds")
//         }else{
//             this.#balance-=amount;
//             console.log(`You have withdrawal ${amount} in your account \n Your Available balance is ${this.#balance}`)
//         }

//     }
// }

// let  amount = new BankAccount()
// amount.deposite(500)
// amount.deposite(1000)
// amount.withdrawal(400)

// function add(a,b){
//     try {
//         if(b==0){
//             throw new Error("0 is not Divided")
//         }else{
//             console.log(a/b)
//         }
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// add(10,5)

// try {
//   fetch("https://fakestoreapi.com/carts")
//     .then((response) => {
//       return response.text();
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error.message))
//     .finally(() => {
//       console.log("Fetch Example learn Sucessfully");
//     });
// } catch (error) {
//   console.log(error.message);
// }

// link_rander = 0
// setInterval(function link(){
//     try {
//         link_rander+=1
//         console.log(link_rander)
//         fetch("https://fakestoreapi.com/users")
//           .then((response) => {
//             return response.json();
//           })
//           .then((data) => console.log(data))
//           .catch((error) => console.log(error.message))
//           .finally(() => {
//             console.log("Fetch Example learn Sucessfully");
//           });
//       } catch (error) {
//         console.log(error.message);
//       }
// },2000)

// fetch("Array.js")  // Corrected the URL
// .then((response) => {
//   if (!response.ok) {
//     throw new Error("Network is not responding");
//   }
//   return response.text();
// })
// .then((data) => console.log(data))
// .catch((error) => console.error("Error:", error));

// fetch('https://fakestoreapi.com/products?limit=5')
// .then((res)=>{
//     if(!res.ok){
//         throw new Error("Fail to fetch the link")
//     }
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
//     data.forEach(element => {
//         console.log(element.title,"\n" ,element.category,"\n",element.description)
//     });
// })
// .catch((error)=>{
//     console.log(error.message)
// })

// fetch("https://fakestoreapi.com/products", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "test product",
//     price: 13.5,
//     description: "lorem ipsum set",
//     image: "https://i.pravatar.cc",
//     category: "electronic",
//   })
// })
// .then(res=>res.json())
// .then(json=>console.log(json ,"Successfully add product"))


// fetch('https://fakestoreapi.com/products')
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     data.forEach(element => {
//         console.log(element.image)
//     });
// })
// .catch((error)=>{
//     console.log(error.message)
// })




// async function dataFetch() {
//     try {
//         let response =  await fetch("https://s3.amazonaws.com/roxiler.com/product_transaction.json");
//         let data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("Fail to Fetch  given Link::",error.message)
//     }
// }
// dataFetch()


// function arraySum(num1,num2,num3){
//     let total = 0
//     for(let i = 0;i<num1.length;i++){
//         total+=num1[i]
//     }
//     for(let i = 0;i<num2.length;i++){
//         total+=num2[i]
//     }
//     for(let i = 0;i<num3.length;i++){
//         total+=num3[i]
//     }

//     return total
// }

// let num1 = [1,2,3,4,5]
// let num2 = [8,6,9,2,8,3,8,4,6,7,2]
// let num3 = [1,2]

// let result = arraySum(num1,num2,num3)
// console.log(result)


// function arraySum(num1,num2,num3){
//     let sum1 = num1.reduce((cur,pre)=>cur+pre,0)
//     let sum2 = num2.reduce((cur,pre)=>cur+pre,0)
//     let sum3 = num3.reduce((cur,pre)=>cur+pre,0)
//     return sum1+sum2+sum3
// }
// let num1 = [1,2,3,4,5]
// let num2 = [8,6,9,2,8,3,8,4,6,7,2]
// let num3 = [1,2]

// let result = arraySum(num1,num2,num3)
// console.log(result)



function arraySum(num1,num2,num3){
    let sumofEven = (arr)=>{
        return arr
                .filter((num)=>num%2==0)
                .reduce((cur,pre)=>cur+pre,0)
    }

    const sum1 = sumofEven(num1)
    const sum2 = sumofEven(num2)
    const sum3 = sumofEven(num3)

    return sum1+sum2+sum3
}
let s = [1,2,3,4,5]
let v = [8,6,9,2,8,3,8,4,6,7,2]
let g = [1,2]

let result = arraySum(s,v,g)
console.log(result)


async function dataFetch(){
    let res = await fetch("https://transactiondashboardbackend-ncjxix7tf-swapnil-gadekars-projects.vercel.app/api/transactions")
    let data = await res.json();
    console.log(data)
}
dataFetch()