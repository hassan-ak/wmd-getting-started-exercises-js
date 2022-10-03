# Exercises No. 17

## Problem Statement:-

- Shrinking Guest List:
  You just found out that your new dinner table won’t arrive in time for the dinner,
  and you have space for only two guests.
  - Start with your program from Exercise 16.
    Add a new line that prints a message saying that you can invite only two people for dinner.
  - Remove guests from your list one at a time until only two names remain in your list.
    Each time you pop a name from your list,
    print a message to that person letting them know you’re sorry you can’t invite them to dinner.
  - Print a message to each of the two people still on your list,
    letting them know they’re still invited.
  - Remove the last two names from your list, so you have an empty list.
    Print your list to make sure you actually have an empty list at the end of your program.

## Solution:-

- Create a file `index17.js` with the following content

  ![Exercise 17 JS Code](../snaps/q17p1.svg)

- Run the code by using following command in terminal

  ```
  node index17.js
  ```

- Output in the terminal will be as follows

  ![Exercise 17 Terminal Output](../snaps/q17p2.PNG)

- To run the code in the browser create an HTML file `index17.html` and link JS file with it using following piece of code

  ```html
  <script src="./index17.js"></script>
  ```

- Open `index17.html` in browser and navigate to console. Same output can be seen there.

  ![Exercise 17 Console Output](../snaps/q17p3.PNG)
