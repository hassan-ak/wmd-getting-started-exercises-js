/*
    Great Magicians: 
    Start with a copy of your program from Exercise 39.
    Write a function called make_great() that modifies the array of magicians by adding
    the phrase the Great to each magician’s name. 
    Call show_magicians() to see that the list has actually been modified.
*/

var magicans = ['S. S. Adams', 'Jay Marshall', 'Max MAaven'];

function make_great(magicans) {
  for (let i = 0; i < magicans.length; i++) {
    magicans[i] = `The Great ${magicans[i]}`;
  }
}

function show_magicians(magicanNames) {
  console.log('Magicians : ');
  for (let i = 0; i < magicanNames.length; i++) {
    console.log('\t', magicanNames[i]);
  }
}

make_great(magicans);
show_magicians(magicans);
