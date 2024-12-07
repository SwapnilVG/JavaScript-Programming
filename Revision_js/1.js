
console.log("----------------------Values and Datatypes----------------------")

let number = 123
let string = "Swapnil"
let bigint = 12356n
let boolen = true
let undefind 
let nul = null
let obj = {
    name:"Swapnil"
}
let arr = [1,2,3,"S",true,]

console.log(typeof number)
console.log(typeof string)
console.log(typeof bigint)
console.log(typeof boolen)
console.log(typeof undefind)
console.log(typeof nul)
console.log(typeof obj)
console.log(typeof arr)


console.log("\n----------------------Variables and typeof----------------------")
/*There are four ways to create a variable in js
1.var keyword
2.let keyword
3.const keyword
4.No definition
*/

var companyName = "PW Skills" //camel case
let CompanyName = "PW Skills" //pascal case
const company_name = "PW Skills" //snake case
company_name2  = "PW Skills"


var name = "PW Skills"
var Students = 1234567890
var enrolledToFSD = true

var name = "PW Skills" , Students = 1234567890
enrolledToFSD = true;


var PW_Student = "PW Skills"
var Student = 12345678910
var enrolled = true
var mentor = {
    name:"Anurag sir",
    YearofExperience: 4
}
var techStack = ["HTML","CSS","JavaScript","Node","React","Express"]
var couponcode = null
var endData
var student_enrolled = NaN

console.log(typeof PW_Student)
console.log(typeof Student)
console.log(typeof enrolled)
console.log(typeof mentor)
console.log(typeof techStack)
console.log(typeof couponcode)
console.log(typeof endData)
console.log(typeof student_enrolled)

console.log("\n----------------------Operators----------------------")
/*Operators in JavaScript¢
1. Assignment Operators
2. Arithmetic Operators
3. Comparison (Relational) Operators
4. Logical Operators
5. Bitwise Operators*/


console.log("\n----------------------Assignment Operators----------------------")
//Assignment operators are used to assign values to variables

let My_name = "Swapnil"

let add = 5
add += 5

let sub = 5
sub -= 5

let mul = 5
mul *=5

let div = 5
div /= 5

let mod = 5
mod %=5

let expo = 5
expo **= 5
console.log(add,sub,mul,div,mod,expo)


console.log("\n----------------------Arithmetic Operators----------------------")
let num1 = 5 
let num2 = 2

let add_A = num1 + num2
let sub_A = num1 - num2
let mul_A = num1 * num2
let div_A = num1 / num2
let mod_A = num1 % num2
let expo_A = num1 ** num2

let pre_increment = 10
let result = ++pre_increment

let post_increment = 9
let result2 = post_increment++

let pre_Decrement = 10
let result3 = --pre_Decrement

let post_Decrement = 9
let result4 = post_Decrement--

console.log(add_A,sub_A,mul_A,mod_A,div_A,mod_A,expo_A,result,result2,result3,result4)


console.log("\n----------------------Comparison (Relational) Operators----------------------")

let value1 = 10
let value2 = 20
let value3 = 10
let str1 = "10"
let str2 = "20"

//Equal 
console.log(value1==value2)
console.log(value1==value3)

//strict Equal
console.log(value1===value3)
console.log(value1===str1)

//strict Not  Equal
console.log(value1!==value3)
console.log(value1!==str1)

//Greater than
console.log(value1>value3)
console.log(value2>value3)


//Greater than or Equal to
console.log(value1>=value3)
console.log(value2>=value3)


//Lesser than or Equal to
console.log(value1<=value3)
console.log(value2<=value3)


console.log("\n----------------------Logical Operators----------------------")

let logic_num1 = 10
let logic_num2 = 20
let logic_num3 = 10

//Logical AND
console.log(logic_num1 >= logic_num3 && logic_num1 == logic_num3)
console.log(logic_num1 >= logic_num2 && logic_num1 == logic_num3)

//Logical OR
console.log(logic_num1 >= logic_num3 || logic_num1 == logic_num3)
console.log(logic_num1 >= logic_num2 || logic_num1 == logic_num3)
console.log(logic_num1 >= logic_num2 || logic_num1 > logic_num3)


//Logical Not
console.log(logic_num1 != logic_num2)
console.log(logic_num1 != logic_num3)



console.log("\n----------------------Bitwise Operator----------------------")
let bit1 = 5 
let bit2 = 6
console.log("bit1 & bit2 is",bit1 & bit2 );
console.log("bit1 | bit2 is",bit1 | bit2 );
console.log("bit1 ^ bit2 is",bit1 ^ bit2 );
console.log("bit1 ~  is",~bit1 );
console.log("bit1 << bit2 is",bit1 << bit2 );
console.log("bit1 >> bit2 is",bit1 >> bit2 );
console.log("bit1 >>> bit2 is",bit1 >>> bit2 );




console.log("\n----------------------For loop, Break and Continue----------------------")

for(let i = 0; i<3; i++){
    let name = "Swapnil"
    console.log(name)
}

for(let i = 2; i<=20; i+=2){
    console.log(i)
}

for(let i = 1; i<=3; i++){
    console.log("for i=" + i +"The innerloop values are")
    for(let j=1; j<3; j++){
        console.log("j=",+j)
    }
}

for(let i=0; i<4; i++){
    console.log(i)
    if(i==2){
        break
    }
}

let i = 0
while(i<4){
    console.log(i)
    if(i==2){
        break
    }
    i++
}


for(let i = 0; i<20; i++){
    if(i%2 == 0){
        continue
    }
    console.log(i)
}


let index = 0
while(index<20){
    index++
    if(index%2==0){
        continue
    }
    console.log(index)
}

let arr_name = ["swapnil","Vilas","Gadekar","Vishwajeet","Harshal"]
for(let i=0; i<arr_name.length;i++){
    let p = arr_name[i]
    if(p=="Gadekar"){
        continue
    }
    console.log(p)
}

console.log("\n----------------------While and Do-while loop----------------------")

let  index_while =0 
while(index_while<=10){
    console.log(index_while,"while_increment")
    index_while = index_while+1
    // index_while++
}


let index_decrement = 0 , n =10
while(n>=index_decrement){
    console.log(n,"while_decrement")
    n=n-1;
}


let do_while = 0
do{
    console.log(do_while,"do while")
    do_while++
}while(do_while <= 5)


let do_result = ''
let do_add = 0

do{
    do_add = do_add+1
    do_result = do_result + do_add
}while(do_add<=7)
console.log(do_result)

console.log("\n----------------------If, If-else, if-else-if---------------------")

let age = 19
if(age>18){
    console.log("You Can Vote")
}
else{
    console.log("You Cant Vote")
}


let num = 9
if(num%2==0){
    console.log('Even Number')
}else{
    console.log('Odd Number')
}



