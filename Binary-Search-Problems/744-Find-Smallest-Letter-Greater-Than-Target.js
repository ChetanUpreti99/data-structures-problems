/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
	let start = 0;
	let end = letters.length;
	let mid = 0;
	while (start <= end) {
		mid = (start + end) >> 1;
		if (letters[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1
		}
	}
	if (start === letters.length + 1) {
		return letters[0]
	} else {
		return letters[start];
	}
};

console.log(nextGreatestLetter(['c', 'j', 'e'], 'g'));