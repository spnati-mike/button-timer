let running = false;
let start = 0;
let end = 0;
document.onkeypress = function(e) {
  if (!running) {
    running = true;
    start = Date.now();
    document.getElementById("main").innerHTML = "Press another button to stop the timer.";
  } else {
    running = false;
    end = Date.now();
    document.getElementById("main").innerHTML = "Elapsed time: " + (end - start) + " milliseconds.";
  }
};
