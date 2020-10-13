"use strict";

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (i) {
  for (var j = 1; j < numbers.length + 1; j++) {
    console.log("".concat(i, " X ").concat(j, " = ").concat(i * j));
  }
});