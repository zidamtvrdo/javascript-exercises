const sumAll = function(start, step) {
    if (start < 1 || start % 1 !== 0 || typeof (step) !== 'number') {
        return 'ERROR'
    } else {
        let result = 0;
        for (let i = step; i > 0; i--) {
            result += start;
            start += 1;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;


// 7, 4 -> 7 + 8 + 9 + 10