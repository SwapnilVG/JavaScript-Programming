
console.log("---------------------------------Spread operator----------------------------------")
/*The Spread operator in general allows iterables(arrays/objects/strings) to be expanded into single arguments/eleme4ts. */
let techStack   = ["HTML","CSS","Javascript","ReactJs","NodeJs","ExpressJs","MongoDB"]
let newArrayCreated  = [...techStack ]
console.log((newArrayCreated ));


//Concatenating two arrays
let arr1 = ["HTML","CSS","Javascript"]
let arr2 = ["ReactJs","NodeJs","ExpressJs"]
let concatenatedArray =[...arr1,...arr2]
console.log(concatenatedArray )
// console.log([...arr1,...arr2])


//Spread an array of arguments to be passed as individual params
function maxOfThreeNumber(num1,num2,num3){
    return Math.max(num1,num2,num3)
}
let arrayOfNumber = [1,8,3]
console.log(maxOfThreeNumber(...arrayOfNumber))


function minOfThreeNumber(num1,num2,num3){
    return Math.min(num1,num2,num3)
}
let arrayOfNumber2 = [1,8,3]
console.log(minOfThreeNumber(...arrayOfNumber2))


//Using with Strings
let  name = "PW Skills"
let arrayofCharacters = [...name]
console.log(arrayofCharacters)


//Spread Operator with Objects
let obj1 = {name:"PW",course:"Full Stack Web Development"};
let obj2 = {rating:5,reviews:200}
let newObjCreated = {...obj1, ...obj2}
console.log(newObjCreated)


let obj3 = {
    name: "PW Skills",
    course: "Full stack web development", 
    numberOfStudentsEnrolled: 1000,
  };
let obj4 = { rating: 5, reviews: 2000, numberOfStudentsEnrolled: 2000 };

let newObjCreated2 = { ...obj3, ...obj4 };
console.log(newObjCreated2);


//Adding New Values
let ArrNewValue   = ["HTML","CSS","Javascript"]
let addArr = [...ArrNewValue,"RectJs"]
console.log(addArr)

let ObjNewValue = {name:"Pw Skill",Course:"Data Structure And Algorithms",Price:3500}
let newObj = {...ObjNewValue,Location:"Mumbai"}
console.log(newObj)


console.log("---------------------------------Rest Operator------------------------------------")
/*The rest operator is used to collect all elements into an array. The representation is the same as a Spread  operator but used differently. The rest operator gathers elements into an array.*/

function sumOfAllNumbers(...sum){
    return sum.reduce((arr,curr)=>arr+curr)

}
console.log(sumOfAllNumbers(1,2,3,4))

function maxoffour(...max){
    return Math.max(...max)
}
console.log(maxoffour(1,2,3,4))

function minoffour(...min){
    return Math.min(...min)
}
console.log(minoffour(1,2,3,4))

let swap = (...name) =>{
    return name.reduce((pre,curr)=>{
        return pre+curr
    })
}
console.log(swap(1,2,3,4,5,6,7,8,9))

// let prompt = require("prompt-sync")();
// let numbers =[]

// while(true){
//     let userInput = prompt("Enter a number (or type 'stop' to finish):")
//     if(userInput==="stop"){
//         break;
//     }
//     let number = parseFloat(userInput)
//     if(!isNaN(number)){
//         numbers.push(number)
//     }
//     else{
//         console.log("Invalid input. Please enter a valid number.")
//     }
//     // console.log(numbers)
    
// }

// let sum = (...numbers)=>{
//     return numbers.reduce((pre,cur)=>{
//         return pre + cur
//     })
// }
// console.log(sum(...numbers))
console.log("--------------------------------- Destructuring----------------------------------")
let arrDes   = ["HTML","CSS","Javascript","ReactJs","NodeJs","ExpressJs","MongoDB"]
let [element1,element2,...remainingElement] = arrDes
console.log(element1)
console.log(element2)
console.log(...remainingElement,)

console.log("----------------------------------------------------")
let obj = {
    nameOb: "PW Skills",
    course: "Full Stack Web Development", 
    rating: 5, 
  };
let { nameOb, ...remainingProperties } = obj; 
console.log(name); // OUTPUT: PW Skills
console.log(remainingProperties);


console.log("--------------------------------- Destructing Arrays----------------------------------")

let var1 , var2;
[var1,var2]=["value1","value2"]
console.log(var1)
console.log(var2)

console.log("----------------------------------------------------")

let [var3,var4]=["value3","value4"]
console.log(var3)
console.log(var4)

console.log("----------------------------------------------------")

let FullStack   = ["HTML","ExpressJs", "ReactJs","CSS","Javascript","NodeJs","MongoDB"]

let [skill0,,,skill3,skill4]=FullStack
console.log(skill0)
console.log(skill3)
console.log(skill4)

console.log("----------------------------------------------------")


let const1 ,const2 
[const1,const2]=[,"NewValue"]
console.log(const1)
console.log(const2)

console.log("----------------------------------------------------")

let const3 ,const4
[const3="DefaultValue1",const4="DefaultValue2"]=[,"Newvalue"]
console.log(const3)
console.log(const4)

console.log("----------------------------------------------------")

let const5 = "value5" , const6 = "value6";
[const5, const6]=[const6, const5];
console.log(const6)
console.log(const5)

console.log("---------------------------------Destructuring during iteration----------------------------------")

// E-commerce site products and their prices.

let productDetails = [
["Charger", 500],
["HDMI cable", 200],
["Mobile Phone", 30000],
["Laptop", 90000],  
["Monitor", 10000],  
];

for([product,productPrice] of productDetails){
    console.log(`The Product is ${product} And its Price is ${productPrice}`)
}

console.log("----------------------------------------------------")

let studentDetails = [
    { name: "Mithun", registrationNumber: "PW6090", numberOfCoursesEnrolled: 5 },  
    { name: "Alka", registrationNumber: "PW6091", numberOfCoursesEnrolled: 2 },
    { name: "Prabir", registrationNumber: "PW6092", numberOfCoursesEnrolled: 3 },
    { name: "Shivam", registrationNumber: "PW6093", numberOfCoursesEnrolled: 9 },
    { name: "Vinay", registrationNumber: "PW6094", numberOfCoursesEnrolled: 2 },
];

for({name ,numberOfCoursesEnrolled} of studentDetails){
    console.log(`The Student ${name} has enrolled to ${numberOfCoursesEnrolled} Course At PW skills`)
}
console.log("----------------------------------------------------")



console.log("---------------------------------Destructuring Object----------------------------------")
let student = {
    name1: "Mithun S",
    course: "Full Stack Web Development",
    dashboardAccessGiven: true,
};

let {name1,course,dashboardAccessGiven}=student
console.log(name1)
console.log(course)
console.log(dashboardAccessGiven)

console.log("----------------------------------------------------")


let student2 = {
    nameO: "Mithun S",
    courseO: undefined,
    dashboardAccessGivenO: true,
};
let {nameO,courseO="MERN Stack Developer",dashboardAccessGivenO}=student2
console.log(nameO)
console.log(courseO)
console.log(dashboardAccessGivenO)

console.log("----------------------------------------------------")

let student3 = {
    nameObj: "Mithun S",
    dashboardAccessGivenObj: true,
};
let {nameObj,courseObj="JS Developer",dashboardAccessGivenObj}=student3
console.log(nameObj)
console.log(courseObj)
console.log(dashboardAccessGivenObj)

console.log("----------------------------------------------------")

console.log("----------------------------------------------------")


console.log("---------------------------------Destructuring objects  during iteration----------------------------------")
let studentDetailsObj2 = {
    nameObj2: "Mithun", 
    courseObj2: "Full Stack Web Development", 
    emailObj2: "mithun@pw.live", 
    dashboardAccessGivenObj2: true, 
};

let keyvalues = Object.entries(studentDetailsObj2)
console.log(keyvalues)

console.log("----------------------------------------------------")

let studentDetailslist = {

    student1: {
      name: "Mithun",
      course: "Full Stack Web Development",
      email: "mithun@pw.live",
      dashboardAccessGiven: true,
    },

    student2: { 
      name: "Prabir",
      course: "Full Stack Web Development",
      email: "prabir@pw.live",
      dashboardAccessGiven: true,
    },
  
    student3: {
      name: "Alka",
      course: "Full Stack Web Development",
      email: "alka@pw.live",
      dashboardAccessGiven: false,
    },
  
};

for(let [keys,{name,course}]of Object.entries(studentDetailslist)){
    console.log(`${keys}: ${name} is Enrolled to ${course}`)
}

console.log("---------------------------------Object parameters without destructuring----------------------------------")
function printStudentDetails(student){
    console.log(student.name)
    console.log(student.course)
    console.log(student.email)
    console.log(student.dashboardAccessGiven)
}
let studentDetailfunction = {
    name: "Mithun",
    course: "Full Stack Web Development",
    email: "mithun@pw.live",
    dashboardAccessGiven: true,
  };
printStudentDetails(studentDetailfunction)