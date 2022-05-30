/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	let ans = [];
	candidates.sort((a, b) => a - b);
	getCombinationSum2(0, [], candidates, target, candidates.length, ans);
	console.log('ans', ans);
	return ans;
};

function getCombinationSum2(index, ds, arr, target, n, ans) {
	if (target == 0) {
		ans.push([...ds]);
		return;
	}

	for (let i = index; i <= n - 1; i++) {
		if (arr[i] > target) {
			break;
		}
		if (i > index && arr[i] === arr[i - 1]) {
			continue;
		}
		ds.push(arr[i]);
		getCombinationSum2(i + 1, ds, arr, target - arr[i], arr.length, ans);
		ds.pop();
	}
}

combinationSum2([1, 2, 6, 1], 8);
