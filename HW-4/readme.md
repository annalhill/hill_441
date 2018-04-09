# HW-4 Readme for Anna Hill

(Link to Live Site)[https://annalhill.github.io/hill_441/HW-4/index.html]

#### Readings
1. Haverbeke, Marijn. Eloquent JavaScript: A Modern Introduction to Programming. 3rd Edition. N.p., 2018. Web.
    - Chapter 3; Functions
2. JavaScript Guide. MDN web docs. 2018. Web.
    - Functions

3. Haverbeke, Marijn. Eloquent JavaScript: A Modern Introduction to Programming. 3rd Edition. N.p., 2018. Web.
    - Chapter 4; Data Structures: Objects and Arrays
4. JavaScript Guide. MDN web docs. 2018. Web.
    - Indexed Collections
    - Working with objects
    - Keyed Collections

5. Haverbeke, Marijn. Eloquent JavaScript: A Modern Introduction to Programming. 3rd Edition. N.p., 2018. Web.
    - Chapter 5; Higher-Order Functions

#### Notes

```
console.log("something to print");

prompt("something to say in a popup box");

window.write("print something to the DOM");
```
You can define a function in function() and follow that statement up with return to create a reaction for the variables within functions parameters.


- Arrow functions

```
let a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

let a2 = a.map(function(s) { return s.length; });

console.log(a2); // logs [8, 6, 7, 9]

let a3 = a.map(s => s.length);

console.log(a3); // logs [8, 6, 7, 9]
```

- Data Structures:

```
// An array with 4 items
let myArray = [ "item1", "item2", "item3", "item4" ];

// retrieve the item at index 0
console.log( myArray[0] );
// -> returns "item1"

// retrieve the item at the end
console.log( myArray[myArray.length - 1] );
// -> returns "item4"

// add a new item
myArray.push( "new item" );
// retrieve the new item
console.log( myArray[myArray.length - 1] );
// -> returns "new item"
```
- Where item 1-4 are, you could also inout variables such as a = 2 or key1: 2 to input into later Functions


- Higher Order functions


#### Process
1. Problem one is no where near the hole and for some reason is the problem that I REALLY can't figure out
2. Throw me into the minimum equation however and I got that one figured out in about 5 minutes (not quite sure how all of that works out)
3. Counting... 
