"use strict";
function addandShow(n1, n2, showResult, result) {
    if (showResult) {
        console.log(result + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
const num1 = 10;
const num2 = 20;
const showResult = true;
const result = "Result is : ";
addandShow(num1, num2, showResult, result);
