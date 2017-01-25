'use strict';

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var chainingResult = integers
.sort(function(a, b) {return a - b})
.reverse()
.filter(function(num){return num < 19})
.map(function(num){return (num * 1.5) - 1})
.reduce(function(prev, curr){return prev + curr});

console.log('chainingResult', chainingResult);
