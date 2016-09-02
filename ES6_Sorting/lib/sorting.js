"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
first es6 test
just some basic sorting algorithm
*/

//test data
var TEST_DATA = [13, 3, 9, 55, 213, 34, 8, 1];

//Super Sort

var Sort = function () {
  function Sort(arr) {
    _classCallCheck(this, Sort);

    this.arr = arr;
    this.length = arr.length;
  }

  _createClass(Sort, [{
    key: "swap",
    value: function swap(a, b) {
      var temp = this.arr[a];
      this.arr[a] = this.arr[b];
      this.arr[b] = temp;
    }
  }, {
    key: "log",
    value: function log() {
      console.log(this.arr);
    }
  }]);

  return Sort;
}();

//Bubble Sort


var Bubble = function (_Sort) {
  _inherits(Bubble, _Sort);

  function Bubble(arr) {
    _classCallCheck(this, Bubble);

    return _possibleConstructorReturn(this, (Bubble.__proto__ || Object.getPrototypeOf(Bubble)).call(this, arr));
  }

  _createClass(Bubble, [{
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
  }]);

  return Bubble;
}(Sort);

var bubble = new Bubble(TEST_DATA);

bubble.log();
bubble.sort();
bubble.log();