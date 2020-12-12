//Asignment : One Edit Away
const testedArray = ["C", "D", "B", "Z", "B", "C", "T"]; //A
let hashTable = {};
var mostFrequent = [null, null];
//My Solution

function calculate() {
  testedArray.forEach((item, index) => {
    if (hashTable[item]) {
      hashTable[item]++;
    } else {
      hashTable[item] = 1;
    }
    if (mostFrequent[1] < hashTable[item] || mostFrequent[1] === null) {
      mostFrequent = [item, hashTable[item]];
    }
  });
  if (mostFrequent[1] > 1) console.log(mostFrequent);
  else console.log("No reacurring Items...");
  return;
}

calculate();
