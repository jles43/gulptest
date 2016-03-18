'use strict';

const lib = require('./lib');
let mc = new lib.MultiplyCheck(2, 9, lib.operations.mul);
console.log('1: ', mc);
mc.roll();
console.log('2: ', mc);
