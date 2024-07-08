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


/* const mySet = new Set([1, 2, 3, 4, 5]);
mySet.add("hye");
let obj = { b: "bye" };
mySet.add(obj);
mySet.add(obj);
mySet.add({ a: "hye" });
mySet.add({ a: "hye" });
console.log(mySet); */