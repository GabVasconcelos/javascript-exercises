const repeatString = function(str, num=1) {
    let ret = ""
    for (let i=1; i<=num; i++) {
        ret += str
    }
    return num < 0 && "ERROR" || ret 
};

// Do not edit below this line
module.exports = repeatString;
