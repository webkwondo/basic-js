const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  isArray(value) {
    return {}.toString.call(value) === '[object Array]';
  }

  calculateDepth(arr) {
    let depth = 0;

    if (this.isArray(arr)) {
      const length = arr.length;
      const innerDepths = [0];
      depth++;

      for (let i = 0; i < length; i++) {
        innerDepths.push(this.calculateDepth(arr[i]));
      }

      return depth + Math.max(...innerDepths);
    }

    return 0;
  }
}

module.exports = {
  DepthCalculator
};
