

let string = "PW Skills is the best educational platform to learn from.";
let pattern = /PW Skills/g;
console.log(pattern.test(string));


let string1 = "pw skills is the best educational platform to learn from.";
let pattern1 = /PW Skills/i;
console.log(pattern1.test(string1));

let string2 = "PW Skills is the best educational platform to learn from.";
let pattern2 = /PW Skills/i;
console.log(pattern2.test(string2))
console.log(string2.match(pattern2))


let string3 = "PW Skills is the best educational platform to learn from.PW Skills has launched its Full Stack Web Development Course.";
let pattern3 = /PW Skills/g;
console.log(string3.match(pattern3))



let patternn = 'pw'
let regExOne = new RegExp(patternn)
let flag = 'gi'
let regExTwo = new RegExp(patternn, flag)
console.log(regExTwo)

let regExThree = /pw/gi 

const strToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent"

console.log(strToCheck.replace(regExThree,"Physics Wallah"))
console.log(regExThree.test(strToCheck))
console.log(strToCheck.match(regExThree))


const webUrl = "https://pwskills.com/hitesh%20choudhary"

const useableUrl = webUrl.replace(/%\d0/, '-')
console.log(useableUrl);

let v = "RegExr was created by gskinner.com. Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode. The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community and view patterns you create or favorite in My Patterns. Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English."
console.log(v.replace(/RegExr/g,"Regular expression"))
console.log(v.match(/Reg/g))