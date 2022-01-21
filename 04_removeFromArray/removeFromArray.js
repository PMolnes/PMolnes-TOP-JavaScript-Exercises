const removeFromArray = function(array, numberToRemove) {
    
    // go through original array one by one.
    // check if numbersToRemove includes current value.
    // if it doesn't, add current value in original array
    // to the new array
    let numbersToRemove = Array.from(arguments).slice(1);
    let newArray = [];

    for (i = 0; i < array.length; i++) {
        if (!numbersToRemove.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}




// Do not edit below this line
module.exports = removeFromArray;
