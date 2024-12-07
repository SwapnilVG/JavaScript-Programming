let swap = {Name:"Swapnil", age:21, salary:4000}
console.log(swap);
console.log("---------------------------------------\n");
console.log(swap.Name);
console.log("---------------------------------------\n");
console.log(swap.age);
console.log("---------------------------------------\n");
console.log(swap.salary);
console.log("---------------------------------------\n");
console.log(swap.Name ,swap.age , swap.salary);
console.log("---------------------------------------\n");

let obj = new Object();
console.log(obj);

obj.id=125
obj.Name="swapnil"
obj.company="TCS"
console.log(obj);
console.log("---------------------------------------\n");

obj.company="Accenture"
console.log(obj);
console.log("---------------------------------------\n");

function obj1(i,n,c){
    this.id=i;
    this.name=n;
    this.company=c;
}
let obj2 = new obj1(255,"Pratik","TCS")
console.log(obj2)
console.log(obj2.id,obj2.name,obj2.company)

let obj3 = new obj1(255,"Pratik","Google")
console.log(obj3)
console.log(obj3)
console.log("---------------------------------------\n");
let swap1 = new Object()
console.log(swap1);

swap1.name="swapnil"
swap1.id=125
swap1.company="TCS"
swap1.mobile=9673126453
swap1.seat="CS12546"
console.log(swap1);

swap1.name="Pratik"
console.log(swap1);

console.log("---------------------------------------\n");
delete swap1.seat
console.log(swap1);

console.log("\n--------------------Object methods-------------------");
let swap3 = new Object()
swap3.name="swapnil"
swap3.id=125
swap3.company="TCS"
swap3.mobile=9673126453
swap3.seat="CS12546"

console.log("-------------------keys----------------------");
let keys = Object.keys(swap3)
console.log(keys);
console.log("---------------------------------------------\n");

console.log("-------------------values----------------------");
let values = Object.values(swap3)
console.log(values);
console.log("---------------------------------------\n");

console.log("-------------------entries----------------------");
let entries = Object.entries(swap3)
console.log(entries);
console.log("---------------------------------------\n");

console.log("-------------------assign----------------------");
let swap4 = Object.assign({},swap3)
console.log("New ",swap4);
console.log("---------------------------------------\n");

console.log("-------------------freeze----------------------");
Object.freeze(swap3) //In this method object is freeze we cannot update, delete and cannot add new data(items)(entries)
swap3.name="Pravin"
swap3.email="swapnilgadekar2000@gmail.com"
delete swap3.seat
console.log("freeze",swap3);
console.log(Object.isFrozen(swap3));
console.log("---------------------------------------\n");

console.log("-------------------seal----------------------");
let obj4 = {Name:"swapnil",id:251,company:"TCS",seat:"CS4565"}
Object.seal(obj4) //In this method object is seal we can update data  values but we cannot add  new  data and cannot delete data.
console.log(Object.isSealed(obj4))
obj4.Name="Pravin"
obj4.email="swapnilgadekar2000@gmail.com"
delete obj4.seat
console.log(obj4);
console.log("---------------------------------------\n");
