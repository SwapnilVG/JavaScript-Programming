// let a = 6
// let b = '6'

// console.log(a<b)
// console.log(a===b)
// console.log(a<b && a==6)
// console.log(a>b || a==6)

// let num = 7

// if (num % 2 ==0){
//     console.log("Even Number")
// }else{
//     console.log("Odd Number")
// }

// let prompt = require("prompt-sync")();5
// let array = prompt("Enter numbers")
// let numarray = array.split(',').map(Number)
// let sum = 0
// for(let i of numarray){
//     sum = sum + i
// }
// console.log("Sum of total number of Array is ",sum)


// function addEvennumber(){
//     let sum = 0
// for(let i = 0;i<10;i++){
//     if(i%2==0){
//         sum = sum + i
//     }
// }
// console.log(sum)
// }
// addEvennumber()

// while(true){
//     let num = prompt("Enter Number: ")
//     if (num==0 || num === null || num ==''){
//         break
//     }
//     let checkEvennumber=(num)=>{
//     if(num%2==0){
//         console.log("Given number is Even Number")
//     }else{
//         console.log("Given number is Odd Number")
//     }
// }
// checkEvennumber(num)
// }



// let color = "Red";

// if (color === "Red"){
//     console.log("stop")
// }
// else if (color === "Yellow"){
//     console.log("ready to go")
// }

// else{
//     console.log("STop")
// }

// function signal(color){
// if(color=="Red"){
//     console.log("Stop")
// }else if(color=="Yellow"){
//     console.log("Ready To Go")
// }else{
//     console.log("Let's Go")
// }
// }

// signal("Yellow")

// let count = 0
// for(i=0;i<11;i++){
//         // console.log(i)
//         count= count + i
//         console.log(count)
    
// }


// const RemoveSpecificValue = (array,value)=>{
//     const filter = array.filter(items=>items !== value)
//     return filter
// }

// console.log( RemoveSpecificValue([1,2,3,4,5,6],3))


// function countString(str, letter) {
//     // Split the string into an array of characters
//     const charArray = str.split('');

//     // Use Array.reduce to count occurrences of the specified letter
//     const count = charArray.reduce((acc, currentLetter) => {
//         // Increment the accumulator if the current letter matches the letter to check
//         if (currentLetter === letter) {
//             return acc + 1;
//         } else {
//             return acc;
//         }
//     }, 0);

//     return count;
// }


// // Example usage:
// const string = prompt('Enter a string: ');
// const letterToCheck = prompt('Enter a letter to check: ');

// const result = countString(string, letterToCheck);
// console.log(result);


// function change(str) {
//     // Split the string into an array of characters
//     let chars = str.split("");
    
//     // Push "5" onto the array of characters
//     chars.push("5");
    
//     // Return the modified array of characters
//     return chars;
// }

// // Test the function with input "Swapnil"
// console.log(change("Swapnil")); // Output: ["S", "w", "a", "p", "n", "i", "l", "5"]


// let obj = {
//     name:"Swapnil",
//     Age:23,
//     role:"MERN Developer"
// }

// console.log(Object.entries(obj))
// console.log(Object.values(obj))
// console.log(Object.keys(obj))
// console.log(Object.freeze(obj))

// obj.name = "Danish"
// console.log(obj.name)


// let array = ["Swapnil" ,
// ["Danish","Pratik","Utkarsh",["S","W","A",["P","N","I","L"]]] , 4 , 8 ,true]
// console.log(array[1][3][3][3])

// array[0]="Omkar"
// console.log(array)
// console.log(array[0][0])



// let a = [1,2,3,4,5,6,7,8,9,10]
// let b = [1,2,3,4,5,6,7,8,9,10]

// if(a==b){
//     console.log("Array are same")
// }else{
//     console.log("Array are  not same")
// }

// function compareTwoarrays(array1,array2){
//     if(array1.length !== array2.length){
//         return false
//     }

//     for(let i = 0; i<array1.length;i++){
//         if(array1[i] !== array2[i]){
//             return false
//         }
//     }

//     return true
// }

// const arr1  =  [1,2,3,4,5,6,7,8,9,10]
// const arr2  =  [1,2,3,4,5,6,7,8,9,10]
// const arr3  =  [1,2,3,4,5,6,7,8,9,11]

// console.log(compareTwoarrays(arr1,arr2))
// console.log(compareTwoarrays(arr2,arr3))

// const name12 = "Swapnil Gadekar"
// // console.log(name12.replace(/a/g,''))
// console.log(name12.match(/Swapnil/g))


// var myArray = [1, "Hello", [2, 3]];
// myArray.splice(1, 1, "Hello World", [4, 5]);
// console.log(myArray)



// function reverseString(str){
//     let word = ''
//     for(let i = str.length-1;i>=0;i--){
//         word+=str[i]
//     }
//     return word
// }
// console.log(reverseString("Swapnil Gadekar"))



// function Person(name,age){
//     this.name = name,
//     this.age = age
// }

// Person.prototype.greet = function(){
//     console.log(`Hello my name is ${this.name} and my age is ${this.age} nice to meet you.`)
// }

// let user = new Person("Swapnil Gadekar",23)
// user.greet()
// console.log(user)





class Person{
    constructor(name,age,role,college){
        this.name = name,
        this.age = age,
        this.role = role,
        this.college = college
    }

    fun(){
        console.log(`Hi my name ${this.name} my age is ${this.age} i am a ${this.role} and my college is ${this.college}`)
    }
}

let user = new Person("Swapnil",23,"Full Stack Web Developer","Pes College of Engineering")
user.fun()


//inheritence
class person2 extends Person{
    constructor(name,age,role,college){
        super(name,age,role,college)
    }
}

let p2 = new person2("Harshal",22,"Pharmacist","Shri Sai Institute Of Pharmacy And Research, Aurangabad")
p2.fun()




// function rs(str){
//     let word = ''
//     for(let i = str.length-1;i>=0;i--){
//         word+=str[i]
//     }
//     return word

// }
// console.log(rs("Swapnil"))

// function ru(st){
//     return st.split('').reverse().join(' ')
// }
// console.log(ru("SWapnil"))

// function reverseString(str){
//     let word = ''
//     for(let i = str.length-1;i>=0;i--){
//         word+=str[i]
//     }
//     return word
// }
// console.log(reverseString("Swapnil Gadekar"))