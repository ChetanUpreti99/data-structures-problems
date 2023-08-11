// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false


const palindrome = function (nums) {
	if (nums < 0 || typeof nums !== 'number') {
		return false;
	}
	let copyNums = nums;
	let reverse = 0;
	while (nums !== 0) {
		reverse = reverse * 10 + (nums % 10);
		nums = Math.floor(nums / 10);
	}
	return copyNums === reverse;
};

console.log(palindrome(13));


const palindrome2 = function (nums) {
	if (nums < 0 || typeof nums !== 'number') {
		return false;
	}

	return nums === +nums.toString().split("").reverse().join("");
};

console.log(palindrome2(121));