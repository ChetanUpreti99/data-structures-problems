/* 
You are visiting a farm that has a single row of fruit trees arranged from left to right. 
The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. 
There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree 
(including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.
*/


/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let l = 0;
    let maxLength = -1;
    let fruitTypeCountMapping = new Map();
    for(let r = 0; r < fruits.length; r++) {
        let charCount  = fruitTypeCountMapping.get(fruits[r]) ?? 0;
        fruitTypeCountMapping.set(fruits[r], charCount+1);
        

        while(fruitTypeCountMapping.size > 2) {
             let charCount  = fruitTypeCountMapping.get(fruits[l]);
             fruitTypeCountMapping.set(fruits[l], charCount-1);
             if (fruitTypeCountMapping.get(fruits[l]) === 0) {
                    fruitTypeCountMapping.delete(fruits[l])
                };
             l++;
        }

        if(fruitTypeCountMapping.size <= 2) {
            maxLength = Math.max(maxLength, r-l+1);
        }
    }
    return maxLength;
};


let fruits = [1,2,1];
console.log(totalFruit(fruits))