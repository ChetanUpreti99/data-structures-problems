/**
 * 1. what happens when 2 #'s appear beside each other.
 * 2. is empty strings are equals
 * 3. lowercase and uppercase matters
 * 4. what happens to # when there is no character to remove
 */

/**
 *  1. s = "", t = ""           true
 *  2. s = "ab#c", t = "ad#c"  true
 *  3. s = "ab##", t = "c#d#"   true
 *  4. s = "a###", t=""         true
 *  5. s = "a#c", t = "b"       false
 *  6. s = "ab#z", t = "AB#Z"    false
 */




/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/* var backspaceCompare = function (s, t) {
	let sArr = buildString(s);
	let tArr = buildString(t);

	if (sArr.length != tArr.length) {
		return false;
	}
	for (let index = 0; index < sArr.length; index++) {
		const elementS = sArr[index];
		const elementR = tArr[index];
		if (elementS != elementR) {
			return false;
		}
	}
	return true;
}; */


const buildString = (str) => {
	let strArr = [];
	for (let index = 0; index < str.length; index++) {
		const element = str[index];
		if (element === "#") {
			strArr.pop();
		} else {
			strArr.push(element)
		}
	}
	return strArr;
}
/**
 * time O(s+t)
 * space O(s+t)
 */


var backspaceCompare = function (s, t) {
	let sP = s.length - 1;
	let tP = t.length - 1;
	while (sP >= 0 || tP >= 0) {

		if (s[sP] == '#' || t[tP] == '#') {
			if (s[sP] == '#') {
				let backTrack = 2;
				while (backTrack > 0) {
					sP--;
					backTrack--;
					if (s[sP] == '#') {
						backTrack = backTrack + 2;
					}
				}
			}
			if (t[tP] == '#') {
				let backTrack = 2;
				while (backTrack > 0) {
					tP--;
					backTrack--;
					if (t[tP] == '#') {
						backTrack = backTrack + 2;
					}
				}
			}
		}
		else {
			console.log(s[sP], t[tP]);
			if (s[sP] !== t[tP]) {
				return false;
			}
			sP--;
			tP--;
		}
	}

	return true;
}

let s = "ab#c", t = "ad#c";


// console.log(backspaceCompare(s, t));
// s = "a#c", t = "b"
// console.log(backspaceCompare(s, t));

// s = "ab##", t = "c#d#";
// console.log(backspaceCompare(s, t));

s = "aaa###a", t = "aaaa###a";
console.log(backspaceCompare(s, t));