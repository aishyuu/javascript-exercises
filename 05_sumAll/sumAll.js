const sumAll = function(num1, num2) {
    if(!(typeof(num1) === "number") || !(typeof(num2) === "number")) {
        return "ERROR"
    }

    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    let result = 0;

    for(let i = min; i <= max; i++) {
        result += i;
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;
