
/* 
	1. maps are ordered  
	2. key can any type
	3. iterable
	4. has size property
*/

const map = new Map([['e', 1], ['f', 2]]);

map.set('c', 4);
map.set('d', 5);

map.set([1, 2, 3], 5);



map.delete('d');

console.log(map.has('c'));

console.log(map.has('d'));

console.log(map.get('c'));

console.log(map.size);

for (const [key, value] of map) {
	console.log(key, value);
}