//Print numbers from 1 to 10 using a for loop.
for(let i = 1;i<=5;i++){
    console.log(i)
}



function commonElement(array,array2,array3){
   let commonElement = [];
   for(i=0;i<array.length;i++){
    for(j=0;j<array2.length;j++){
        if(array[i]===array2[i]){
            for(k=0;k<array3.length;k++){
                if(array[i]===array3[i]){
                    commonElement.push(array[i]);
                    break;
                }
            }
            break
        }
    }
   } 
   return commonElement;
}

console.log(commonElement([1,2,3,],[1,2,3,4,5,6,8,7,9,6],[1,2,3,4,5,6]))




function higherorder(arr,arr2,arr3){
    return arr.filter(item=>arr2.includes(item) && arr3.includes(item));
}


console.log(higherorder([1,2,3,],[1,2,3,4,5,6,8,7,9,6],[1,2,3]))