const removeFromArray = function(arr, ...values) { 
    for (value of values) {
        let index = arr.indexOf(value)
        if (index < 0) continue
        arr.splice(index, 1)
    }
    return arr

    // more elegant solution: 
    // var removeFromArray = function(...args) {
    //   const array = args[0]
    //   return array.filter(val => !args.includes(val))
    // }
};

// Do not edit below this line
module.exports = removeFromArray;