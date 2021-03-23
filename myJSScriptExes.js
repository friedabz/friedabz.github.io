// JavaScript source code
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
//ex-1
//let myVar = 'bob';
//alert('hello!' + myVar);

//ex2
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('Yay, I love chocolate ice cream!');
} else {
    alert('Awwww, but chocolate is my favorite...');
}



//shows result as an multiply exercise
let res;
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
res = multiply(4, 7);
alert(res);
res = multiply(20, 20);
alert(res);
res = multiply(0.5, 3);
alert(res);

//js - load onclick event 
//worked
document.querySelector('html').onclick = function () {
    alert('Ouch! Stop poking me!');
}



//js code for switching img by clicking
//didnt work- dont know why
let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}


// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}



let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}


myButton.onclick = function () {
    setUserName();
}