const add = function(a, b) {
	return(a + b);
};

const subtract = function(a, b) {
	return(a - b);
};

const sum = function(numbers) {
	const result =  numbers.reduce((end, number) => end + number, 0)

  return result;
};

const multiply = function(a, b) {
  return(a * b);
};

const power = function(a, b) {
	return(Math.pow(a, b));
};

const factorial = function(num) {
  if(num === 0) {
    return 1;
  }
  let result = 1;
	for(let i = num; i > 0; i--) {
    result *= i;
  }

  return result;
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
