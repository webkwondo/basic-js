const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  const length = email.length;

  if (length === 0) {
    return '';
  }

  let splitted = email.split('@');

  return splitted[splitted.length - 1];
}

module.exports = {
  getEmailDomain
};
