//Asingment : Find the first Reaccuring item in an Array

const testedArray = ["C", "D", "F", "F", "D", "A", "A"];
let hashTable = {};
//My Solution

function calculate() {
  var result = false;
  for (i = 0; i < testedArray.length; i++) {
    if (hashTable[testedArray[i]]) {
      result = testedArray[i];
      return result;
    }
    hashTable[testedArray[i]] = 1;
  }
  return result;
}

finalResult = calculate();
console.log(finalResult);
