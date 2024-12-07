console.log("------------------Map---------------------\n");
let s = [11,58,79,64,13,10]
s.map((value)=>{
    console.log(value);
})

let b = s.map((value)=>{
    return value + 1
})
console.log(b,"\n");


let arr = [16,23,48,97,46]
let mapMethod=arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value + index
})
console.log(mapMethod);


console.log("\n------------------Filter---------------------\n");
//filter method is used to filter the array based on some condition and returns a new filtered array with all elements that satisfy this condition

let arr2 = [1,45,6,7,89,33,75,2]
let filterMethod = arr2.filter((value)=>{
    // return value<10
    return value%2==0
})
console.log(filterMethod);


console.log("\n------------------Reduce---------------------\n");
// let arr3 = [1,2,3,4,8,7,6]
// let newarr = arr3.reduce((h1,h2)=>{
//     return h1 + h2
// })
// console.log(newarr)

let arr3 = [1,2,3,4,8,7,6]
let newarr = arr3.reduce((h1,h2)=>{
    return h1 + h2
})
console.log(newarr)