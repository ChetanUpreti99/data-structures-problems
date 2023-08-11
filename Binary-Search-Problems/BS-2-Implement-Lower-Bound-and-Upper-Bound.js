//Lower bound => smallest index such that arr[index]>=target;


const lowerBound = (arr, target, start, last) => {
    let ans = -1;
    while (start <= last) {
        let mid = Math.ceil((start + last) / 2);
        if (arr[mid] == target) {
            ans = mid;
            high = mid - 1
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            last = mid - 1;
        }
    }
    return ans;
}



//upper bound => smallest index such that arr[index]>target;


const upperBound = (arr, target, start, last) => {
    let ans = -1;
    while (start <= last) {
        let mid = Math.ceil((start + last) / 2);
        if (arr[mid] == target) {
            ans = mid;
            low = mid + 1
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            last = mid - 1;
        }
    }
    return ans;
}