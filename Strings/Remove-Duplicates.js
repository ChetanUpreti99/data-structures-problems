const str = "hello world a good";
//output  = "helo wrdag"


function removeDuplicates(str) {
    let modifiedStrSet = new Set();
    for (let i = 0; i < str.length; i++) {
        if (modifiedStrSet.has(str[i])) {
            continue;
        } else {
            modifiedStrSet.add(str[i]);
        }
    }
    let modifiedStr = "";
    for (let item of modifiedStrSet) {
        modifiedStr += item;
    }
    return modifiedStr;
}


/*
function removeDuplicates(str) {
    return [...new Set(str)].join('');
}

const str = "hello world a good";
console.log(removeDuplicates(str));
 */
//console.log(removeDuplicates(str));




