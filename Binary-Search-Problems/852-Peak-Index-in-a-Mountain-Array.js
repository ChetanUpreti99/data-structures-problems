
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		let mid = (start + end) >> 1;
		if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
			return mid;
		} else if (arr[mid] < arr[mid + 1]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
};


console.log(peakIndexInMountainArray([3, 4, 5, 1]))