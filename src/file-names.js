const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  const arr = [];
  const length = names.length;

  if (length === 0) {
    return arr;
  }

  const counter = {};
  arr[0] = names[0];

  for (let i = 1; i < length; i++) {
    if (arr.includes(names[i])) {
      const key = names[i];
      counter[key] = (key in counter) ? counter[key] + 1 : 1;
      const k = counter[key];
      arr.push(names[i] + '(' + k + ')');
    } else {
      arr.push(names[i]);
    }
  }

  return arr;
}

module.exports = {
  renameFiles
};
