function jumpSearch(arr,target) {
  const jump = Math.floor(Math.sqrt(arr.length))

  let prev = 0
  let current = jump

  while(arr[Math.min(current,arr.length) - 1] < target) {
     prev  = current
     current += jump

     if(prev >= arr.length) {
        return -1
     }
  }
  for(let i = prev; i < Math.min(current,arr.length); ++i) {
    if(arr[i] == target) {
        return i
    }
  }

  return -1

}


const arr = [-4,2,7,9]
console.log(jumpSearch(arr,8))
console.log(jumpSearch(arr,7))
console.log(jumpSearch(arr,12))

//space complexity o(1)
//time complexity
//best case o(1) 
//average case o(sqrt(n))
//worst case o(sqrt(n))