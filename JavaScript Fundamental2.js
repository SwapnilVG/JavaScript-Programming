let age = 17
if (age >= 18){
    console.log("you are allowed to be vote")
}
else{
    console.log("you are not allowed to be vote")
}

let signal = "red"
if (signal == "red"){
    console.log("Red =>Stop");
}//Condition 1
else if (signal=="Yellow"){
    console.log("Yellow => Go slow");
//Condition 1
} 
else if (signal == "Green") {
    console.log("Green => Go Fast");
//Condition 1
}
else{
    console.log("Invalid");
}


let user = "Mentor";

switch(user){
    case "Admin":
        console.log("He is Admin");
        break
    
    case "Student":
        console.log("He is Student");
        break

    
    case "Mentor":
        console.log("He is Mentor");
        break
    
    default:
        console.log("Invalid");    
}

for (i=0;i<5;i++){
    console.log(i);
}

i=0
while(i<5){
    console.log(i);
    i++
}

i=0
do{
    console.log(i);
    i++
}while(i<5)


isLogged = false
isLogged ? console.log("login"):console.log("Not Login")