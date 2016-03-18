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
});
