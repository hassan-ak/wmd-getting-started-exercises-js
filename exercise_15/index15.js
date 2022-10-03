/*
    - Changing Guest List: 
    You just heard that one of your guests can’t make the dinner, 
    so you need to send out a new set of invitations. 
    You’ll have to think of someone else to invite.
        • Start with your program from Exercise 14. 
            Add a print statement at the end of your program stating the 
            name of the guest who can’t make it.
        • Modify your list, 
            replacing the name of the guest who can’t make it 
            with the name of the new person you are inviting.
        • Print a second set of invitation messages, 
            one for each person who is still in your list.
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
console.log('');
