/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
	let evenNumberOfDigitsCounter = 0;
	for (let index = 0; index < nums.length; index++) {
		if (getNumberOfDigits(nums[index]) % 2 == 0) {
			evenNumberOfDigitsCounter = evenNumberOfDigitsCounter + 1;
		}
	}
	return evenNumberOfDigitsCounter;
};


/**
 * @param {number} num
 * @return {number}
 */
const getNumberOfDigits = function (num) {
	return Math.floor(Math.log10(num) + 1);
}

