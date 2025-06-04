const repeatString = function(string, n) {
    let newString = '';
    if (n < 0) newString = 'ERROR';
    for (let i = 0; i < n; i++) {
        newString += string;
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
