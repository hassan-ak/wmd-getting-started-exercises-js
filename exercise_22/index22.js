/*
    Intentional Error: 
    If you haven’t received an array index error in one of your programs yet, 
    try to make one happen. Change an index in one of your programs
    to produce an index error. 
    Make sure you correct the error before closing the program.
*/

var friends = ['Hassan', 'Zubair'];
console.log('Have a look at following array');
console.log(friends);
console.log(
  'There are only two elements in the list.\nLet try to access 5th element of the list'
);
console.log('Fifth element : ', friends[5]);
console.log(
  "It seems JS don't have an array index error,\nit just returns undefined when ever out of index element is accessed"
);
