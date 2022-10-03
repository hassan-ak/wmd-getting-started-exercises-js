/*
    Alien Colors #3: 
    Turn your if-else chain from Exercise 5-4 into an if-else chain.
    • If the alien is green, print a message that the player earned 5 points.
    • If the alien is yellow, print a message that the player earned 10 points.
    • If the alien is red, print a message that the player earned 15 points.
    • Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

// Version 01
var alien_color = 'green';
console.log('Version One');
if (alien_color === 'green') {
  console.log(`The player earned 5 points.`);
} else if (alien_color === 'yellow') {
  console.log(`The player earned 10 points.`);
} else if (alien_color === 'red') {
  console.log(`The player earned 15 points.`);
}
console.log('');

// Version 02
var alien_color = 'yellow';
console.log('Version Two');
if (alien_color === 'green') {
  console.log(`The player earned 5 points.`);
} else if (alien_color === 'yellow') {
  console.log(`The player earned 10 points.`);
} else if (alien_color === 'red') {
  console.log(`The player earned 15 points.`);
}
console.log('');

// Version 03
var alien_color = 'red';
console.log('Version Three');
if (alien_color === 'green') {
  console.log(`The player earned 5 points.`);
} else if (alien_color === 'yellow') {
  console.log(`The player earned 10 points.`);
} else if (alien_color === 'red') {
  console.log(`The player earned 15 points.`);
}
