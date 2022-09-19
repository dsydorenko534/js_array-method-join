'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let txt = '';

    if (this.length === 0) {
      return txt;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        txt += this[i];
      }

      if (i < this.length - 1) {
        txt += separator;
      }
    }

    return txt;
  };
}

module.exports = applyCustomJoin;
