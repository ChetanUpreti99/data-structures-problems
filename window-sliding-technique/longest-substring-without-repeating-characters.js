/* 
Example 1:

Input: s = ”abcabcbb”

Output: 3

Explanation: The answer is abc with length of 3.

Example 2:

Input: s = ”bbbbb”

Output: 1

Explanation: The answer is b with length of 1 unit. 
*/

function maxLenSubString(s) {

    let r = l = 0;
    let len = -1;
    let map = new Map();
    while (r < s.length) {
        if (map.has(s[r])) {
            l = map.get(s[r]) + 1;
        } else {
            map.set(s[r], r);
            len = Math.max(len, r - l + 1)
        }
        r++;
    }
    return len;
}

// let s = "abcabcbb";
let s = "bbbbb";

console.log(maxLenSubString(s));
