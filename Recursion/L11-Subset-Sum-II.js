
prinSubsets();

function prinSubsets() {
    let arr = [1, 3, 2];
    arr.sort((a, b) => a - b);
    let subsets = [];
    let ds = [];
    findSubsets(0, arr, ds, subsets);
    console.log(`subsets`, subsets);
}




function findSubsets(index, arr, ds, subsets) {
    subsets.push([...ds])
    for (let i = index; i < arr.length; i++) {
        if (i > index && arr[i] == arr[i - 1]) {
            continue;
        }
        ds.push(arr[i]);
        findSubsets(i + 1, arr, ds, subsets);
        ds.pop();
    }
}