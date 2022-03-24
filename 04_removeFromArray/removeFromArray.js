const removeFromArray = function(arr, ...values) { 
    for (value of values) {
        let index = arr.indexOf(value)
        if (index < 0) continue
        arr.splice(index, 1)
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;