const arr = [-1, 5, 6, 8, 12, 15, 23, 34, 45, 56, 67, 78, 89, 123, 1233, 1245, 6555];

const binarySearch = (arr, target, start, last) => {
	while (start < last) {
		let mid = Math.ceil((start + last) / 2);
		if (arr[mid] == target) {
			return mid;
		} else if (target >= arr[mid]) {
			start = mid + 1;
		} else {
			last = mid - 1;
		}
	}
	return false
}
console.log(binarySearch(arr, 89, 0, arr.length));