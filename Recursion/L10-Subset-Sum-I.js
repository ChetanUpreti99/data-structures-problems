function printSubsetSum(index, sum, arr, subset) {

    if (index == arr.length) {
        subset.push(sum);
        return;
    }
    printSubsetSum(index + 1, sum + arr[index], arr, subset);
    printSubsetSum(index + 1, sum, arr, subset);
}

let arr = [3, 2, 1];
let subset = [];
printSubsetSum(0, 0, arr, subset);
console.log(subset.sort((a, b) => a - b));

