/*
    Checking Usernames: 
    Do the following to create a program that simulates 
    how websites ensure that everyone has a unique username.
    • Make a list of five or more usernames called current_users.
    • Make another list of five usernames called new_users. 
    Make sure one or two of the new usernames are also in the current_users list.
    • Loop through the new_users list to see if each new username has already been used. 
    If it has, print a message that the person will need to enter a
    new username.
    If a username has not been used, print a message saying that the username is available.
    • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

var current_users = ['a_123', 'eRic', 'hurera', 'admin', 'ali@89', 'ahmad'];
var new_users = ['hassan', 'ibtisam', 'eRIc', 'zubair', 'a_123'];
const current_users_test = current_users.map((user) => user.toLowerCase());
for (let i = 0; i < new_users.length; i++) {
  if (current_users_test.includes(new_users[i].toLowerCase())) {
    console.log(
      `'${new_users[i]}' is already taken, you need to enter a new username`
    );
  } else {
    console.log(`'${new_users[i]}' is available`);
  }
}
