window.onload = function(){
    $('#start').click(timer.start)
    };
    function startTrivia (){
      
    }
    var timer = {
      time:30,
      reset: function(){
        timer.time = 30;
        $('#timer-display').html('Time Remaining: 30');
      },
      start: function(){
        counter = setInterval(timer.count, 1000);
      },
      count: function(){
        timer.time--;
        $('#timer-display').html('Time Remaining: ' + timer.time);
      },
      timeUp: function(){
      }

    };
            <!-- Begin
            var numQues = 4;
            var numChoi = 3;
            var answers = new Array(4);
           
            answers[0] = "Sears Tower";
            answers[1] = "Lake Michigan";
            answers[2] = "Michael Jordan";
            answers[3] = "1871";
            
            function getScore(form) {
              var score = 0;
              var currElt;
              var currSelection;
              for (i=0; i<numQues; i++) {
                currElt = i*numChoi;
                for (j=0; j<numChoi; j++) {
                  currSelection = form.elements[currElt + j];
                  if (currSelection.checked) {
                    if (currSelection.value == answers[i]) {
                      score++;
                      break;
                    }
                  }
                }
              }
              score = Math.round(score/numQues*100);
              form.percentage.value = score + "%";
              var correctAnswers = "";
              for (i=1; i<=numQues; i++) {
                correctAnswers += i + ". " + answers[i-1] + "\r\n";
              }
              form.solutions.value = correctAnswers;
            }
        