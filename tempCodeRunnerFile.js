function even(){
    let even = [];
    let total = 0
    for(i=0;i<=100;i++){
        if(i%2==0 && i%3==0 ){
            even.push(i)
            total+=i
        }
    }
    console.log("Even Number",even)
    return total * 2;
}

console.log(even())