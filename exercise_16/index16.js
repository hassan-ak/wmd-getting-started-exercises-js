/*
    More Guests: 
    You just found a bigger dinner table, so now more space is available. 
    Think of three more guests to invite to dinner.
        • Start with your program from Exercise 15. 
        Add a print statement to the end of your program
        informing people that you found a bigger dinner table.
        • Add one new guest to the beginning of your array.
        • Add one new guest to the middle of your array.
        • Use append() to add one new guest to the end of your list.
        • Print a new set of invitation messages, one for each person in your list.
*/

// Original list and invitations
var guestList = ['Hassan', 'Zubair', 'Umair'];
console.log('\n*** Original Invitations ***');
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Hello ${guestList[i]}, you are invited to join us for dinner at our place.`
  );
}

// guest to remove and add
console.log("\n*** Guest who cant't make it and replacement ***");
var misedGuest = 'Zubair';
console.log('Left out Guest : ', misedGuest);
var newGuest = 'Ibtisam';
console.log('New Guest : ', newGuest);

// guest replacement
const index = guestList.indexOf(misedGuest);
if (index > -1) {
  guestList[index] = newGuest;
}

// new invitations
console.log('\n*** New Invitations ***');
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Hello ${guestList[i]}, you are invited to join us for dinner at our place.`
  );
}

console.log('\n*** Information Alert ***');
console.log(
  'Hello everyone, I just found a bigger dinning table.\nMore guests can also join us.'
);

// new guests list
var newGuestList = ['Zameer', 'Naveed', 'Ali'];
// add new guest to beginning
guestList.unshift(newGuestList[0]);
// add new guest to middle
middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestList[1]);
// add new guest to end
guestList.push(newGuestList[2]);

// new set of invitations
console.log('\n*** New Set of Invitations ***');
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Hello ${guestList[i]}, you are invited to join us for dinner at our place.`
  );
}

console.log(' ');
