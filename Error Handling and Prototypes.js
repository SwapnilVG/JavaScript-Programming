/*Try statement

It is a piece of code that need$ to be tested during the execution of code. The block of code is checked if it 
has any errors or not. If any errors are encountered, then the try{} $tatement passes it to the catch{} 
statement block. Once the control is handed over to the catch block the code block under catch{} will be 
executed.*/

/*
Catch Statement

The catch statement defines a block of code that gets executed when any errors are encountered within the 
try block. The catch block gets executed only when there is any error present in the try block and the error 
needs to be addressed. Otherwise, the catch block gets skipped. The catch block gets executed only after the 
execution of the try block.*/

console.log("---------------------------Try Catch Statement-----------------------------")
console.log("Hello From PW Skills")
console.log("Congratulations !! You Have Enrolled To the course")
console.log("You Have Completed HTML & CSS. Hurray !!")
try{
    console.log(webDevelopment)
    
}catch(error){
    console.log(error)
}
console.log("You Are now Learning Javascript")

console.log("---------------")

console.log("Hello From PW Skills")
console.log("Congratulations !! You Have Enrolled To the course")
console.log("You Have Completed HTML & CSS. Hurray !!")
try{
    console.log(webDevelopment)
    
}catch(error){
    console.log(error.message)
}
console.log("You Are now Learning Javascript")
console.log("------------------")

console.log("Hello from PW Skills");
console.log("Congratulations !! You have enrolled to the course.");
console.log("You have completed HTML & CSS. Hurray !!");
let assignmentCompletion = false;
try {
    if (assignmentCompletion === false)  
      throw new Error("You have not completed the Assignment");  
  } catch (error) {  
    console.log(error.message);  
  } finally {  
    console.log("You can now create Static webpages");  
  }  
  console.log("You are now learning Javascript");


console.log("\n--------------------Defining a classes, Class Instantiation-------------------")
/*
Classes  serve as a blueprint for creating objects, providing a way to organize and structure code. 
They allow you to define objects with similar properties and methods in a reusable manner,reducing 
the amount of code you need to write and making your code easier to maintain.
*/

/*Class instantiation in JavaScript refers to creating an object from a class. An object for a class is a kind of 
primitive data type that shows the behavior and the characteristics of a class. This is done using the ‘new’ 
operator, which creates an instance of the class and returns the object*/


class animal{
  makesound(){
    console.log("Animal Sound")
  }
}
let myAnimal = new animal()
myAnimal.makesound();



class car{
  honk(){
    console.log("Beep Beep")
  }
}
let myCar = new car()
myCar.honk();

console.log("-------------------")

class newCar {
  setmake(make){
    this.make = make;
  };
  setmodel(model){
    this.model = model;
  };
  setyear(year){
    this.year = year;
  };
  hon(){
    console.log("Beep Beep");
  };
};

let myCarr = new newCar();
myCarr.setmake("TCS");
myCarr.setmodel("CTR7895");
myCarr.setyear(2000);
myCarr.hon();

console.log(myCarr.make)
console.log(myCarr.model)
console.log(myCarr.year)
console.log("-----------------")


class Person{
  setname(name){
    this.name = name
  }
  setage(age){
    this.age= age
  }
  setrole(role){
    this.role = role
  }
  introduce(){
    console.log(`Hello my name is ${this.name} my age is ${this.age} and i am ${this.role}`)
  } 
}


let myperson = new Person()
myperson.setname("Swapnil")
myperson.setage(23)
myperson.setrole("Full Stack Developer")
myperson.introduce()

console.log("------------------")

const MyClass = class {
  constructor(expression) {
    this.result = expression;
  }
};
const myInstance = new MyClass(10 + 2);
console.log(myInstance.result);
console.log("------------------\n")




console.log("-------------------Class Constructor, Default values with constructor-----------------------")

class Personn {
  constructor(name) {
    this.name = name;
    console.log(this)
  }
  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const myName = new Personn("Anuj");
myName.introduce();

console.log("----------Default values with class constructor-------------")
class details {
  constructor(
    fName = 'Anuj',
    lName = 'Kumar',
    age = 25,
    city = 'Delhi'
  ) {
    this.fName = fName
    this.lName = lName
    this.age = age
    this.city = city
  }
}
const person1 = new details() // it will take the default values
const person2 = new details('Rohan', 'Sharma', 28, 'Jaipur')
console.log(person1)
console.log(person2)


class roommates{
  constructor(name="Swapnil",age = 23, city = "Majalgaon"){
      this.name = name,
      this.age = age,
      this.city=city
  }
}

let data1  =  new roommates()
let data2 =  new roommates("Pratik",20,"Naded")
console.log(data1)
console.log(data2)

console.log("-----------------------")
/*In every class there only one constrctor*/

/*Thre  can only be one constructor() method per class*/
class Students {
  constructor(name,age,role){
      this.name=name
      this.age = age
      this.role = role
      console.log(this)
      console.log(`Hi My name is ${this.name} my age is ${this.age} and i Am a ${this.role}`)

  }

  person1(name,age,role){
      this.name = name
      this.age = age
      this.role = role
      console.log(this)
      console.log(`Hi My name is ${this.name} my age is ${this.age} and i Am a ${this.role}`)
  }
  person2(name,age,role){
      this.name = name
      this.age = age
      this.role = role
      console.log(this)
      console.log(`Hi My name is ${this.name} my age is ${this.age} and i Am a ${this.role}`)
  }
}

let data =  new Students("Swapnil",23,"Web Developer")
// console.log(data)
data.person1("pratik",22,"Electrical Engineer")
data.person2("Radhesham",20,"Web Developer\n")

console.log("-----------Static Method------------") 
class MyClass1{
  /*Static methods are declared using the static keyword and are called using the class name followed by the 
   method name.*/
  static  myStaticMethod(){
      console.log("I am a Static Method\n")
  }
}
MyClass1.myStaticMethod()


console.log("----------Properties with initial values-------------")
class Persons {
  constructor(fName, lName, age, city) {
    this.fName = fName
    this.lName = lName
    this.age = age
    this.city = city
    this.level = 0
    this.skills = []
  }

  getFullName() {
    const fullName = this.fName + ' ' + this.lName
    return fullName
  }
}

const persons1 = new Persons('Anuj', 'Kumar', 31 , 'Delhi')
const persons2 = new Persons('Rohan', 'Sharma', 28 , 'Jaipur')
// console.log(persons1)
// console.log(persons2)
console.log(persons1.level)
console.log(persons2.level)
console.log(persons1.skills)
console.log(persons2.skills)



console.log("\n--------To Set PrivateProperty---------------") 
class Developer{
  //with the help of # we can blind or set private parameter  that cannot access by public 
  // the role only access when we use this.#role to the method(job)
  // we cannot aceess it outside it give error message undefined
  #role 
  constructor(name,role){
      this.name= name;
      this.#role = role 
  }
  
  job(){
      console.log(`Hi I am ${this.#role}`)
  }
}

let data3 = new Developer ("Swapnil","Full Stack Developer")
console.log(data3)

data3.job()

console.log(data3.role)
/*This line attempts to access the role property directly from the data object, but it will result in an error because #role is a private property, and private properties cannot be accessed from outside the class. You will get an "undefined" error message.

In summary, this code demonstrates the use of private class fields (#role) to encapsulate and protect class properties, preventing direct access from outside the class while still allowing access through public methods like job().

*/



console.log("\n----------Getters and Setters-------------")

const person_2 = {
  firstName: 'Anuj',
  lastName: 'Kumar',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
 }
};
console.log(person_2.fullName);


const person3 = {
  firstName: 'Anuj',
  lastName: 'Kumar',
  set fullName(name) {
  const parts = name.split(' ');
  this.firstName = parts[0];
  this.lastName = parts[1];
} 
};

person3.fullName = 'Rohan Sharma';
console.log(person3.firstName);
console.log(person3.lastName);

console.log("-----------------------")

class person_svg{
  constructor(name,email) {
    this.name = name;
    this.email = email;
  }

  get name(){
    return this._name.toUpperCase();
  }

  set name(value){
    this._name = value
  }

  get email(){
    return this._email.toUpperCase()
  }
  set email(value){
    this._email=value
  }
}

let data_svg = new person_svg("Swapnil","Swapnilgadekar2000@gmail.com")

console.log(data_svg.name)
console.log(data_svg.email)

console.log(data_svg instanceof person_svg)

console.log("\n-----------------------")

class Complexnumber{
  #real
  #imag

  constructor(r,i){
      this.#real = r;
      this.#imag= i ;
  }

  display(){
      console.log(`${this.#real} + i ${this.#imag}`)
  }


  get real(){
      return this.#real
  }
  get imag(){
      return this.#imag
  }

  addcomplexnumber(c){
      this.#real +=c.real
      this.#imag +=c.imag
  }
}

let c1 = new Complexnumber(2,3)
c1.display()

let c2 = new Complexnumber(4,5)
c1.addcomplexnumber(c2)
c1.display()
console.log("\n----------Explanning Prototypes-------------")
let myHeros = ["Dr Strange","Iron Man"]
let dcheros = ["Superman","Flash"]


let herospower = {
    Dr_Strange: "Magic",
    Iron_man: "Technology",

    getDr_Strange: function (){
        console.log(`Dr_Strange power is ${this.Dr_Strange}`)
    }
}
console.log(herospower.getDr_Strange())

Object.prototype.swapnil = function(){
    console.log("Swapnil is present in all object")
}

console.log(myHeros.swapnil())
console.log(herospower.swapnil())


Array.prototype.HiSwapnil  = function(){
    console.log("Swapnil Says Hi To EveryOne")
}
console.log(myHeros.HiSwapnil())
// console.log(herospower.HiSwapnil())


let user = {
    name :"Top Name",
    email:"top@gmail.com",
}

let Teacher = {
    makeVideos : true,
}

let  TeachingSupport = {
    isAvailable:false,
    __proto__ :user
}

let TAAssistant = {
    makeAssignment:"Js Assignment",
    fulltime:true,
    __proto__: TeachingSupport,
    
}
console.log(TAAssistant.isAvailable)

Teacher.__proto__ = user
console.log(Teacher.name) 
console.log(Teacher.email)


// Object.setPrototypeOf(user,TAAssistant)
console.log(TeachingSupport.name)


String.prototype.truelenth = function(){
    console.log(`True lenth of  given String is ${this.trim().length}`)
}

"Swapnil   ".truelenth()
"Gadekar   ".truelenth()


console.log("\n---------- Closure------------")
let score = 5

function one(){
  let score = 4;
  console.log(score)
}

function two(){
  let score = 2
  console.log(score)
}

function three(){
  console.log(score)
}
one()
two()
three()
console.log(score)

console.log("\n----------------------")
function outerfunc(){
  let outerVar = 'I am at scope level 1'
  function innerFunc(){
    let innerVar = 'I am at scope level 2'
    console.log(outerVar)
  }
  // console.log(innerVar)
  innerFunc()
}
outerfunc()
console.log("\n----------------------")
const myGlobalValue = 0
function funs(){
  const val1 = 1
  console.log(val1,myGlobalValue);
  function inneroffuns(){
    const val2 = 2;
    console.log(val2,val1,myGlobalValue)
    function innerofinnerfunc(){
      const val3 = 3
      console.log(val3,val2,val1,myGlobalValue)
    }
    innerofinnerfunc()
  }
  inneroffuns()
}
funs()

console.log("\n----------------------")

// const errorMessage = "File Not found"

// setTimeout(function call(){
//   console.log(errorMessage)
// },2000)

console.log("\n----------------------")

let pagecount = 0
let items = [1,2,3,4,5]

items.forEach(function iterator(num){
  pagecount++
  console.log(num)
})
console.log("PageCount",pagecount)


console.log("\n----------------------")


function outer() {
  const a = 10;
  function inner() {
    const b = 20;
    console.log(a + b);
  }
  return inner;
}

const closureFn = outer();

closureFn(); // outputs 30

console.log("\n----------------------")
function parent(){
  let count = 0;
  function child(){
    count = count + 1
    console.log(count)
  }
  return child
}

let increment = parent()
increment()
increment()
increment()

console.log("\n----------------------")

function secretPassword(){
  const password = 'xh38sk'
  return{
    guessPassword:function(guess){
      if(guess === password){
        return true;
      }
      else{
        return false
      }
    }
  }
}

let passwordGame = secretPassword()
console.log(passwordGame.guessPassword('heyisthist?'));
console.log(passwordGame.guessPassword('xh38sk'));

console.log("\n----------------------")


function s(){
  let o = 10
  return function w(){
      let b = 10
      return function a(){
          let c = 3
          return function p(){
              console.log("Hi My name is Swapnil and my age is",o+b+c)
          
          }
      }
  }
}
s()()()()
