let array = [7, 1, 5, 3, 6, 4];
/* let MAX_PROFIT = 0;
for (let i = 0; i < array.length; i++) {
	for (let j = i + 1; j < array.length; j++) {
		if (
			array[j] > array[i] &&
			MAX_PROFIT < (array[j] - array[i])
		) {
			MAX_PROFIT = array[j] - array[i];
		}
	}
}

console.log(MAX_PROFIT); */


let MAX_PROFIT = 0;
let mini = array[0];

for (let index = 1; index < array.length; index++) {
	let cost = array[index] - mini;
	MAX_PROFIT = Math.max(cost, MAX_PROFIT);
	mini = Math.min(mini, array[index]);
}

console.log(MAX_PROFIT);





