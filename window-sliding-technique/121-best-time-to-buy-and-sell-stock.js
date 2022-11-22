
/**
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different
day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, 
return 0.
Input: prices = [7, 1, 5, 3, 6, 4]
Output: 5 
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
	let l = 0;
	let r = 1;
	let maxProfit = 0;
	while (r < prices.length) {
		if (prices[l] < prices[r]) {
			let profit = prices[r] - prices[l];
			maxProfit = Math.max(profit, maxProfit);
		} else {
			l = r;
		}
		r++;
	}
	return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));