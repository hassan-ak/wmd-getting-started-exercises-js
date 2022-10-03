/*
    Magicians: 
    Make a array of magician’s names. 
    Pass the array to a function called show_magicians(), 
    which prints the name of each magician in the array.
*/

var magicans = ['S. S. Adams', 'Jay Marshall', 'Max MAaven'];

function show_magicians(magicanNames) {
  console.log('Magicians : ');
  for (let i = 0; i < magicanNames.length; i++) {
    console.log('\t', magicanNames[i]);
  }
}

show_magicians(magicans);
