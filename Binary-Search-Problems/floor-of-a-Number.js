
//largest no in array <= x

function getFloorOfNumber(arr, target) {
    let start = 0;
    let end = arr.length;
    let mid = 0;
    while (start <= end) {
        mid = (start + end) >> 1;
        if (arr[mid] == target) {
            return arr[mid];
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1
        }
    }
    return arr[end];
}


let arr = [23, 45, 56, 67, 78, 89, 99];
let target = 65;
let floorNumber = getFloorOfNumber(arr, target)
console.log(`floorNumber`, floorNumber);


/* if (arr[mid] <= target) {
    ans = mid;
    low = mid + 1;
} else {
    high = mid - 1;
} */