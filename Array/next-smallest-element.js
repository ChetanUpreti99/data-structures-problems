
let A = [1, 2, 3];

/* function nextSmallestElement(A) {
    // Implement your solution here
    let smallestNum = 1;
    let isFound = false;
    while (!isFound) {
        let indexOfEle = A.indexOf(smallestNum);
        if (indexOfEle !== -1) {
            smallestNum = smallestNum + 1
        } else {
            return smallestNum;
        }
    }
} */

function nextSmallestElement(A) {
    // Implement your solution here
    let smallestNum = 1;
    let set = new Set(A);
    while (set.has(smallestNum)) {
        smallestNum = smallestNum + 1;
    }
    return smallestNum;
}

console.log(nextSmallestElement(A));