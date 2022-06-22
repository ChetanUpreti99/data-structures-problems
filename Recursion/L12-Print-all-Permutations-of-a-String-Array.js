let arr = [1, 2, 3];


printAllPermutations(arr);

function printAllPermutations(arr) {
    let ans = [];
    let ds = [];
    var mapDS = new Array(arr.length).fill(false);
    getALLPermutations(ds, ans, arr, mapDS);
    console.log(ans);
}

function getALLPermutations(ds, ans, arr, mapDS) {

    if (ds.length === arr.length) {
        ans.push([...ds]);
        return;
    }

    for (let index = 0; index < arr.length; index++) {
        if (!mapDS[index]) {
            ds.push(arr[index]);
            mapDS[index] = true;
            getALLPermutations(ds, ans, arr, mapDS);
            mapDS[index] = false;
            ds.pop();
        }
    }
}

