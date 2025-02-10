function binarySearchRecursive(arr, target, low, high) {
      if(low  > high) {
        return -1
       }

        let mid = Math.floor((low + (high - low)/2))
        if(arr[mid] == target) {
            return mid
        }
        if(arr[mid] < target) {
           return binarySearchRecursive(arr,target,mid + 1,high)
        }
        else{
           return binarySearchRecursive(arr,target,low,mid - 1)
        }


}
const arr = [0,2,5,7,9,23,45]

console.log(binarySearchRecursive(arr,35,0,arr.length - 1))
console.log(binarySearchRecursive(arr,23,0,arr.length - 1))


//space complexity o(logn)
//time complexity
//best case o(1)
//average case o(logn)
//worst cas O(logn)