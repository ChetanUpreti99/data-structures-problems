function _getMaximumMoneyRobByRobber(arr) {
    let prev = arr[0];
    let prevToPrev = 0;
    for (let index = 1; index < arr.length; index++) {
        let pick = arr[index];
        if (index > 1) {
            pick = pick + prevToPrev;
        }
        let notPick = 0 + prev;
        let cur_i = Math.max(pick, notPick);
        prevToPrev = prev;
        prev = cur_i;

    }
    return prev;
}


function getMaximumMoneyRobByRobber() {
    // let arr = [2, 1, 4, 9];
    let arr = [1, 5, 2, 1, 6];
    let newArr = [...arr];
    newArr.shift();
    let firstEleRemoveArr = newArr;
    newArr = [...arr];
    newArr.pop();
    let lastEleRemoveArr = newArr;
    return Math.max(_getMaximumMoneyRobByRobber(firstEleRemoveArr), _getMaximumMoneyRobByRobber(lastEleRemoveArr));
}

console.log(getMaximumMoneyRobByRobber());