const fibonacci = function(num) {
    const seq = Number(num)
    let initial = [1, 1];
    let result = 1;
    if(seq <= 0) {
        return "OOPS";
    }
    if(seq >= 1 && seq <= 2) {
        return result;
    }

    for(let i = 3; i <= num; i++) {
        result = initial[0] + initial[1];
        initial.shift();
        initial[1] = result;
    }

    return result;
};

console.log(fibonacci("8"));

// Do not edit below this line
module.exports = fibonacci;
