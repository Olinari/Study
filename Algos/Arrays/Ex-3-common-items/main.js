//Asignment : Find Common item between A[] and B[] in 0(max(m,n))

var A = ["A", "C", "H", "B", "H"];
var B = ["Z", "C", "H", "B", "Z"];

let hashTableA = {};
let hashTableB = {};
let reacurring = [];
//My Solution

function calculate() {
  B.forEach((item, index) => {
    hashTableB[item] = true;
    if (A[index]) {
      let item = A[index];
      hashTableA[item] = true;
    }
    if (hashTableA[item] && hashTableB[item]) {
      reacurring.push(item);
    }
  });
}

calculate();
console.log(reacurring);
