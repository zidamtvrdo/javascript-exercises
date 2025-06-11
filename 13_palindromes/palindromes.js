const palindromes = function (string) {

    const checkString = string
                        .toLowerCase()
                        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s+]/g,"");

    const reversedString = string
                            .toLowerCase()
                            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s+]/g,"")
                            .split('')
                            .reverse()
                            .join('');

    return checkString === reversedString; 
};

// Do not edit below this line
module.exports = palindromes;
