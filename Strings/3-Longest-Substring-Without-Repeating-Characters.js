//https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * Input: s = "abcabcbb"
 * Output: 3
 */

/**
 * @param {string} s
 * @return {number}
 */
/* 
var lengthOfLongestSubstring = function (s) {
	if (s.length <= 1) return s.length;
	let maxLength = 0;
	for (let index = 0; index < s.length; index++) {
		let j = index;
		let stringSet = new Set();
		let length = 0;
		let r = ``
		while (!stringSet.has(s[j]) && j < s.length) {
			r = r + s[j];
			stringSet.add(s[j]);
			length = length + 1;
			j++;
		}
		maxLength = Math.max(length, maxLength);
	}
	return maxLength;
}; 
*/

// Time: O(N^2)
// Space: O(N)



var lengthOfLongestSubstring = function (s) {
	if (s.length <= 1) return s.length;
	let l = 0;
	let r = 0;;
	let longest = 0;
	let setArr = {}
	while (r < s.length) {
		let currChar = s[r];
		let prevSeenChar = setArr[currChar];

		if (prevSeenChar != undefined && prevSeenChar >= l) {
			l = prevSeenChar + 1;
		}

		setArr[currChar] = r;
		longest = Math.max(longest, r - l + 1)

		r++;
	}
	return longest;
};

// Time: O(N)
// Space: O(N)

let s = "abcabcbb";
console.log(`answer_1`, lengthOfLongestSubstring(s));
s = "pwwkew"
console.log(`answer_2`, lengthOfLongestSubstring(s));