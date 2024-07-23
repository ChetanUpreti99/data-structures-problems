/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, 
 * return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */


function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let median = 0;
    let n1 = nums1.length;
    let n2 = nums2.length;
    let i = 0;
    let j = 0;
    let newArr: number[] = [];
    while (i < n1 && j < n2) {
        if (nums1[i] < nums2[j]) {
            newArr.push(nums1[i]);
            i++;
        } else {
            newArr.push(nums2[j]);
            j++;
        }
    }

    while (i < n1) {
        newArr.push(nums1[i]);
        i++;
    }
    while (j < n2) {
        newArr.push(nums2[j]);
        j++;
    }
    console.log(`newArr`, newArr);

    let n = n1 + n2;
    if (n % 2 !== 0) {
        let medianIndex = Math.floor((n1 + n2) / 2);
        console.log(`medianIndex`, medianIndex);
        return newArr[medianIndex];
    } else {
        let medianIndex1 = Math.floor((n1 + n2) / 2);
        let medianIndex2 = medianIndex1 - 1;
        return (newArr[medianIndex1] + newArr[medianIndex2]) / 2;
    }
    return median;
};

let nums1 = [1, 2], nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2));

nums1 = [1, 3], nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));

nums1 = [2, 4, 6], nums2 = [1, 3, 5];
console.log(findMedianSortedArrays(nums1, nums2));


nums1 = [2, 4, 6], nums2 = [1, 3];
console.log(findMedianSortedArrays(nums1, nums2));
/**
Complexity Analysis
Time Complexity: O(n1+n2), where  n1 and n2 are the sizes of the given arrays.
Reason: We traverse through both arrays linearly.

Space Complexity: O(n1+n2), where  n1 and n2 are the sizes of the given arrays.
Reason: We are using an extra array of size (n1+n2) to solve this problem.
 */