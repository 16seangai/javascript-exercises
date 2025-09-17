const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) return 'ERROR';
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let n = end - start + 1;
    return n / 2 * (start + end);
};

// Do not edit below this line
module.exports = sumAll;
