function linearSearch(arr,target) {
   for(let i = 0; i < arr.length; ++i) {
       if(arr[i] == target) {
        return i
       }
   }

   return -1
}
//space complexity
//O(1)
//time complexity
//best case O(1)
//average case O(n/2) = O(n)
//worst case O(n)

const arr = [3,5,1,8,9]
console.log(linearSearch(arr,7))
console.log(linearSearch(arr,1))
