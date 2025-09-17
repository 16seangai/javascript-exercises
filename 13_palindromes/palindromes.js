const palindromes = function (string) {
    string = string.replace(/[^a-zA-Z0-9]/g, '');
    for (let i = 0, j = string.length - 1; i < j; i++, j--) {
        if (string[i].toLowerCase() !== string[j].toLowerCase()) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
