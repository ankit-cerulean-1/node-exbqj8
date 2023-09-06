const app = require('express')();

/**
 * Problem Statement: Given list of items in array find maximum repeated item and display it on output.
 * Input: List of Elements
 * Output: Most Repeated String in Array
 * To Run Program type : 'npx nodemon index.js' in terminal and wait
 * To inspect and check console logs right click and inspect in chrome.
 */
var getMaxRepeatedString = (req, res) => {
  let input = [
      'fan',
      'table',
      'computer',
      'books',
      'table',
      'computer',
      'table',
    ],
    output = '?';

  /**
   * Write down your code here
   * */

  /** Logic Ends */

  res.send(
    ` <h1 style="color:red">Timer: <span id="displayDiv"></span>
    <br><button onclick="resetTimer()">Reset</button><hr>
    <h4> Problem Statement: Given list of items in array find maximum repeated item and display it on output.</h4>
    <h1> Output: ` +
      output +
      '</h1>' +
      `<script>
      const COUNTER_KEY = 'my-counter';
      var minutes=0, seconds = 0, timerSecs = 300,cntr = 0;

      function countDown(i, callback) {
        //callback = callback || function(){};
          timer = setInterval(function () {
        
          minutes = parseInt(i / 60, 10);
          seconds = parseInt(i % 60, 10);
          minutes = minutes < 10 ? '0' + minutes : minutes;
          seconds = seconds < 10 ? '0' + seconds : seconds;

          if(window.sessionStorage.getItem(COUNTER_KEY)){
            i = window.sessionStorage.getItem(COUNTER_KEY);
            minutes = parseInt(i / 60, 10);
            seconds = parseInt(i % 60, 10);
          }
          if (i-- > 0) {
            window.sessionStorage.setItem(COUNTER_KEY, i);
          } else {
            clearInterval(timer);
            callback();
          }

          window.document.getElementById('displayDiv').innerHTML =
          '0:' +
          minutes +
          ':' +
          seconds;

        }, 1000);
      }
      function resetTimer(){
        cntr++;
        if(cntr == 3){
          clearInterval(timer);
          window.sessionStorage.setItem(COUNTER_KEY, timerSecs);
          countDown(timerSecs, () => {});
          cntr=0;
        }
      }
      countDown(timerSecs, () => {});
      </script>`
  );
};

app.get('/', getMaxRepeatedString);

app.listen(3000, () => {
  console.log('Started listening');
});
