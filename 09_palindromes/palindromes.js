const palindromes = function (str) {
    const noSpecialChars = str.replace(/[^a-zA-Z0-9 ]/g, '');
    const final = noSpecialChars.replace(/\s/g, '').toLowerCase();
    let reverse = "";
    for(let i = final.length-1; i >= 0; i--) {
        reverse += final[i];
    }

    return(final === reverse);
};

console.log(palindromes("Animal loots foliated detail of stool lamina."));

// Do not edit below this line
module.exports = palindromes;
