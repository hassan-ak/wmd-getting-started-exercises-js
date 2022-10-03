/*
    - Shrinking Guest List:
    You just found out that your new dinner table won’t arrive in time for the dinner, 
    and you have space for only two guests.
        • Start with your program from Exercise 16. 
        Add a new line that prints a message saying that you can invite only two people for dinner.
        • Remove guests from your list one at a time until only two names remain in your list. 
        Each time you pop a name from your list, 
        print a message to that person letting them know you’re sorry you can’t invite them to dinner.
        • Print a message to each of the two people still on your list, 
        letting them know they’re still invited.
        • Remove the last two names from your list, so you have an empty list. 
        Print your list to make sure you actually have an empty list at the end of your program.
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

console.log('\n*** Information Alert ***');
console.log(
  'Hello everyone, There is a bad news.\nOnly two of you can join us tonight for dinner.\n'
);

// pop guest from list and display message
var noOfGuest = guestList.length;

console.log('\n*** Cancelation of dinner plan ***');
for (let i = 0; i < noOfGuest - 2; i++) {
  console.log(
    `Hello ${guestList.pop()}, I am realy sorry, I can't inivte you for dinner.`
  );
}

// new set of invitations
console.log('\n*** Final Invitations ***');
for (let i = 0; i < guestList.length; i++) {
  console.log(`Hello ${guestList[i]}, you are still invited for dinner.`);
}

// empty list
guestList.splice(0, guestList.length);
console.log("\nGuest's list after sending all invitations : ", guestList, '\n');
