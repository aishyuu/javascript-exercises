const convertToCelsius = function(temp) {
  if(temp === 32) {
    return 0;
  }
  return(((temp - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(temp) {
  return(((temp * (9/5)) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
