'use strict';

var assert = require('assert');
var should = require('should');

var lib = require('../js5/lib');

describe('MultiplyCheck', function() {
  describe('#constructor', function() {
    // requirements
    it('should create an object with full parameter list', function() {
      var mc = new lib.MultiplyCheck(3, 10, lib.operations.add);
      mc.should.not.be.empty;
      mc.should.have.properties({
        min: 3, max: 10, op: lib.operations.add
      });
    });
    it('should create an object with empty parameter list', function() {
      var mc = new lib.MultiplyCheck();
      mc.should.not.be.empty;
      mc.should.have.properties({
        min: 2, max: 9, op: lib.operations.mul
      });
    });
    it('should create an object with partial parameter list', function() {
      var mc = new lib.MultiplyCheck(5, 15);
      mc.should.not.be.empty;
      mc.should.have.properties({
        min: 5, max: 15, op: lib.operations.mul
      });
    });
    it('should initialize the operands and expected result', function() {
      var mc = new lib.MultiplyCheck();
      // default operation is 'multiply'
      mc.should.not.be.empty;
      mc.should.have.properties(['opd1', 'opd2', 'expected']);
      mc.expected.should.be.exactly(mc.opd1*mc.opd2);
    })
  });
  describe('#_gen', function() {
    it('should generate non-repeating pairs of numbers', function() {
      var mc  = new lib.MultiplyCheck(), i;
      var curpair, // current pair
          pair_1,  // "pair-1" (previous pair)
          pair_2;  // "pair-2" (pre-previous pair)
      for (i=1, pair_1=pair_2=null; i<=100; i++) {
        curpair = '' + mc._gen() + '*' + mc._gen();
        if (curpair==pair_1)
          curpair.should.not.be.equal(pair_2);
        pair_2 = pair_1;
        pair_1 = curpair;
      }
    });
    it('should generate all numbers between 2 and 9', function() {
      var mc = new lib.MultiplyCheck();
      var reg = ['0','0','0','0','0','0','0','0','0','0']; // 0 to 9
      var i, n, s;
      for (i=1; i<=1000; i++) {
        n = mc._gen();
        n.should.be.above(1);
        n.should.be.below(10);
        reg[n] = '1';
      }
      s = reg.join('');
      s.should.be.exactly('0011111111');
    });
  });
});
