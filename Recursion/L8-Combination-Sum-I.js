
var combinationSum = function (candidates, target) {
	let combinations = [];
	getCombinationSum(0, [], candidates, target, candidates.length, combinations);
	console.log(`combinations`, combinations);
	return combinations;
};

function getCombinationSum(index, ds, candidates, target, n, combinations) {
	if (index === n) {
		if (target === 0) {
			combinations.push([...ds]);
		}
		return;
	}
	if (candidates[index] <= target) {
		ds.push(candidates[index]);
		getCombinationSum(index, ds, candidates, target - candidates[index], candidates.length, combinations);
		ds.pop();
	}
	getCombinationSum(index + 1, ds, candidates, target, candidates.length, combinations);

}

combinationSum([2, 3, 6, 7], 7);