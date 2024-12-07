let age = 19
if (age >= 18){
    console.log("You Can Vote")
}
else {
    console.log("You Cannot Vote")
}

let signal = "Red"
if (signal=="Red"){
    console.log("Stop")
}
else if (signal=="Yellow"){
    console.log("GO Slow")
}
else if (signal=="Green"){
    console.log("GO")
}
else{
    console.log("Invalid")
}

let user ="Admin"
switch(user){
    case "Admin":
        console.log("He is Admin")
    case "Student":
        console.log("He is Student")
    case "superAdmin":
        console.log("He is superAdmin")
    case "User":
        console.log("He is User")
}

for (let i=0 ; i<5 ; i++){
    console.log(i)
}