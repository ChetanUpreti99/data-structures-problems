// let s = 'rat';
// let t = 'car';

let s = 'anagram';
let t = 'gramana';

if (s.split("").sort().join("") === t.split("").sort().join("")) {
    console.log(true);
} else {
    console.log(false);
}


const isAnagram = () => {
    if (s.length !== t.length) return false;
    let sMap = new Map();
    let tMap = new Map();
    for (let index = 0; index < s.length; index++) {
        let sLetterCount = sMap.get(s[index]) || 0;
        let tLetterCount = tMap.get(t[index]) || 0;
        sMap.set(s[index], ++sLetterCount);
        tMap.set(t[index], ++tLetterCount);
    }
    console.log(sMap, tMap);

    for (let [key, value] of sMap) {
        if (value !== tMap.get(key) || 0) {
            return false;
        }
    }
    return true;
}
console.log(isAnagram());