/**
 *
3 Sum : Find triplets that add up to a zero

Problem Statement: Given an array of N integers, 
your task is to find unique triplets that add up to give a sum of zero. 
In short, you need to return an array of all the unique 
triplets [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i, and their sum is equal to zero.

Pre-requisite: 2 Sum Problem

Examples
Example 1:
Input:
 nums = [-1,0,1,2,-1,-4]

Output:
 [[-1,-1,2],[-1,0,1]]

Explanation:
 Out of all possible unique triplets possible, [-1,-1,2] and [-1,0,1]
  satisfy the condition of summing up to zero with i!=j!=k

Example 2:
Input:
 nums=[-1,0,1,0]
Output:
 Output: [[-1,0,1],[-1,1,0]]
Explanation:
 Out of all possible unique triplets possible, [-1,0,1] and [-1,1,0] 
 satisfy the condition of summing up to zero with i!=j!=k
 */


function find3Sum(nums: number[]): void {
    let set = new Set<string>();
    let triplets: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b); // Sort to handle duplicates
                    set.add(JSON.stringify(triplet));
                }
            }
        }

    }
    // Convert set to array and parse each string to an array
    triplets = Array.from(set).map(triplet => JSON.parse(triplet));

    console.log('triplets', triplets);
}

nums = [-1, 0, 1, 0];
find3Sum(nums);
nums = [-1, 0, 1, 2, -1, -4];
find3Sum(nums);






