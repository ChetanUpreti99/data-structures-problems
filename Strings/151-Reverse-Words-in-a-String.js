/**
 * Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
    Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 */

let s = "  hello world  ";
s = "the sky is blue"

function reverseWordsInSentence(s) {
    let splitString = s.split(" ");
    let revString = "";
    for (let index = splitString.length - 1; index >= 0; index--) {
        const element = splitString[index];
        if (element === "") {
            continue;
        }
        if (revString.length > 0) revString = revString + " ";

        revString = revString + element;
    }
    return revString;
}
console.log(reverseWordsInSentence(s));