/**
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    console.log(s)
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start] == s[end]) {
            start++;
            end--
        } else {
            return false;
        }
    }
    return true;
};
let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
s = "race a car"

console.log(isPalindrome(s));
