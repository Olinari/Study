var timer1 = document.getElementsByTagName("div")[0];
var timer2 = document.getElementsByTagName("div")[1];

function setup() {
  makeTimer(timer1, 500)();
  makeTimer(timer2, 200)();
}

function makeTimer(timer, limit) {
  var counter = 0;
  return function timeIt() {
    setInterval(() => {
      timer.innerHTML = "";
      timer.insertAdjacentHTML("afterbegin", counter);
      counter++;
    }, limit);
  };
}
setup();
