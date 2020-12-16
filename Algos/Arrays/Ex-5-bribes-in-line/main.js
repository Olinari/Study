q = [2, 1, 5, 3, 4];
let ans = 0;
let halt = false;
function minimumBribes(q) {
  for (i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) > 2) {
      console.log("Too chacotic");
      halt = true;
    }
    for (j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) {
        ans++;
      }
    }
  }
  !halt && console.log(ans);
}
