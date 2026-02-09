/* 
You are given a string s consisting only lowercase alphabets and an integer k. 
Your task is to find the length of the longest substring that contains exactly k distinct characters.

Input: s = "aabacbebebe", k = 3
Output: 7
Explanation: The longest substring with exactly 3 distinct characters is "cbebebe", which includes 'c', 'b', and 'e'.
Note : If no such substring exists, return -1.  

Input: s = "aaaa", k = 2
Output: -1
Explanation: There's no substring with 2 distinct characters.

Input: s = "aabaaab", k = 2
Output: 7
Explanation: The entire string "aabaaab" has exactly 2 unique characters 'a' and 'b', making it the longest valid substring.
*/



/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestKSubstr(s, k) {
        let l = 0;
        let maxLength = -1;
        let charCountMapping = new Map();
        for(let r = 0; r < s.length; r++) {
            let charCount  = charCountMapping.get(s[r]) ?? 0;
            charCountMapping.set(s[r], charCount+1);
            

            while(charCountMapping.size > k) {
                 let charCount  = charCountMapping.get(s[l]);
                 
                 
                 charCountMapping.set(s[l], charCount-1);
                 if (charCountMapping.get(s[l]) === 0) {
                        charCountMapping.delete(s[l])
                    };
                 l++;
            }

            if(charCountMapping.size === k) {
                maxLength = Math.max(maxLength, r-l+1);
            }
        }
        return maxLength;
        
    }
}