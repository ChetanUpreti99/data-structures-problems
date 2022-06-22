let arr = [1, 2, 3];


printAllPermutations(arr);

function printAllPermutations(arr) {
	let ans = [];
	getALLPermutations(0, arr, ans);
	console.log(ans);
}

function getALLPermutations(index, arr, ans) {

	if (index === arr.length) {
		ans.push([...arr]);
		return;
	}

	for (let i = index; i < arr.length; i++) {
		swap(i, index, arr);
		getALLPermutations(index + 1, arr, ans);
		swap(i, index, arr);
	}
}

function swap(i, j, arr) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

