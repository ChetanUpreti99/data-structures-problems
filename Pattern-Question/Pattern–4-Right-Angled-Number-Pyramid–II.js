/**
 * 
Input Format: N = 6
Result:
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6

 */


let N = 6;
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write((i) + " ");
    }
    console.log("\n");
}