//Asignment : Determine wheather Arrray B is a Cyclic rotation of  Array A

var A = ["A", "B", "C", "D", "E"];
var B = ["D", "E", "A", "B", "C"];

let result = false;
//My Solution

function calculate() {
  let j = null;
  for (i = 0; i < A.length; i++) {
    if (i === 0) {
      j = B.indexOf(A[i]);
      if (!j) {
        return;
      }
    }
    if (j >= A.length) {
      j = j - A.length;
    }
    if (A[i] != B[j]) {
      return;
    }
    j++;
  }
  result = true;
}

calculate();
console.log(result);
