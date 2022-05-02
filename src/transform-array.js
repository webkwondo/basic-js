const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform(arr) {

  function isArray(value) {
    return {}.toString.call(value) === '[object Array]';
  }

  // if is not array throw Error
  if (!isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let newArr = [];
  const length = arr.length;

  if (length === 0) {
    return newArr;
  }

  const controls = {
    '--discard-next': [],
    '--discard-prev': [],
    '--double-next': [],
    '--double-prev': [],
    fill(dir, index) {

      if (!(dir in this)) {
        return false;
      }

      if (dir === '--discard-next' ||
          dir === '--double-next') {
        this[dir].push(index + 1);
      }

      if (dir === '--discard-prev' ||
          dir === '--double-prev') {
        this[dir].push(index - 1);
      }

      return true;
    },
    transform(array) {
      const length = array.length;
      const disnArr = this['--discard-next'];
      const dispArr = this['--discard-prev'];
      const dblnArr = this['--double-next'];
      const dblpArr = this['--double-prev'];

      disnArr.forEach((arrIndex) => {
        if (arrIndex < length) {
          array[arrIndex] = undefined;
        }
        array[arrIndex - 1] = undefined;
      });

      dispArr.forEach((arrIndex) => {
        if (arrIndex >= 0 && !(disnArr.includes(arrIndex))
            && !(dblnArr.includes(arrIndex))) {
          array[arrIndex] = undefined;
        }
        array[arrIndex + 1] = undefined;
      });

      dblnArr.forEach((arrIndex) => {
        if (arrIndex < length && !(dispArr.includes(arrIndex))) {
          array[arrIndex - 1] = array[arrIndex];
        } else {
          array[arrIndex - 1] = undefined;
        }
      });

      dblpArr.forEach((arrIndex) => {
        if (arrIndex >= 0 && !(disnArr.includes(arrIndex))) {
          array[arrIndex + 1] = array[arrIndex];
        } else {
          array[arrIndex + 1] = undefined;
        }
      });

      return array.filter((i) => i);
    }
  };

  for (let i = 0; i < length; i++) {
    controls.fill(arr[i], i);
    newArr.push(arr[i]);
  }

  newArr = controls.transform(newArr);

  return newArr;
}

module.exports = {
  transform
};
