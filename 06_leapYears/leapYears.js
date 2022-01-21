const leapYears = function(year) {
    let isLeapYear = false;
    // leap years are divisible by four
    // if divisble by 100, must be divisible by 400
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 === 0) {
            isLeapYear = true;
        } else if (year % 100 !== 0) {
            isLeapYear = true;
        }
    }
    return isLeapYear;
};

leapYears(2200);

// Do not edit below this line
module.exports = leapYears;
