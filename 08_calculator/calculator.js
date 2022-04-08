const add = function(...numbers) {
	let result = [...numbers].reduce((total, num) => total + num, 0)
  return result
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numbers) {
	return numbers.reduce((total, num) => total + num, 0)
};

const multiply = function(numbers) {
	return numbers.reduce((total, num) => total * num, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
	function f(n) {
		return n>1 && f(n-1)*n || 1
	}
	return f(num)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
