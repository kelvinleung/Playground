/*
first es6 test
just some basic sorting algorithm
*/

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
    for(let i = 0; i < this.length - 1; i++) {
      for(let j = 0; j < this.length - 1 - i; j++) {
        if(this.arr[j] > this.arr[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

const bubble = new Bubble(TEST_DATA);

bubble.log();
bubble.sort();
bubble.log();
