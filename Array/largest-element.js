/**
 * Example 1:
Input:
 arr[] = {2,5,1,3,0};
Output:
 5
Explanation:
 5 is the largest element in the array. 

Example2:
Input:
 arr[] = {8,10,5,7,9};
Output:
 10
Explanation:
 10 is the largest element in the array. 
 */

let arr = [2, 5, 1, 3, 0];

/* 
arr.sort((a, b) => a - b);
console.log(`arr`, arr); 

Time Complexity: O(N*log(N))

Space Complexity: O(N)
*/





function findLargestElement(arr) {
    let MAX_ELEMENT = Number.MIN_VALUE;
    for (const ele of arr) {
        MAX_ELEMENT = Math.max(MAX_ELEMENT, ele);
    }
    return MAX_ELEMENT;
}

/**
Time Complexity: O(N)
Space Complexity: O(1)
 */
console.log(findLargestElement(arr));