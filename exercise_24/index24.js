/*
    - More Conditional Tests: 
    You don’t have to limit the number of tests you create to 10. 
    If you want to try more comparisons, write more tests. 
    Have at least one True and one False result for each of the following:
        • Tests for equality and inequality with strings
        • Tests using the lower case function
        • Numerical tests involving equality and inequality, 
        greater than and less than, 
        greater than or equal to, 
        and less than or equal to
        • Tests using "and" and "or" operators
        • Test whether an item is in a array
        • Test whether an item is not in a array
*/

console.log('\n*** Tests for equality and inequality with strings ***');
console.log("Is 'Hassan' === 'Hassan' ? I predict True.");
console.log('Hassan' === 'Hassan');
console.log("Is 'Hassan' === 'Has san' ? I predict False.");
console.log('Hassan' === 'Has san');
console.log("Is '298' !== 298 ? I predict True.");
console.log('298' !== 298);
console.log("Is '298' !== 290 + 8 ? I predict False.");
console.log('298' !== '298');

console.log('\n*** Tests using the lower case function ***');
console.log("Is 'city' === 'CITY'.toLowerCase() ? I predict True.");
console.log('city' === 'CITY'.toLowerCase());
console.log("Is 'name' !== 'NaMe'.toLowerCase() ? I predict False.");
console.log('name' !== 'NaMe'.toLowerCase());

console.log(
  '\n*** Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to ***'
);
console.log('Is 5 + 5 === 10 ? I predict True.');
console.log(5 + 5 === 10);
console.log('Is 5 * 5 === 20 ? I predict False.');
console.log(5 * 5 === 20);
console.log('Is 5 + 5 * 5 !== 50 ? I predict True.');
console.log(5 + 5 * 5 !== 50);
console.log('Is 5 + 5 * 5 !== 30 ? I predict False.');
console.log(5 + 5 * 5 !== 30);
console.log('Is 23 % 5 > 2 ? I predict True.');
console.log(23 % 5 > 2);
console.log('Is 23 % 7 > 2 ? I predict Fasle.');
console.log(23 % 7 > 2);
console.log('Is 23 / 5 < 12 ? I predict True.');
console.log(23 / 5 < 12);
console.log('Is 23 / 5 < 2 ? I predict False.');
console.log(23 / 5 < 2);
console.log('Is 4 * 3 >= 12 ? I predict True.');
console.log(4 * 3 >= 12);
console.log('Is 4 - 3 >= 7 ? I predict False.');
console.log(4 - 3 >= 7);
console.log('Is 4 * 3 <= 12 ? I predict True.');
console.log(4 * 3 >= 12);
console.log('Is 4 - 3 <= 7 ? I predict False.');
console.log(4 - 3 >= 7);

console.log('\n*** Tests using "and" and "or" operators ***');
console.log('Is 1 < 2 && 2 < 3; ? I predict True.');
console.log(1 < 2 && 2 < 3);
console.log('Is 1 < 2 && 2 > 3; ? I predict False.');
console.log(1 < 2 && 2 > 3);
console.log('Is 1 > 2 || 2 < 3; ? I predict True.');
console.log(1 > 2 || 2 < 3);
console.log('Is 1 < 2 || 2 > 3; ? I predict False.');
console.log(1 < 2 && 2 > 3);

console.log('\n*** Test whether an item is in a array ***');
var friends = ['Hassan', 'Zubair'];
console.log("'Hassan' in array ['Hassan', 'Zubair'] ? I predict True.");
console.log(friends.includes('Hassan'));

console.log('\n*** Test whether an item is not in a array ***');
var friends = ['Hassan', 'Zubair'];
console.log("'Yasir' in array ['Hassan', 'Zubair'] ? I predict False.");
if (friends.indexOf('Yasir') < 0) {
  console.log(false);
}
