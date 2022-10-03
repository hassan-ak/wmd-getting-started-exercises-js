/*
    Guest List: 
    If you could invite anyone, living or deceased, to dinner, 
    who would you invite? 
    Make a list that includes at least three people you’d like to invite to dinner. 
    Then use your list to print a message to each person, inviting them to dinner.
*/

var guestList = ['Hassan', 'Zubair', 'Umair'];
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Hello ${guestList[i]}, you are invited to join us for dinner at our place.`
  );
}
