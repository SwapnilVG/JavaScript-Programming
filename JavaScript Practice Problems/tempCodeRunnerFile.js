function commonElement(arr,arr2,arr3){
    return arr.filter(item=> arr2.includes(item) && arr3.includes(item))
}

console.log(commonElement([1,2,3,4,5,6,8,7,9],[6,3,5,7,6,2],[2,3,4,1,6,5]))