const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
 class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.direct = isDirect; // direct or reverse machine
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.dictIndex = {};
    this.dictLetter = {};

    this.mapAlphabet();
  }

  mapAlphabet() {
    const length = this.alphabet.length;

    for (let i = 0; i < length; i++) {
      this.dictIndex[i] = this.alphabet[i];
      this.dictLetter[this.alphabet[i]] = i;
    }
  }

  matchStr(bigStr, smallStr) {
    const length = bigStr.length;

    if (smallStr.length < length) {
      const times = Math.ceil(length / smallStr.length) - 1;

      for (let t = 0; t < times; t++) {
        smallStr += smallStr;
      }

      for (let m = 0; m < length; m++) {
        if (!(bigStr[m] in this.dictLetter)) {
          smallStr = smallStr.slice(0, m) + bigStr[m] + smallStr.slice(m);
        }
      }

    }

    return smallStr.slice(0, length);
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const length = message.length;
    let encrypted = [];
    message = message.toUpperCase();
    key = key.toUpperCase();

    key = this.matchStr(message, key);

    for (let i = 0; i < length; i++) {
      if (message[i] in this.dictLetter) {
        let number = (this.dictLetter[message[i]] + this.dictLetter[key[i]]) % this.alphabet.length;
        encrypted.push(this.dictIndex[number]);
      } else {
        encrypted.push(message[i]);
      }
    }

    return (this.direct) ? encrypted.join('') : encrypted.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const length = encryptedMessage.length;
    let decrypted = [];
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    key = this.matchStr(encryptedMessage, key);

    for (let i = 0; i < length; i++) {
      if (encryptedMessage[i] in this.dictLetter) {
        let number = (this.dictLetter[encryptedMessage[i]] - this.dictLetter[key[i]]);
        number = (number < 0) ? number + this.alphabet.length : number;
        decrypted.push(this.dictIndex[number]);
      } else {
        decrypted.push(encryptedMessage[i]);
      }
    }

    return (this.direct) ? decrypted.join('') : decrypted.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
