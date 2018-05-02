body.style.background = "rgb(0)";

let body = document.body;
body.innerText = "";

let e = document.createElement("div");
let e1 = document.createElement("h1");
let e2 = document.createElement("h2");
let e3 = document.createElement("p");


e1.innerText = "Coffee Talk";
e2.innerText = "This is an infographic adventure to show you just how many coffee shop options are in Missoula for you!"
e3.innerText = "Click on the button in reference to the dots and learn more!"

e5.innerText = "Check out more of my work here!"


e.setAttribute("style", "text-align: center");
e1.setAttribute("style","padding:0.5em; margin:0; font-family: american-typewriter; text-align:left; color:#939598");
e2.setAttribute("style","padding:0em; margin:0; font-weight: normal; font-family: american-typewriter; text-align:left; color:#185c55");
e3.setAttribute("style","padding:2em; margin:0; font-family: american-typewriter; text-align:left; color:#185c55");
// e4.setAttribute("style","padding:0em; margin:0; font-family: american-typewriter; text-align:left; color:#185c55");
e5.setAttribute("href", "http://www.annalouisehill.com");
e5.setAttribute("style", "font-family: american-typewriter; text-decoration: none; color:#fed8a6; border-style: outset");

var myPic = new Image(3306 × 3306); // Original Dimensions: 3306 x 3306
myPic.src = "images/Coffee_Talk_Image_Numbers.jpeg"

myPic.setAttribute("style", "padding:0em; margin:100px");

e.appendChild(e1);
e.appendChild(e2);
e.appendChild(e3);
e.appendChild(e4);
e.appendChild(myPic);

e.appendChild(e5);

body.appendChild(e);
