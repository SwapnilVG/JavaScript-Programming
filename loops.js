console.log("------------------For loop---------------------\n");


for(i=0;i<5;i++){
    console.log(i);
}

let prompt = require("prompt-sync")();
n=prompt("Enter First number:")
n=Number.parseInt(n)

m=prompt("Enter Second number:") 
m=Number.parseInt(m)
let y=m+n
console.log("Addition of two number is:",y);


s=prompt("Enter number to loop it")
s=Number.parseInt(s)
for(i=0;i<s;i++){
    console.log("Loop",i)
}
console.log("----------------------------------------------\n");


console.log("------------------For in loop---------------------\n");
let obj ={
    swapnil:90,
    pratik:80,
    pravin:70,
    shubham:85,
    nikhil:70,
}

for(let a in obj){
    console.log("Marks of ",a,"is",obj[a]);
}
console.log("----------------------------------------------\n");

console.log("------------------For of loop---------------------\n");
for (let b of "Swapnil"){
    console.log(b);
}


console.log("------------------While loop---------------------\n");
i=0
while(i<5){
    console.log(i);
    i++
}

s=prompt("Enter number to print its")
s=Number.parseInt(s)
i=0
while(i<s){
    console.log(i);
    i++
}
console.log("----------------------------------------------\n");

console.log("------------------Do While loop---------------------\n");
i=0
do{
    console.log(i);
    i++
}while(i<5)

v=prompt("Enter number to print")
v=Number.parseInt(v)
i=0
do{
    console.log(i);
    i++
}while(i<v)
console.log("----------------------------------------------\n");


