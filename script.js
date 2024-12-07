function sum_of_three_array(array,array2,array3){
    let totol_sum = 0;
    let even_number = [];
    function sumArray(arr){
        for(i=0;i<arr.length;i++){
            if(arr[i]%2==0){
                even_number.push(arr[i])
                totol_sum+=arr[i]
            }
        }
    }
    sumArray(array)
    sumArray(array2)
    sumArray(array3)

    console.log("Even numbers:",even_number);
    return totol_sum;
}
const total = sum_of_three_array([1,2,3],[4,5,6],[7,8,9])
console.log("Totol",total)






function higher_order_function(arr1,arr2,arr3){
    const combinedarray = [...arr1,...arr2,...arr3]
    const evennumbers = combinedarray.filter(num=>num%2==0)
    console.log("Even numbers",evennumbers)
    return evennumbers.reduce((cur,pre)=>cur+pre,0)
}

console.log(higher_order_function([1,2,3],[4,5,6],[7,8,9]))


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
    return total ;
}

console.log(even())
