const arrASC = [-1, 5, 6, 8, 12, 15, 23, 34, 45, 56, 67, 78, 89, 123, 1233, 1245, 6555];
const arrDesc = [6555, 1245, 1233, 123, 89, 89, 78, 67, 56, 45, 34, 23, 15, 12, 8, 6, 5, -1];

const orderAgnosticBinarySearch = (arr, target, start, last) => {
	const isASC = arr[start] < arr[last];
	while (start <= last) {
		let mid = Math.ceil((start + last) / 2);
		if (arr[mid] == target) {
			return mid;
		} else if (isASC) {
			if (target > arr[mid]) {
				start = mid + 1;
			} else {
				last = mid - 1;
			}
		} else {
			if (target < arr[mid]) {
				start = mid + 1;
			} else {
				last = mid - 1;
			}
		}
	}
	return false
}
console.log(orderAgnosticBinarySearch(arrASC, 89, 0, arrASC.length - 1));
console.log(orderAgnosticBinarySearch(arrDesc, 89, 0, arrDesc.length - 1));