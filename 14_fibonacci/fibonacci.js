const fibonacci = function(n) {
    const fibList = [0, 1];
    n = Number(n);
    if (n < 0 || isNaN(n)) {
        return 'OOPS'
    } 
    for (let i = 1; i < n; i++) {
        fibList.push(fibList[i] + fibList[i - 1]);
    }
    return fibList[n]
};
// Do not edit below this line
module.exports = fibonacci;
