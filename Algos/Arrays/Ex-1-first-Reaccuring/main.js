//Asingment : Find the first Reaccuring item in an Array

const testedArray = ["C", "D", "F", "F", "D", "A", "A"];
let hashTable = {};
//My Solution

function calculate() {
  var result = false;
  testedArray.forEach((item) => {
    if (hashTable[item]) {
      result = item;
      return result;
    }
    hashTable[item] = 1;
  });
  return result;
}

finalResult = calculate();
console.log(finalResult);
