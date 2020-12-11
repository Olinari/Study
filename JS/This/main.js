const thisMyster = {
  runs: ["1", "2", "3"],
  giveMeThis(tag) {
    console.log("method this", this);
  },
  showMethodThis() {
    this.runs.forEach((run) => {
      this.giveMeThis();
    });
  },
  showArrowThis() {
    this.runs.forEach((tag) => {
      console.log("arrow this", this);
    });
  },
  showDomThis() {
    this.runs.forEach(function (tag) {
      console.log("Dom this", this);
    });
  },
};

thisMyster.showMethodThis();
thisMyster.showArrowThis();
thisMyster.showDomThis();

/* function Video() {
  this.lox = lox;
  console.log(this);
}

let lox = new Video();
 */
