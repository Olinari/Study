//Asingment : Find The first NON reacurring item in a string

const testedString = "xyyxg"; //c

//My Solution

function calculate() {
  let hash = {};
  let result = testedString;

  for (i = 0; i < testedString.length; i++) {
    item = testedString[i];
    if (hash[item]) {
      delete hash[item];
    } else {
      hash[item] = 1;
      result = item;
    }
  }

  return hash;
}

finalResult = calculate();
console.log(Object.keys(finalResult)[0] || null);
