let manipulateString = (inputstr,callback)=>{
    let manipulateStr = inputstr.toUpperCase();
    callback(manipulateStr)
}

let logString = (manipulateStr) =>{
    console.log(`The manipulated string is: ${manipulateStr}`)
}

manipulateString("hello , World!",logString)
manipulateString("hello , swapnil",logString)