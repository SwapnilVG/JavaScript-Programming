// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// let even = []
// let sum = 0

// for(i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         even.push(numbers[i])
//         sum+=numbers[i]
//     }
// }

// console.log(even)

// console.log(sum)

// setInterval(function(){
//     let random = even[Math.floor(Math.random()*even.length)]
//     console.log("random number",random)
// },1000)


// for(i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0 && numbers[i]>10){
//         console.log("Even numbers grater than 10",numbers[i])
//     }
// }


// let countdownNumber = 20;
// const countdownElement = document.getElementById('countdown');

// const countdownTimer = setInterval(() => {
//     countdownElement.textContent = countdownNumber;
//     countdownNumber--;

//     if (countdownNumber < 0) {
//         clearInterval(countdownTimer);
//         countdownElement.textContent = "Welcome to Our Site";
//     }
// }, 1000);



let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let  even = numbers.filter((num)=>num%2==0)
let random = even[Math.floor(Math.random() * even.length)]
console.log(random)

let add = numbers.reduce((cur,pre)=>cur+pre)
console.log(add)

let greater = numbers.filter((num)=>{
    if(num%2==0 && num>10){
        console.log(num)
    }
})



function reverse(str){
    let word = ''
    for(let i=str.length-1;i>=0;i--){
        word+=str[i]
    }
    return word
}

console.log(reverse("Swapnil"))


function reversep(str){
    return str.split('').reverse().join("")
}
console.log(reversep("Swapnil"))



async function dataFetch(){
    try {
        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json()

        let unique = new Set()
        data.forEach((data)=>{
            unique.add(data.category)
        })
        unique.forEach((category)=>{
            console.log(category)
        })
    } catch (error) {
        console.log("Fail to Fetch  given Link::",error.message)
    }
}

dataFetch()



