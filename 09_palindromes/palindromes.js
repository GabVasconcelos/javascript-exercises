const palindromes = function (word) {
    const letters = word.replace(/[^a-zA-Z]+/g, "").split("")
                                // ok ^
    return letters.every((letter, index) => letters[letters.length-1-index].toLowerCase() == letter.toLowerCase())
};

// Do not edit below this line
module.exports = palindromes;
