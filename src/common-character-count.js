const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') {
    return 0;
  }

  function fillFcObj(str) {
    const obj = {};
    for (const key of str) {
      obj[key] = (obj[key]) ? (obj[key] + 1) : 1;
    }
    return obj;
  }

  const fc1 = fillFcObj(s1);
  const fc2 = fillFcObj(s2);
  let counter = 0;

  for (const key in fc1) {
    if (key in fc2) {
      const minVal = (fc1[key] < fc2[key]) ? fc1[key] : fc2[key];
      counter += minVal;
    }
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
