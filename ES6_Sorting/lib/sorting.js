"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
first es6 test
just some basic sorting algorithm
*/

//test data
var TEST_DATA = [13, 3, 9, 55, 213, 34, 8, 1];

//Bubble Sort

var Bubble = function () {
  function Bubble(arr) {
    _classCallCheck(this, Bubble);

    this.arr = arr;
    this.length = arr.length;
  }

  _createClass(Bubble, [{
    key: "swap",
    value: function swap(a, b) {
      var temp = this.arr[a];
      this.arr[a] = this.arr[b];
      this.arr[b] = temp;
    }
  }, {
    key: "sort",
    value: function sort() {
      for (var i = 0; i < this.length - 1; i++) {
        for (var j = 0; j < this.length - 1 - i; j++) {
          if (this.arr[j] > this.arr[j + 1]) {
            this.swap(j, j + 1);
          }
        }
      }
    }
  }, {
    key: "log",
    value: function log() {
      console.log(this.arr);
    }
  }]);

  return Bubble;
}();

var bubble = new Bubble(TEST_DATA);

bubble.log();
bubble.sort();
bubble.log();