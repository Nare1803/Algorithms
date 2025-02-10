function binarySearchIterative(arr, target) {

    let low = 0
    let high = arr.length - 1
    while(low <= high) {
    
    let mid = Math.floor((low + (high - low)/2))
    if(arr[mid] == target) {
        return mid
    }

    if(arr[mid] < target) {
        low = mid + 1
    } 

    else {
        high = mid - 1
    } 
   }
    return -1
}


const arr = [0,2,5,7,9,23,45]

console.log(binarySearchIterative(arr,23))
console.log(binarySearchIterative(arr,35))

//space complexity o(1)
//time complexity
//best case o(1)
//average case o(logn)
//worst cas O(logn)