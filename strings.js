let swap = "swapnil"
console.log(swap.length);

let name = "Swapnil Gadekar"
let behevior = "Good"

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);

console.log(`${name} is ${behevior} boy in our class`);

let myfriend = "Harshal\"ovhal"
console.log(myfriend);

console.log("-------------------------Strings Methods------------------\n")

let Strings = "Swapnil"
console.log(Strings.length)
console.log(Strings.slice(2,4))
console.log(Strings.slice(2))
console.log(Strings.replace("Swapnil","Gadekar"))
console.log(Strings.toUpperCase())
console.log(Strings.toLowerCase())

let friend = " Harshal"
console.log(Strings.concat(friend))
console.log(friend.trim());

let fr = "Swapnil" + " Harshal" + " Vishwajeet"
// concatenation of strings
console.log(`My Friends are :${fr}`);
console.log(fr[0]);
console.log(fr[1]);
console.log(fr[2]);
console.log(fr[3]);
console.log(fr.split(","));

let str = "Gadekar"
console.log(str.substring(0,5))

let sentence = "swapnil is good boy in our class" ;
console.log(sentence.split(","));

console.log("-------------------------String Search Methods------------------\n")

let myName = "swapnil"
console.log(myName.indexOf("s"))
console.log(myName.indexOf("p"))
console.log(myName.lastIndexOf("n"))
console.log(myName.search("i"))
console.log(myName.match("i"))
console.log(myName.matchAll("swapnil"))
console.log(myName.includes("swap"))
console.log(myName.startsWith("swap"))
console.log(myName.endsWith("nil"))


