const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const skip = [];
  let isFirstRow = true;

  const colSums = matrix.reduce((acc, next, rowIdx) => {
    const partialColSum = acc.map((val, i) => {
      if (isFirstRow && val === 0) { skip.push(i); }
      if (next[i] === 0) { skip.push(i); return val; }
      else { return skip.includes(i) ? val : val + next[i]; }
    });
    isFirstRow = false;
    return partialColSum;
  });

  return colSums.reduce((a, b) => a + b);
}

module.exports = {
  getMatrixElementsSum
};
