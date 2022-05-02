const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let iValue;
  let mValue;
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    iValue = arr[i];

    if (iValue === -1) {
      continue;
    }

    let m = i - 1;
    let b = 0;
    mValue = arr[m];

    while(m >= 0) {
      if (arr[m] === -1) {
        b++;
        m--;
        continue;
      }

      if (arr[m] <= iValue) {
        break;
      }

      if (arr[m] > iValue) {
        arr[m + b + 1] = arr[m];
        arr[m] = iValue;
      }

      b = 0;
      m--;
    }
  }

  return arr;
}

module.exports = {
  sortByHeight
};
