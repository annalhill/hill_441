/*
HOMEWORK 6

For this assignment, you are to develop a simple webpage that includes;
- One or a few headings.
- A couple paragraph elements.
- An image or two.
- At least one link.

Furthermore, this page should “look modern”; meaning it should include styling beyond the default browser styling. However, it does not need to fully follow RWD principles.

To do this, you will utilize the DOM API and Selector API.

You are not allowed to alter the HTML file. You are also not allowed to utilize a general CSS page. Everything must be done through the JavaScript file. In the JS file, you should;
- create new nodes,
- attach them to parent nodes (and the document node),
- add their innerText (if appropriate)
- and finally style them.

You are not allowed to use either;
-` document.write();
- element.innerHTML = "";

Instead, you should use the appropriate methods, as mentioned in the readings.

To begin, you should select the body element from the DOM, then remove its existing child nodes. You may then begin to create your web page.

*/


let body = document.body;
body.innerText = "";
body.style.background = "rgb(230, 230, 250)";

let e = document.createElement("div");
let e1 = document.createElement("h1");
let e2 = document.createElement("h2");
let e3 = document.createElement("p");
let e4 = document.createElement("p");
let e5 = document.createElement("p");

e1.innerText = "Anna Louise Hill";
e2.innerText = "Homework 6 Coming in VERY late, I am really sorry"
e3.innerText = "I am not a fan of this class but I am sure it will be useful later in on my life of coding and web design"
e4.innerText = "Photography is a passion of mine although I am not very good at it.";
e5.innerText = "Take a look at the gallery on my portfolio website!";

e.setAttribute("style", "text-align: center");
e1.setAttribute("style","padding:0em; margin:0; font-family: american-typewriter; text-align:left; color:#939598");
e2.setAttribute("style","padding:0em; margin:0; font-weight: normal; font-family: american-typewriter; text-align:left; color:#185c55");
e3.setAttribute("style","padding:0em; margin:0; font-family: american-typewriter; text-align:left; color:#185c55");
e4.setAttribute("style","padding:0em; margin:0; font-family: american-typewriter; text-align:left; color:#185c55");

e5.setAttribute("style", "font-family: american-typewriter; text-decoration: none; color:#185c55; border-style: outset");
e5.setAttribute("href", "http://www.annalouisehill.com");

var myPic = new Image(1424, 2131); // Original Dimensions: 2848 × 4272
myPic.src = "./images/myfamily.jpg"

myPic.setAttribute("style", "padding:0em; margin:100px");

e.appendChild(e1);
e.appendChild(e2);
e.appendChild(e3);
e.appendChild(e4);
e.appendChild(e5);
e.appendChild(myPic);

body.appendChild(e);
