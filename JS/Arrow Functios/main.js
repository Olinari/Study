const thisMyster = {
  runs: ["THIS"],

  giveMeThis(tag) {
    console.log("Method this", this.runs);
  },
  showMethodThis() {
    this.runs.forEach((run) => {
      this.giveMeThis();
    });
  },
  /*Arrow functions do not bind their own This, instead,
        they inherit the one from the parent scope,
        which is called "lexical scoping".*/
  showArrowThis() {
    ((tag) => {
      console.log("Arrow this", this.runs);
    })();
  },
  /*As soon as we use the preserved word `function` to define one, 
    the created function has the Global This*/
  showDomThis() {
    (function (tag) {
      console.log("Dom this", this.runs); //undefined
    })();
  },
};

thisMyster.showMethodThis();
thisMyster.showArrowThis();
thisMyster.showDomThis();
