const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const stat = {};
  const length = domains.length;

  if (length === 0) {
    return stat;
  }

  for (let i = 0; i < length; i++) {
    let arr = domains[i].split('.');
    let key = '';

    for (let a = arr.length - 1; a >= 0; a--) {
      key += '.' + arr[a];
      stat[key] = (key in stat) ? stat[key] + 1 : 1;
    }
  }

  return stat;
}

module.exports = {
  getDNSStats
};
