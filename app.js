let myfirstObject = {
    myArray: ["Elishka", "Dan", "Ashley", "Connor", "Ben"]
}

console.log(myfirstObject.myArray.sort());


let mysecondObject = {
    myString: "My name is Ben",
}

console.log(mysecondObject.myString.split(''));


let myWord = "codenation";
let mynewWord = myWord.split("");
mynewWord.sort();
let shownewWord = mynewWord.join("");


console.log(shownewWord);


let myfullName = "Benjamin";
let myusualName = myfullName.slice(0, 3);

console.log(myusualName);


function myFruits() {
    let fruit1 = ["apple", "pear", "banana"];
    fruit1.push("watermelon");

    return fruit1;
}

console.log(myFruits())


let mylongestWord1 = "Hello Dan";
let splitWord1 = mylongestWord1.split(" ");


if(splitWord1[0].length > splitWord1[1].length) {
    console.log(splitWord1[0]);
} else {
    console.log(splitWord1[1]);
}

let mylongestWord2 = "Hello Benjamin";
let splitWord2 = mylongestWord2.split(" ");

if(splitWord2[0].length > splitWord2[1].length) {
    console.log(splitWord2[0]);
} else {
    console.log(splitWord2[1]);
}

// function calcAge(dob) {
//     let 
// }

// let add = (num1, num2) => {
//     return num1 + num2
// }

// let userDetails = os.userInfo().username;

// fs.appendFile('oh-hi.txt', `Hello ${userDetails}`, (err) => {
//     if (err) {
//         console.log('oops')
//     }
// })

module.exports = {
    myfirstObject,
    mysecondObject,
    myWord, 
    myfullName, 
    myFruits, 
}



const _ = require('lodash')

var array = [1, 2, 3];

_.reverse(array)

console.log(array)


var array2 = ['b', 'e', 'n', 's'];

_.pull(array2, 'e', 'n');
console.log(array2);