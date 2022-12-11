/* https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/ */

const prompt = require("prompt-sync")();

let str = prompt("enter a string to reverse - ");

let revStr = "";

for(i = (str.length-1); i >= 0; i--){
    revStr = revStr + str[i];
}

console.log(revStr);

let newArray = str.split("");
let revArray = newArray.reverse();
let newStr = revArray.join("");
console.log(newStr);


let newStr2 = reverseStringRecursion(str);

function reverseStringRecursion(str){
    if (str === "")
        return ""
    else
        return reverseStringRecursion(str.substr(1)) + str.charAt(0);
}

console.log(newStr2);

let newStr3 = recFn(str);

function recFn(str){
    if (str === "")
        return ""
    else
        return recFn(str.substr(1)) + str.charAt(0);
}

console.log(newStr3);
