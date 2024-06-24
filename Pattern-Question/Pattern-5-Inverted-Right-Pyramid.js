/**
 * 
Input Format: N = 6
Result:
* * * * * *
* * * * * 
* * * * 
* * * 
* * 
* 

*/


let N = 6;
for (let i = 1; i <= N; i++) {
    for (let j = N; j >= i; j--) {
        process.stdout.write("* ");
    }
    console.log("\n");
}