let arr = [15, 3, 5, 7, 10, 98, 18, 23, 34, 9, 54, 32, 2];
reverseAnArray(0, arr);
console.log(arr);


function reverseAnArray(i, arr) {
    if (i >= (arr.length >> 1)) {
        return;
    }
    swapArray(i, arr.length - i - 1, arr);
    reverseAnArray(i + 1, arr);
}

function swapArray(i, j, arr) {
    let z = arr[i];
    arr[i] = arr[j];
    arr[j] = z;
}

