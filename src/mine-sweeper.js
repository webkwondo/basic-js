const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  if(!Array.isArray(matrix) || matrix.some((el) => !Array.isArray(el))) {
    throw new Error('Matrix should be an array of arrays');
  }

  const sumMines = (cellIdx, rowIdx, rowArr, matrixArr) => {
    const prevCellIdx = cellIdx - 1;
    const nextCellIdx = cellIdx + 1;
    const aboveCellIdx = cellIdx; // rowIdx - 1
    const belowCellIdx = cellIdx; // rowIdx + 1
    const diagAbovePrevCellIdx = cellIdx - 1; // rowIdx - 1
    const diagAboveNextCellIdx = cellIdx + 1; // rowIdx - 1
    const diagBelowPrevCellIdx = cellIdx - 1; // rowIdx + 1
    const diagBelowNextCellIdx = cellIdx + 1; // rowIdx + 1

    const prevCellVal = prevCellIdx >= 0 ? rowArr[prevCellIdx] : false;
    const nextCellVal = nextCellIdx < rowArr.length ? rowArr[nextCellIdx] : false;
    const aboveCellVal = matrixArr[rowIdx - 1] ? matrixArr[rowIdx - 1][aboveCellIdx] : false;
    const belowCellVal = matrixArr[rowIdx + 1] ? matrixArr[rowIdx + 1][belowCellIdx] : false;
    const diagAbovePrevCellVal = matrixArr[rowIdx - 1] ? matrixArr[rowIdx - 1][diagAbovePrevCellIdx] : false;
    const diagAboveNextCellVal = matrixArr[rowIdx - 1] ? matrixArr[rowIdx - 1][diagAboveNextCellIdx] : false;
    const diagBelowPrevCellVal = matrixArr[rowIdx + 1] ? matrixArr[rowIdx + 1][diagBelowPrevCellIdx] : false;
    const diagBelowNextCellVal = matrixArr[rowIdx + 1] ? matrixArr[rowIdx + 1][diagBelowNextCellIdx] : false;

    const sum = !!prevCellVal + !!nextCellVal + !!aboveCellVal + !!belowCellVal + !!diagAbovePrevCellVal + !!diagAboveNextCellVal + !!diagBelowPrevCellVal + !!diagBelowNextCellVal;

    return sum;
  };

  const numberMatrix = matrix.map((rowArr, rowIdx, marixArr) => {
    return rowArr.map((cellVal, cellIdx) => sumMines(cellIdx, rowIdx, rowArr, marixArr));
  });

  return numberMatrix;
}

module.exports = {
  minesweeper
};
