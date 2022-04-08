const fibonacci = function(position) {
    let fib = [0, 0, 1] // what is this
    position = Number(position)
    if (position<0) return "OOPS"
    for (let i=1; i<=position+1; i++) {
        fib[i] = fib[i] || ((fib[i-1] || 0) + (fib[i-2] || 0))
    }
    return fib[position+1]
    // this is probably the worst algorithm i have ever done
};

// Do not edit below this line
module.exports = fibonacci;
