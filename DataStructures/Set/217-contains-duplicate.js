/**
* Input: nums = [1,2,3,1]
*  Output: true
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    let numsSet = new Set();
    for (const num of nums) {
        if (numsSet.has(num)) {
            return true;
        } else {
            numsSet.add(num);
        }
    }
};

const nums = [1, 2, 3, 1]
console.log(containsDuplicate(nums));