//variable declaration
let varA = 5;//integer
let varB = 8;//integer
let varC = '';

console.log(varA + varB); //sum of varA and varB is 13
console.log("Hello, World!"); //prints to the console

function sum(varC){//if varC is has a value not equal to null, run execute function
  console.log("Hello Dave... it's been " + varA + " long years since you've graced me with your presence...");
};

//Used reference "https://www.codegrepper.com/code-examples/javascript/how+to+print+two+arrays+side+by+side+in+javascript" to see how to add two things side by side per the reading material
var array = ["1 -",2,3,4,5,6,7,8,9,10]
var brray = ["one","two","three","four","five","six","seven","eight","nine","ten"]


for( i = 0 ; i < array.length ; i++){
 console.log(array[i], brray[i])};//this was missing a closing curly brace and semi-colon.