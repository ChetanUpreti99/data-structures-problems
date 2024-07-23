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


function find3Sum(nums) {
    let set = new Set();
    let triplets = [];
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

/* nums = [-1, 0, 1, 0];
find3Sum(nums);
nums = [-1, 0, 1, 2, -1, -4];
find3Sum(nums); */

function triplet(nums, n) {
    let ans = [];
    for (let i = 0; i < n; i++) {
        let hashSet = new Set();
        for (let j = i + 1; j < n; j++) {
            let third = -(nums[i] + nums[j]);
            if (hashSet.has(third)) {
                let temp = [nums[i], nums[j], third];
                temp.sort((a, b) => a - b);
                ans.push(temp)
            }
            hashSet.add(nums[j], j);
        }

    }

    let set = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    console.log(`ans`, ans);
    return ans;
}
nums = [-1, 0, 1, 0];
triplet(nums, nums.length);
nums = [-1, 0, 1, 2, -1, -4];
triplet(nums, nums.length);





function triplet(n, arr) {
    let ans = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        // remove duplicates:
        if (i !== 0 && arr[i] === arr[i - 1]) continue;

        // moving 2 pointers:
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                let temp = [arr[i], arr[j], arr[k]];
                ans.push(temp);
                j++;
                k--;
                // skip the duplicates:
                while (j < k && arr[j] === arr[j - 1]) j++;
                while (j < k && arr[k] === arr[k + 1]) k--;
            }
        }
    }
    return ans;
}









