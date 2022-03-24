const reverseString = function(str) {
    let characters = str.split("")
    let returning = ""
    for (chr of characters) {
        returning = chr + returning
    }
    return returning
};

// Do not edit below this line
module.exports = reverseString;
