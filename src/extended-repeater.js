const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') {
    str = str + '';
  }

  const repeatTimes = (!options.repeatTimes || options.repeatTimes < 0) ? (str.length ? 1 : 0) : options.repeatTimes;
  const separator = options.separator || '+';
  const addition = (options.addition && typeof options.addition !== 'string') ? options.addition + '' : ((options.addition === false || options.addition === null) ? options.addition + '' : (options.addition || ''));
  const additionRepeatTimes = options.additionRepeatTimes || (addition.length ? 1 : 0);
  const additionSeparator = options.additionSeparator || '|';
  let newStr = '';

  for (let i = 1; i <= repeatTimes; i++) {
    let ads = '';

    for (let a = 1; a <= additionRepeatTimes; a++) {
      ads += addition;

      if (a !== additionRepeatTimes) {
        ads += additionSeparator;
      }
    }

    newStr += str + ads;

    if (i !== repeatTimes) {
      newStr += separator;
    }
  }

  return newStr;
}

module.exports = {
  repeater
};
