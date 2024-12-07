//Higher Order Function (HOF) Callback, Returning function Setting time (Setinterval, SetTimeout)


let addition =(y)=>{
    return y**2
}
function multiple(addition,y){
    return addition(y) * y
}
console.log(multiple(addition,3));


let sayhello =()=>{
    return() =>{
        console.log("Hellow Swapnil");
    }
}
let value = sayhello()
// console.log(value);
value()

console.log("-----------------------------------------------------")
let swap=()=>{
    console.log("Swapnil")
}

let sap = ()=>{
    console.log("Sapna")
}
let sub = ()=>{
    console.log("Subodh")
}

let main = (callback,anonymous)=>{
    callback()
    anonymous()

}
main(swap, ano = ()=>{
    console.log("Hi Gadekar")
})
main(sap, ano = ()=>{
    console.log("Hi Gadekar")
})
main(sub, ano = ()=>{
    console.log("Hi Gadekar")
})
console.log("-----------------------------------------------------")



let mul =mul=>{
    let addi =addi=>{
        let sub =sub=>{
            return mul+addi+sub
        }
        return sub
    }
    return addi
}
console.log(mul(2)(2)(2))


arr = [1,2,3,4,5,6,1]
let sumArray =()=>{
    let total = 0
    arr.forEach(element => {
        total+=element
    });
    return total
}

// console.log(sumArray(arr));
console.log(sumArray());


function Swap(){
    console.log("Hello Swapnil Gadekar",Math.random());
}
// setInterval(Swap,1000)
// setTimeout(Swap,2000)

console.log("----------------------For each, map, filter reduce every, find, sort--------------------------")
console.log("----------------------For each--------------------------")
Array = [1,5,3,4,9,7,5]

Array.forEach(function(value,index,Array){
    console.log(value,index,Array)
})

Array.forEach((value,index,Array)=>{
    console.log("Array:",value,index,Array)
})

Array.forEach((element, index) => {
    console.log("Mul",element*index);
});

let name=["Swapnil","Harshal","Anil","sunil"]
name.forEach((upper)=>{console.log(upper.toUpperCase())})

console.log("----------------------------------------------------")

console.log("-----------------------Map----------------------------")
Array.map(function(value,index,Array){
    console.log("Map",value, index, Array)
})

name.map((upp)=>{console.log(upp.toUpperCase())})
name.map((upp)=>{console.log(upp.toLowerCase())})


console.log("-----------------------filter----------------------------")
let end = name.filter((e)=>{ 
    return e.endsWith("nil")
})
console.log(end);

console.log("-----------------------reduce----------------------------")
let sum = [1,2,3,4,5,6,8,7,9]

let Sumvalue = sum.reduce((prev,curr)=>{
    return prev+curr;  
})
console.log(Sumvalue);



console.log("-----------------------every----------------------------")

let number = [4,5,8,7,9,3]
let checkN = number.every((chechNumber)=>typeof chechNumber==="number")
console.log(checkN)

let name2=["Swapnil","Harshal","Anil","sunil",123]
let checkA = name2.every((CheckString)=>typeof CheckString ==="string")
console.log(checkA)


console.log("-----------------------find----------------------------")
let name3=["Swapnil","Harshal","Anil","sunil",123]
let fin = name3.find((find)=>find==="Swapnil");
console.log(fin? "Element Present in the Array":"Not Present")

let name4=["Swapnil","Harshal","Anil","sunil",123]
let find = name4.find((find)=>find==="Rohit");
console.log(find? "Element Present in the Array":"Not Present")


let number2 = [4,5,8,7,9,3]
let checkNumberif = number2.find((checkif )=>{
    return checkif > 7;
})
console.log(checkNumberif)


console.log("-----------------------Sort----------------------------")
let name5=["Swapnil","Harshal","Anil","sunil",123]
console.log(name5.sort())

let number6 = [4,5,8,7,9,3]
console.log(number6.sort())

let number7 = [111,945,469,785,236]
console.log(number7.sort())

let number8 = [111,945,469,785,236]
console.log(number8.sort().reverse())


function addTwoNumbers(a, b) {
    return a + b;
  }
console.log(addTwoNumbers(2,3))  

