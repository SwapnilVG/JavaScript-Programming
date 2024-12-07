console.log("-----------Arithmetic Operators--------\n");
let a = 8
let b = 2
console.log("a+b =",a+b);
console.log("a-b =",a-b);
console.log("a*b =",a*b);
console.log("a/b =",a/b);
console.log("a%b =",a%b);
console.log("a**b =",a**b);
console.log("a++ =",a++);
console.log("++a =",++a);
console.log("a-- =",a--);
console.log("--a=",--a);

let x = 5;
x++;
let p = x;
console.log("x++ =",p);


let q = 5;
q--;
let z = q;
console.log("q-- =",z);

let s = 5
++s;
w=s
console.log("++s =",w);

let v = 5
--v;
o=v
console.log("--v =",o);
console.log("---------------------------------------\n");

console.log("-----------Assignment Operators--------\n");
let assignment = 1
console.log("assignment =",assignment);

let addition = 6
addition +=5
console.log("addition +=",addition);

let Substraction = 6
Substraction -= 5
console.log("Substraction -=",Substraction);

let multiplication = 6
multiplication *=5
console.log("multiplication *=",multiplication);

let Devision = 6
Devision /=5
console.log("Devision/=",Devision);

let  Modulas = 6
Modulas %=5
console.log("Modulas %=",Modulas);

let Exponentiation = 6
Exponentiation **=2
console.log("Exponentiation **=",Exponentiation);
console.log("---------------------------------------\n");

console.log("-----------Comparison Operators--------\n");
let com1 = 1
let com2 = 2

console.log("com1==com2",com1==com2);
console.log("com1!=com2",com1!=com2);
console.log("com1<com2",com1<com2);
console.log("com1<=com2",com1<=com2);
console.log("com1>com2",com1>com2);
console.log("com1>=com2",com1>=com2);
console.log("com1===com2",com1===com2); //=== check the type of data
console.log("com1!==com2",com1!==com2);
console.log("---------------------------------------\n");


console.log("-----------Logical Operators--------\n");
let logi1 = 5
let logi2 = 6

console.log(logi1<logi2 && logi1==logi2); // when condition1 and condition1 is true then the answes will be true  otherwise its will false.in logical &&(and) operator two condition must be satisfy true. 
// true && true == true , 
// true && false == false , 
// false && true == false, 
// false && false == false 


console.log(logi1<logi2 || logi1==logi2);// In logical ||(or) operator if one condition is true among another condition then the answer will be true.

// true && true == true , 
// true && false == true , 
// false && true == true, 
// false && false == false

console.log(!true); // In logical !(not) opearator the value true will become false and false value will become true
console.log(!false);
console.log("---------------------------------------\n");

console.log("-----------Bitwise Operators--------\n");
let bit1 = 5  //in bitwise operators the given value is convert in binary it checks the possible the outcome in binary then tha last the answer is given in number(decimal number e.g 3)
let bit2 = 6

console.log("bit1 & bit2 is",bit1 & bit2 );
console.log("bit1 | bit2 is",bit1 | bit2 );
console.log("bit1 ^ bit2 is",bit1 ^ bit2 );
console.log("bit1 ~  is",~bit1 );
console.log("bit1 << bit2 is",bit1 << bit2 );
console.log("bit1 >> bit2 is",bit1 >> bit2 );
console.log("bit1 >>> bit2 is",bit1 >>> bit2 );
console.log("---------------------------------------\n");



