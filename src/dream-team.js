const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  function isArray(value) {
    return {}.toString.call(value) === '[object Array]';
  }

  // if members is not an array, return false
  if (!isArray(members)) {
    return false;
  }

  const newArr = members.filter((item) => typeof item === 'string').sort((a, b) => {
    const nameA = a.toUpperCase().trim();
    const nameB = b.toUpperCase().trim();

    if (nameA < nameB) {
      return -1; // a before b (asc), a first
    }

    if (nameA > nameB) {
      return 1; // b before a (asc), b first
    }

    return 0; // no sorting, the order of a and b unchanged
  }).map((item) => item.toUpperCase().trim()[0]);

  return newArr.join('');
}

module.exports = {
  createDreamTeam
};
