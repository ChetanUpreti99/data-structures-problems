let arr = [3, 2, 1];
let subSequencesArr = [];

function printSubsequences(index, subSequencesArr, arr, n) {
    if (index == n) {
        let result = ``
        for (let index = 0; index < subSequencesArr.length; index++) {
            result += ` ${subSequencesArr[index]} `;
        }
        console.log(`${result}`)
        return;
    }
    //take condition
    subSequencesArr.push(arr[index]);
    printSubsequences(index + 1, subSequencesArr, arr, arr.length);
    //not take condition
    subSequencesArr.pop();
    printSubsequences(index + 1, subSequencesArr, arr, arr.length);
}

printSubsequences(0, subSequencesArr, arr, arr.length);