function countingSort(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let count = new Array(max - min + 1).fill(0)
    
    for (let num of arr) {
        count[num - min]++
    }
    
    let index = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[index++] = i + min
            count[i]--
        }
    }
    return arr

}

console.log(countingSort([5, 3, 8, 4, 2]))