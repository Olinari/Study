//Asingment : Determine wheather two strings are "One Edit Away"

const originString = "xyyxfg";
const testedString = "xgggfg"; //yes

//My Solution

var count = 0;

function calculate() {
  for (i = 0; i < originString.length; i++) {
    if (testedString[i] != originString[i]) {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return count === 1 ? true : false;
}

finalResult = calculate();
console.log(finalResult);
//console.log(Object.keys(finalResult)[0] || null);
