const sumAll = function(...args) {
    args.sort()
    let result = 0
    let start = args[0]
    let end = args[1]
    
    if (typeof start != "number" || typeof end != "number") return "ERROR"
    if (start < 0 || end < 0) return "ERROR"

    for (let i = start; i<=end; i++) {
        result += i
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;
