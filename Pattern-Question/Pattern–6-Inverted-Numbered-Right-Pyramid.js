/**
 * 
Input Format: N = 6
Result:
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1
*/


let N = 6;
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N - i + 1; j++) {
        process.stdout.write(j + " ");
    }
    console.log("\n");
}