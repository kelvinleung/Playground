/*
first es6 test
just some basic sorting algorithm
*/

"use strict";

//test data

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TEST_DATA = [13, 3, 9, 55, 213, 34, 8, 1];

//Super Sort

var Sort = function () {
  function Sort(arr) {
    _classCallCheck(this, Sort);

    console.log("here comes the arr:", arr);
    this.arr = arr.slice(0); //bug fixed!!!
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

    console.log("bubble begin:", arr);
    return _possibleConstructorReturn(this, (Bubble.__proto__ || Object.getPrototypeOf(Bubble)).call(this, arr));
  }

  _createClass(Bubble, [{
    key: "sort",
    value: function sort() {
      for (var i = this.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
          if (this.arr[j] > this.arr[j + 1]) {
            this.swap(j, j + 1);
          }
        }
      }
    }
  }]);

  return Bubble;
}(Sort);

//Selection Sort


var Selection = function (_Sort2) {
  _inherits(Selection, _Sort2);

  function Selection(arr) {
    _classCallCheck(this, Selection);

    console.log("selection begin:", arr);
    return _possibleConstructorReturn(this, (Selection.__proto__ || Object.getPrototypeOf(Selection)).call(this, arr));
  }

  _createClass(Selection, [{
    key: "sort",
    value: function sort() {
      for (var i = 0; i < this.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < this.length; j++) {
          if (this.arr[min] > this.arr[j]) {
            min = j;
          }
        }
        this.swap(min, i);
      }
    }
  }]);

  return Selection;
}(Sort);

//begin testing

var bubble = new Bubble(TEST_DATA);
bubble.log();
bubble.sort();
bubble.log();

var selection = new Selection(TEST_DATA);
selection.log();
selection.sort();
selection.log();