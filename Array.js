console.log("\n----------------------Array------------------------");

let n = [1,2,3,4,5,true,false,"swapnil"]
console.log("Array",n);

console.log("type of n is",typeof(n));

n[1]=22
console.log("updated array n",n);

let s = [1,2,3,4,5,6,7,8,9,10]
s.pop();
console.log(s);
console.log("lenth of s:",s.length);

s.push(11);
console.log(s);

s.shift()
console.log(s);

s.unshift(12);
console.log(s);

s[2]= "swapnil"
console.log(s);

s.reverse();
console.log("Reverse",s);

let v = [1,2,3,4,5]
let g = [6,7,8,9,10]

x=v.concat(g)
console.log(x);

let p = [1,2,3,4,5,6,7,8,9,10]
h= p.join(" ");
console.log(h);

let i = [1,2,3,4,5,6,7,8,9,10]
h= i.join("@");

console.log(h);

let a = [10,5,3,4,7,9,8,2,1,6]
console.log(a.sort());

let y = [1,2,3,4,5,6,7,8,9,10]
o=y.splice(1,3,33,44,55) // splice index where to start, delete item and new items (index,delete,add item)
console.log("splice",y);
console.log("delete",o);

let array = [1,1.2,true,false,"swapnil"]
s=array.slice(1)
console.log("slice",s);
s=array.slice(1,4)
console.log("slice",s);

console.log("\n----------------------using loops with Arrays------------------------");
let w = [1,2,3,4,5,6,7,8,9,10]
for(i=0;i<w.length;i++){
    console.log(i);
}

//forEach loop
w.forEach((Element) =>{
    console.log("forEach loop",Element * Element);
})

for(let i of w){
    console.log("for of loop",i)
}

for(let i of w){
    console.log("for of loop",i*i)
}

for(let i in w){
    console.log("for in loop",w[i])
}


v = "swapnil"
n = Array.from(v)
console.log(n)
