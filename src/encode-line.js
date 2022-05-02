const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (typeof str !== 'string') {
    return '0';
  }

  const arr = str.split('');
  const length = arr.length;
  let i = 0;
  let c = 1;

  for(let p = 1; p <= length; p++) {
    if(arr[p] === undefined || arr[i] !== arr[p]) {
      i++;
      const cStr = (c === 1) ? '' : c.toString();
      arr[i - 1] = cStr + arr[p - 1];
      arr[i] = arr[p];
      c = 1;
    } else {
      c++;
    }
  }

  arr.splice(i);
  return arr.join('');
}

module.exports = {
  encodeLine
};
