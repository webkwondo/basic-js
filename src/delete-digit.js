const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // if typeof n is not a number ?
  // if number is negative ?
  // if number is a float ?

  function getNewNumStr(num, isFirstIteration = true) {
    const str = num.toString();
    const length = str.length;

    if (length < 2) {
      return isFirstIteration ? str : '';
    }

    const firstDigit = parseInt(str[0], 10);
    const secondDigit = parseInt(str[1], 10);
    let newNumStr;

    if (firstDigit < secondDigit) {
      newNumStr = str.slice(1);
      return newNumStr;
    }

    // if (firstDigit >= secondDigit)
    newNumStr = (firstDigit + '') + getNewNumStr(str.slice(1), false);
    return newNumStr;
  }

  return parseInt(getNewNumStr(n), 10);
}

module.exports = {
  deleteDigit
};
