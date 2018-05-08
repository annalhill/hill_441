// let body = document.body;
// let e = document.createElement("div");
// let e1 = document.createElement("h1");
// let e2= document.createElement('p');
// let e3 = document.createElement('p');
// let t1 = document.querySelector("Home");
// let t2 = document.querySelector("Coffee 1");
// let t3 = document.querySelector("Coffee 2");
// let t4 = document.querySelector("Coffee 3");
// let t5 = document.querySelector("Coffee 4");
// let c1 = document.querySelector('#B1');
// let c2 = document.querySelector('#B2');
// let c3 = document.querySelector('#B3');
// let c4 = document.querySelector('#B4');
// let div1 = document.querySelector(".store");
// let form1 = document.querySelector(".form");
//
// c1.addEventListener("click", showHideText);
// c2.addEventListener("click", showHideText2);
// c3.addEventListener("click", showHideText3);
// c4.addEventListener("click", showHideText4);
//
// function insertText() {
//   let textIn;
//   textIn = document.querySelector("#textIn1").value;
//
//   let textToAdd = document.createTextNode("Let's talk about coffee!");
//
//   let newP = document.createElement("P");
//
//   newP.appendChild(textToAdd);
//
//   let storage = document.querySelector("#store");
//
//   storage.appendChild(newP);
// }
//
// document.querySelector("#runButton").addEventListener('click', insertText);
//
// /*Functions*/
//
// function showHideText() {
//   if (textEl.hidden) {
//     c1.hidden = true;
//     c3.hidden = true;
//     t3.hidden = true;
//     t5.hidden = false;
//     t4.hidden = true;
//     c3.hidden = true;
//     c4.hidden = true;
//     t1.hidden = true;
//     form1.hidden = true;
//     div1.hidden = true;
//     t2.hidden = true;
//     c2.hidden = true;
//     e.hidden = true;
//
//     body.style.background = "rgb(255,255,255)";
//     alert("Coffee");
//
//   } else {
//
//     c3.hidden = true;
//     t1.hidden = true;
//     c4.hidden = true;
//     form1.hidden = false;
//     div1.hidden = false;
//     t3.hidden = true;
//     c2.hidden = false;
//     e.hidden = false;
//
//     body.style.background = "rgb(255,255,255)";
//     body.style.backgroundPosition = "center";
//
//   }
// }
//
// function showHideText2() {
//   if (textEl2.hidden) {
//
//     btEl4.innerText = "Benas! Beans! Beans!"
//
//     c2.hidden = true;
//     c3.hidden = false;
//     c4.hidden = false;
//     t2.hidden = false;
//     t5.hidden = true;
//     form1.hidden = true;
//     div1.hidden = true;
//     t3.hidden = true;
//     t1.hidden = true;
//     c1.hidden = true;
//     e.hidden = true;
//
//     body.style.background = "url('images/.jpg')";
//
//   } else {
//     c2.innerText = "I just ate";
//     c2.hidden = false;
//     t2.hidden = true;
//     c4.hidden = true;
//     c3.hidden = true;
//     form1.hidden = true;
//     div1.hidden = true;
//     t3.hidden = false;
//     c1.hidden = true;
//     e.hidden = true;
//     body.style.background = "url('./images/.jpg')";
//     body.style.backgroundPosition = "center";
//   }
// }
//
// function showHideText3() {
//   if (t1.hidden) {
//
//
//     t5.hidden = true;
//     t4.hidden = false;
//     c3.hidden = true;
//     c1.hidden = true;
//     c2.hidden = true;
//     t1.hidden = true;
//     form1.hidden = true;
//     div1.hidden = true;
//     t3.hidden = true;
//     t2.hidden = true;
//     c4.hidden = true;
//     e.hidden = true;
//
//
//     body.style.background = "url('./images/Nymphs.jpg')";
//     alert("I scream for coffee, you scream for coffee, we all scream for coffee!");
//
//   } else {
//  c3.innerText = "You don't deserve another cup";
//
//  t4.hidden = true;
//  c1.hidden = true;
//  c2.hidden = true;
//  t1.hidden = true;
//  form1.hidden = true;
//  div1.hidden = true;
//  text3.hidden = true;
//  c4.hidden = true;
//  e.hidden = true;
//
//  body.style.background = "url('./images/Ring.jpg')";
// }
// }
//
// function showHideText4() {
// if (t1.hidden) {
//
//  c3.hidden = true;
//  c.hidden = true;
//  c4.hidden = true
//  t1.hidden = false;
//  form1.hidden = true;
//  div1.hidden = true;
//  t3.hidden = false;
//  t2.hidden = true;
//  t5.hidden = true;
//  c3.hidden = true;
//  e.hidden = true;
//
//  body.style.background = "url('./images/Siren.jpg')";
//  alert("Many coffee shops burn their drip coffee");
//
//
// } else {
//  c4.innerText = "Don't drink burnt coffee, order cold brew though!";
//
//  c2.hidden = true;
//  c4.hidden = true;
//  c3.hidden = true;
//  c1.hidden = true;
//  t1.hidden = true;
//  form1.hidden = true;
//  div1.hidden = true;
//  t3.hidden = true;
//  c3.hidden = true;
//  e.hidden = true;
//
//  body.style.background = "url('./images/Fruit.jpg')";
//  body.style.backgroundPosition = "center";
// }
// }
//
// /*Body Style*/
//
// body.style.padding = "0 em";
// body.style.margin = "0 em";
// body.style.background = "url('./images/Fruit.jpg')";
// body.style.backgroundPosition = "center";

// now we have variables
let body = document.body;
// body.innerText = "";
body.style.background = "rgb(255,255,255)";

let c = document.querySelectorAll('#b1');

placeNames = [
  "Rattlesnake Market and Cafe",
  "Black Cat Coffee Shop",
  "Florence Coffee Company",
  "The Break Espresso",
  "Black Coffee Roasting Company",
  "Liquid Planet",
  "City Brew Coffee",
  "Zootown Brew",
  "Market on Front",
  "Hunter Bay Coffee",
  "Drum Coffee",
  "Bernice's Bakery",
  "Clyde's Coffee",
  "Cafe Dolce",
  "Copper Mountain Coffee",
  "Florence Coffee Company",
  "Drum Coffee",
  "Starbucks",
  "The Loose Caboose",
  "City Brew Coffee",
  "Florence Coffee Company",

]

for(let eIdx = 0; eIdx < c.length; eIdx++){
  c[eIdx].addEventListener("click", ()=>{
    showHideText(placeNames[eIdx], eIdx+1)
  }
);
}

let text1 = document.querySelector(".extra-text-container");
let text2 = document.querySelector(".extra-text-container");
let text3 = document.querySelector(".extra-text-container");
let text4 = document.querySelector(".extra-text-container");
let text5 = document.querySelector(".extra-text-container");
let text6 = document.querySelector(".extra-text-container");
let text7 = document.querySelector(".extra-text-container");
let text8 = document.querySelector(".extra-text-container");
let text9 = document.querySelector(".extra-text-container");
let text10 = document.querySelector(".extra-text-container");
let text11 = document.querySelector(".extra-text-container");
let text12 = document.querySelector(".extra-text-container");
let text13 = document.querySelector(".extra-text-container");
let text14 = document.querySelector(".extra-text-container");
let text15 = document.querySelector(".extra-text-container");
let text16 = document.querySelector(".extra-text-container");
let text17 = document.querySelector(".extra-text-container");
let text18 = document.querySelector(".extra-text-container");
let text19 = document.querySelector(".extra-text-container");
let text20 = document.querySelector(".extra-text-container");
let text21 = document.querySelector(".extra-text-container");

// let e = document.createElement("div");
// let e1 = document.createElement("h1");
// let e2= document.createElement('p');
// let e3 = document.createElement('p');
// let t1 = document.querySelector("Home");
// let t2 = document.querySelector("Coffee 1");
// let t3 = document.querySelector("Coffee 2");
// let t4 = document.querySelector("Coffee 3");
// let t5 = document.querySelector("Coffee 4");
// let c1 = document.querySelector('#B1');
// let c2 = document.querySelector('#B2');
// let c3 = document.querySelector('#B3');
// let c4 = document.querySelector('#B4');
// let div1 = document.querySelector(".store");
// let form1 = document.querySelector(".form");

let e = document.createElement("div");
let e1 = document.createElement("h1");
let e2 = document.createElement("h2");
let e3 = document.createElement("p");
let e4 = document.createElement("p");
let e5 = document.createElement("p");

// Header text
e1.innerText = "Coffee Talk";
e2.innerText = "This is an infographic adventure to show you just how many coffee shop options are in Missoula for you!";
e3.innerText = "Click on the button in reference to the dots and learn more!";
e5.innerText = "Check out more of my work here!";

e.setAttribute("style", "text-align: center");
e1.setAttribute("style", "padding:0em; margin:0; font-weight: bold; font-family: american-typewriter; text-align:center; color:#939598");
e2.setAttribute("style", "padding:0em; margin:0; font-weight: normal; font-family: american-typewriter; text-align:center; color:#185c55");
e3.setAttribute("style", "padding:0em; margin:0; font-family: american-typewriter; text-align:center; color:#185c55");
// e4.setAttribute("style","padding:0em; margin:0; font-family: american-typewriter; text-align:left; color:#185c55");
e5.setAttribute("href", "http://www.annalouisehill.com");
e5.setAttribute("style", "font-family: american-typewriter; text-decoration: none; color:#fed8a6; border-style: outset");

var myPic1 = new Image(1630, 200); // Original Dimensions: 3306 x 3306
myPic1.src = "./images/BP.jpg"

var myPic2 = new Image(1102, 1102); // Original Dimensions: 3306 x 3306
myPic2.src = "./images/Coffee_Talk_Image_Numbers.jpg"

myPic1.setAttribute("style", "padding:0em; margin:0px");
myPic2.setAttribute("style", "padding:0em; margin:100px");

function changeBackground() {
  // change color
  let e = document.querySelector('body');
  // mocha
  e.style.background = 'rgb(0,0,0)';

  // popup
  alert("Lets change to a dark roast!");
}

setTimeout(changeBackground, 10000);
//
// function showHideText() {
//   if (confirm("rattlesnake Market and Cafe")) {
//     c.innerText = "Rattlesnake Market and Cafe";
//     text1.hidden = false;
//   } else {
//     c.innerText = "1";
//     text1.hidden = true;
//   }
// }
//
// function showHideText() {
//   if (confirm("Black Cat bake Shop")) {
//     c.innerText = "Black Cat Bake Shop";
//     text2.hidden = false;
//   } else {
//     c.innerText = "2";
//     text2.hidden = true;
//   }
// }
//
// function showHideText() {
//   if (confirm("Florence Coffee Company")) {
//     c.innerText = "Florence Coffee Company";
//     text3.hidden = false;
//   } else {
//     c.innerText = "3";
//     text3.hidden = true;
//   }
// }
//
// function showHideText() {
//   if (confirm("The Break Espresso")) {
//     c.innerText = "The Break Espresso";
//     text4.hidden = false;
//   } else {
//     c.innerText = "4";
//     text4.hidden = true;
//   }
// }
//
// function showHideText() {
//   if (confirm("Black Coffee Roasting Company")) {
//     c.innerText = "Black Coffee Roasting Company";
//     text5.hidden = false;
//   } else {
//     c.innerText = "5";
//     text5.hidden = true;
//   }
// }
//
// function showHideText() {
//   if (confirm("City brew Coffee")) {
//     c.innerText = "City Brew Coffee";
//     text6.hidden = false;
//   } else {
//     c.innerText = "6";
//     text6.hidden = true;
//   }
// }
//
// function showHideText() {
//   if (confirm("Liquid Planet")) {
//     c.innerText = "Liquid Planet";
//     text7.hidden = false;
//   } else {
//     c.innerText = "7";
//     text7.hidden = true;
//   }
// }
//
// function showHideText() {
//   if (confirm("Zootown Brew")) {
//     c.innerText = "Zootown Brew";
//     text8.hidden = false;
//   } else {
//     c.innerText = "8";
//     text8.hidden = true;
//   }
// }


function showHideText(text, num) {
  if (confirm(text)) {
    c[num-1].innerText = text;
    text8.hidden = false;
  } else {
    c[num-1].innerText = num;
    text8.hidden = true;
  }
}


// }
// function popup9() {
//     alert('The Market on Front');
// }
// function popup10() {
//     alert('Drum Coffee');
// }
// function popup11() {
//     alert('Hunter Bay Coffee');
// }
// function popup12() {
//     alert('Bernices Bakery');
// }
// function popup13() {
//     alert('Clyde Coffee');
// }
// function popup14() {
//     alert('Cafe Dolce');
// }
// function popup15() {
//     alert('Copper Mountain Coffee');
// }
// function popup16() {
//     alert('Florence Coffee Company');
// }
// function popup17() {
//     alert('Drum Coffee');
// }
// function popup18() {
//     alert('Starbucks');
// }
// function popup19() {
//     alert('The Loose Caboose');
// }
// function popup20() {
//     alert('City Brew Coffee');
// }
// function popup21() {
//     alert('Florence Coffee Company');
// }

e.appendChild(e1);
e.appendChild(e2);
e.appendChild(myPic1);
e.appendChild(e3);
e.appendChild(myPic2);
e.appendChild(text1);
e.appendChild(text2);
e.appendChild(text3);
e.appendChild(text4);
e.appendChild(text5);
e.appendChild(text6);
e.appendChild(text7);
e.appendChild(text8);
e.appendChild(text9);
e.appendChild(text10);
e.appendChild(text11);
e.appendChild(text12);
e.appendChild(text13);
e.appendChild(text14);
e.appendChild(text15);
e.appendChild(text16);
e.appendChild(text17);
e.appendChild(text18);
e.appendChild(text19);
e.appendChild(text20);
e.appendChild(text21);
e.appendChild(e5);


body.insertBefore(e, c[0]);
// body.appendChild(e);
