/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
	let max_wealth = Number.MIN_VALUE;
	for (let row = 0; row < accounts.length; row++) {
		let sum_of_wealth = 0;
		for (let col = 0; col < accounts[row].length; col++) {
			sum_of_wealth = sum_of_wealth + accounts[row][col];

		}
		if (sum_of_wealth > max_wealth) {
			max_wealth = sum_of_wealth;
		}
	}
	return max_wealth;
};