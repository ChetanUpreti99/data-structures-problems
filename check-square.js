let firstArr = [1, 2, 3, 4, 5, 5];
let secondArr = [1, 4, 9, 16, 25];


console.log(isSquaresCheck(firstArr, secondArr));
/* 
function isSquaresCheck(firstArr, secondArr) {
    const secondArrMap = new Map(secondArr.map((value, index) => [value, index]));
    for (const element of firstArr) {
        if (!secondArrMap.has(element * element)) {
            return false;
        } else {
            continue;
        }
    }
    return true;
}
 */



function isSquaresCheck(firstArr, secondArr) {
    const firstArrMap = new Map();

    for (const value of firstArr) {
        firstArrMap.set(value, firstArrMap.get(value) ? firstArrMap.get(value) + 1 : 1)
    }

    const secondArrMap = new Map();

    for (const value of secondArr) {
        secondArrMap.set(value, secondArrMap.get(value) ? secondArrMap.get(value) + 1 : 1)
    }

    // console.log(`firstArrMap`, firstArrMap, `secondArrMap`, secondArrMap);

    for (const [key, value] in firstArrMap) {
        if (!secondArrMap.has(key * key) || secondArrMap.get(key * key) != value) {
            return false;
        } else {
            continue;
        }
    }
    return true;
}



