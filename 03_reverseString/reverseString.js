const reverseString = function(str) {
    const splitStr = str.split("");
    const reversedArray = splitStr.reverse();
    return reversedArray.join(""); 
};

// Do not edit below this line
module.exports = reverseString;
