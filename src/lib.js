/*global module */
'use strict';

// enum for operations
const operations = {
  add: '+',
  div: '/',
  mul: '*',
  sub: '-'
};

class MultiplyCheck {
  constructor(min, max, op) {
    this.min = min||2;
    this.max = max||9;
    this.op = op||operations.mul;
    this.roll();
  }
  // generates a number between ´this.min´ and ´this.max´
  _gen() {
    return Math.floor(Math.random()*(this.max-this.min))+this.min;
  }
  // calculates the result of operation ´this.op´ for parameters a and b
  _calc(a, b) {
    if (this.op===operations.add) return a+b;
    else if (this.op===operations.div) return a/b;
    else if (this.op===operations.mul) return a*b;
    else if (this.op===operations.sub) return a-b;
    else throw Error('operation not defined');
  }
  // generates a pair of operands, and calculates the result to be expected
  roll() {
    this.opd1 = this._gen();
    this.opd2 = this._gen();
    this.expected = this._calc(this.opd1, this.opd2);
  }
}

module.exports = {
  MultiplyCheck: MultiplyCheck,
  operations: operations
};
