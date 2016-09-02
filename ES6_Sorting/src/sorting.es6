/*
first es6 test
just some basic sorting algorithm
*/

"use strict";

//test data
const TEST_DATA = [13, 3, 9, 55, 213, 34, 8, 1];

//Super Sort
class Sort {
  constructor(arr) {
    this.arr = arr;
    this.length = arr.length;
  }
  swap(a, b) {
    let temp = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = temp;
  }
  log() {
    console.log(this.arr);
  }
}

//Bubble Sort
class Bubble extends Sort {
  constructor(arr) {
    super(arr);
  }
  sort() {
    for(let i = this.length - 1; i >= 0; i--) {
      for(let j = 0; j < i; j++) {
        if(this.arr[j] > this.arr[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

//Selection Sort
class Selection extends Sort {
  constructor(arr) {
    super(arr);
  }
  sort() {
    for(let i = 0; i < this.length - 1; i++) {
      let min = i;
      for(let j = i + 1; j < this.length; j++) {
        if(this.arr[min] > this.arr[j]) {
          min = j;
        }
      }
      this.swap(min, i);
    }
  }
}

//begin testing

const bubble = new Bubble(TEST_DATA);
bubble.log();
bubble.sort();
bubble.log();


const selection = new Selection(TEST_DATA);
selection.log();
selection.sort();
selection.log();
