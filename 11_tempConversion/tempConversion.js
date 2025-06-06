const convertToFahrenheit = function(temp) {
  const result = ((9 / 5) * temp + 32);
  if (result % 1 !== 0) {
    return Number(result.toFixed(1));
  } else {
    return result;
  }
};

const convertToCelsius = function(temp) {
  const result = ((5 / 9) * (temp - 32));
  if (result % 1 !== 0){
    return Number(result.toFixed(1));
  } else {
    return result;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
