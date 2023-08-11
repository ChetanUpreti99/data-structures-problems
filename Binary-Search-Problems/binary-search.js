const arr = [-1, 5, 6, 8, 12, 15, 23, 34, 45, 56, 67, 78, 89, 123, 1233, 1245, 6555];

const binarySearch = (arr, target, start, last) => {
	while (start <= last) {
		let mid = Math.ceil((start + last) / 2);
		if (arr[mid] == target) {
			return mid;
		} else if (target > arr[mid]) {
			start = mid + 1;
		} else {
			last = mid - 1;
		}
	}
	return -1;
}
console.log(binarySearch(arr, 89, 0, arr.length));


const binarySearchRecursive = (arr, target, low, high) => {
	if (high < low) {
		return -1;
	}
	let mid = Math.ceil((low + high) / 2);
	if (arr[mid] == target) {
		return mid;
	} else if (target > arr[mid]) {
		low = mid + 1;
		return binarySearchRecursive(arr, target, low, high);
	} else {
		high = mid - 1;
		return binarySearchRecursive(arr, target, low, high);
	}
}
console.log(binarySearchRecursive(arr, 89, 0, arr.length));