let arr = [1, 2, 3, 4, 3, 5, 4, 6, 7, 8];

const findLargestSum = (arr, target) => {
    if (arr.length < target || target <= 0) {
        throw new Error(`wrong input`);
    }

    let max = 0;
    //number of times loop will run is arr.length-target+1
    for (let index = 0; index < arr.length - target + 1; index++) {
        let temp = 0;
        for (let j = 0; j < target; j++) {
            temp = temp + arr[index + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

console.log(findLargestSum(arr, 4));