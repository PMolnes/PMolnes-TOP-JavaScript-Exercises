const sumAll = function(start, limit) {
    if (typeof(start) !== "number" || typeof(limit) !== "number") {
        return "ERROR";
    }
    if (start < 0 || limit < 0) {
        return "ERROR";
    } else {
        let sumAll = 0;
        let a = start;
        let b = limit;
        if (a > b) {
            let temp;
            temp = a;
            a = b;
            b = temp;
        }
        for (i = a; i <= b; i++) {
            sumAll += i;
        }
        return sumAll;
    }
};

// Do not edit below this line
module.exports = sumAll;
