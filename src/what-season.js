const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  // date = new Date(date.toString());

  // function isDate(obj) {
  //   // return obj instanceof Date && !isNaN(obj);
  //   return obj instanceof Date;
  // }

  // if (!isDate(date)) {
  //   throw new Error('Invalid date!');
  // }

  try {
    date.getTime();
  } catch (e) {
    throw new Error('Invalid date!');
  }

  const seasons = {
    0: 'winter',
    1: 'winter',
    11: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn'
  };

  let month = date.getMonth();
  let season = seasons[month];

  return season;
}

module.exports = {
  getSeason
};
