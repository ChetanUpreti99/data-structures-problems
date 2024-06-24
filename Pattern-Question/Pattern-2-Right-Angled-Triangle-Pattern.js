/**

Input Format: N = 6
Result:
* 
* * 
* * *
* * * *
* * * * *
* * * * * *
 
**/


let N = 6;
for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("* ");
    }
    console.log("\n");
}