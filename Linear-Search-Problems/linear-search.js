let itmes = [
    [1, 2, 3, 4],
    [45, 65, 76, 75],
    [3, 45, 23, 65, 22, 23]
]


function searchIn2DArray(itmes, target) {
    if (itmes.length < 0) {
        return false;
    }
    for (let row = 0; row < itmes.length; row++) {
        for (let col = 0; col < itmes[row].length; col++) {
            if (itmes[row][col] == target) {
                return true;
            }
        }
    }
    return false;
}

console.log(searchIn2DArray(itmes, 100));