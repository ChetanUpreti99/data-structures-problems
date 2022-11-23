/**
input  : arr[] = {100, 200, 300, 400}, k = 2
Output : 700

Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
Output : 39
We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.

Input  : arr[] = {2, 3}, k = 3
Output : Invalid
There is no subarray of size 3 as size of whole array is 2.
 */

const maxSum = (array, target) => {
    if (array.length < target) {
        return `Invalid`;
    }

    let max = 0;
    for (let index = 0; index < target; index++) {
        const element = array[index];
        max = max + element;
    }

    for (let index = target; index < array.length; index++) {
        const element = array[index];
        let sum = (max + element) - array[index - target];
        max = Math.max(max, sum);
    }
    return max;
}

console.log(`maxSum`, maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(`maxSum`, maxSum([4, 2, 10, 23], 2));