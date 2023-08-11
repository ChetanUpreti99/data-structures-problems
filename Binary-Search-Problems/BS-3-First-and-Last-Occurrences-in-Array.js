//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

const firstOccurrence = (arr, target, start, last) => {
	let ans = -1;
	while (start <= last) {
		let mid = Math.ceil((start + last) / 2);
		if (arr[mid] == target) {
			ans = mid;
			last = mid - 1
		} else if (target > arr[mid]) {
			start = mid + 1;
		} else {
			last = mid - 1;
		}
	}
	return ans;
}

const lastOccurrence = (arr, target, start, last) => {
	let ans = -1;
	while (start <= last) {
		let mid = Math.ceil((start + last) / 2);
		if (arr[mid] == target) {
			ans = mid;
			start = mid + 1
		} else if (target > arr[mid]) {
			start = mid + 1;
		} else {
			last = mid - 1;
		}
	}
	return ans;
}

const firstAndLastPosition = (arr, n, target) => {
	let first = firstOccurrence(arr, target, 0, n);
	if (first == -1) {
		return [-1, -1];
	}

	let last = lastOccurrence(arr, target, 0, n);
	return [first, last];
}

let arr = [1, 2, 3, 6, 8, 8, 8, 8, 8, 8, 8, 9, 66, 69, 89, 90];
let target = 80;
console.log(firstAndLastPosition(arr, arr.length, target));

