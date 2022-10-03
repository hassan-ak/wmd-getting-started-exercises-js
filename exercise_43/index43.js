/*
    Unchanged Magicians: 
    Start with your work from Exercise 40. 
    Call the function make_great() with a copy of the array of magicians’ names. 
    Because the original array will be unchanged, return the new array and store it in a separate array.
    Call show_magicians() with each array to show that you have one array of the original
    names and one array with the Great added to each magician’s name.
*/

var magicans = ['S. S. Adams', 'Jay Marshall', 'Max MAaven'];

function make_great([...magicans]) {
  for (let i = 0; i < magicans.length; i++) {
    magicans[i] = `The Great ${magicans[i]}`;
  }
  return magicans;
}

function show_magicians(magicanNames) {
  console.log('Magicians : ');
  for (let i = 0; i < magicanNames.length; i++) {
    console.log('\t', magicanNames[i]);
  }
}

var newMagicans = make_great(magicans);

show_magicians(magicans);
show_magicians(newMagicans);
