const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    const stringified = String(value);
    if(value === undefined || stringified === '') this.chain.push('( )');
    this.chain.push('( ' + stringified + ' )');
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || !Number.isInteger(position)) { this.chain = []; throw new Error('You can\'t remove incorrect link!') };
    const index = position - 1;
    if(index < 0 || index >= this.chain.length) { this.chain = []; throw new Error('You can\'t remove incorrect link!') }
    else { this.chain.splice(index, 1); }
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
