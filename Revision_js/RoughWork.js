// let num = prompt("Enter a number")
// if(num % 5 == 0){
//     console.log(num,"is Multiple by 5")
// }else{
//     console.log(num,"is Not Multiple by 5")
// }



// let grade
// let score=prompt('Please enter your score');
// if(score>=90 && score<=100){
//     grade = "A"
// }else if (score>=70 && score<=89){
//     grade = "B"
// }else if (score>=60 && score<=69){
//     grade = "C"
// }else if (score>=50 && score<=59){
//     grade = "D"
// }else if (score>=0 && score<=49){
//     grade = "D"
// }

// console.log("According to your scores your Grade is",grade)

// for(let i=0;i<=5;i++){
//     console.log("Swapnil")
// }



// let swap = () =>{
//     return new Promise(function o(respond,reject){
//         // respond("HI");
//         reject("An error Occur")
//     }).then((respond)=>{
//         console.log(respond)
//     }).catch((reject)=>{
//         console.log(reject)
//     })
// }
// console.log(swap())



// function swap(a,b){
//     console.log("Swapnil")
//     return a + b
// }
// let p = swap(1,3)
// console.log(p)



// function addTatol(...number){
//     let total = 0
//     for(let num of number){
//         total +=num
//     }
//     return total
// }
// console.log(addTatol(1,2,3))


// let object = {
//     name :"Swapnil",
//     email:"Swapnilgadekar@gmail.com"
// }
// function addUser(obj){
//     console.log(`A user name is ${obj.name} and he got email ID is ${obj.email}`)
// }
// // addUser({name:"Swapnil",email:"swap@gmail.com"})
// addUser(object)




// let obj = {
//     name :"swapnil",
//     age:23,

//     s:function swap(){
//         console.log(`my name is ${this.name} and my age is ${this.age}`)
//     }
// }

// console.log(obj.s())

// let  p = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve('Promise resolved')
//         }else{
//             reject('Promise is rejected')
//         }
//     },1000)
// })
// .then(function(respond){
//     console.log(respond)
// }).catch(function(error){
//     console.log(error)
// })


// async function consume(){
//     try {
//         let respo = await p
//         console.log(respo)
//     } catch (error) {
//         console.error(error)
//     }
// }
// consume()

