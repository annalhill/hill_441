/*
HW-3 Starting to work with JavaScript Proper

Instructions: Please create solutions to the following problems.
You can include all of your answers in the single document.

In order to test your HW, I will simply copy and paste the
entirety of this document into a web console and check that
the correct output occurs.

 */

/**************************************************/
// PROBLEM 1 - "typeof Data Values"
//
// Write 3 statements that return prints the "type of" a value to the console.
// These 3 stataments should print out the 3 basic data types you learned about this week.
// (i.e. `number`, `string`, `boolean`)

console.log( typeof 10);
console.log( typeof "n");
// console.log( typeof 3 > 2);
// console.log( typeof 2 > 3);
console.log (typeof false || false);
console.log (typeof true || true);


/**************************************************/
// PROBLEM 2 - Using Loops to Create Pyramids
//
// Write a basic program that will print a pyramid to the web console.
// The pyramid should be made of the pound sign character (i.e. '#')
// The top of the pyramid should be 1 character wide
// The bottom of the pyramid should be 10 characters wide
//
// This should look like the following
/*

#
##
###
####
#####
######
#######
########
#########
##########

*/
// You program should utilize a control loop of somesort to solve this problem.

// I am not sure if I did this correctly. I used the variable names and figured out that I could utilize the .length function ot have the systme output numbers 1- 10 in th econsole by simple writing them out the number of times I would like them to show.
// I am more than happy to go back in and akter those to use numbers, strings and boolenas from chapter one if that was how I was suppsed to do this.

var one = "1";
var two = "22";
var three = "333";
var four = "4444";
var five = "55555";
var six = "666666";
var seven = "7777777";
var eight = "88888888";
var nine = "999999999";
var ten = "0000000000";

console.log(one.length);
console.log(two.length);
console.log(three.length);
console.log(four.length);
console.log(five.length);
console.log(six.length);
console.log(seven.length);
console.log(eight.length);
console.log(nine.length);
console.log(ten.length);


// This is another version of the Pyramid

var a = "2";
//var b = "5";

console.log(a - 1);
console.log(a);
console.log(3);
console.log(a * 2);
console.log(a * a + 1);
console.log(a * a + 2);
console.log(a * a + 3);
console.log(a * a) + (a * a);
console.log(a * 4 + 1);
console.log(a * 5);


/**************************************************/
// PROBLEM 2 - FizzBuzz
//
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// For numbers that are divisible by both 3 and 5, the program should print out "FizzBuzz"
// (Your program should still print "Fizz" or "Buzz" for numbers divisible by only one of those).
//
// Your program should output something like the following;
/*
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

-> etc....

*/








/**************************************************/
// SUBMISSION
//
// When you have finished with this weeks homework, please write a readme response to the week. You should then add this directory into your git repo, sync it, and provide a link to the repo directory (1 link only), to the HW-3 Submission Forum via Moodle.
/**************************************************/
