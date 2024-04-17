document.getElementById('start').addEventListener('click', function() {
    var minutes = parseInt(document.getElementById('minutes').value);
    var seconds = parseInt(document.getElementById('seconds').value);
  
    if (isNaN(minutes) && isNaN(seconds)) {
      alert('Vui lòng nhập số phút hoặc số giây hợp lệ.');
      return;
    }
  
    if (isNaN(minutes)) {
      minutes = 0;
    }
  
    if (isNaN(seconds)) {
      seconds = 0;
    }
  
    var totalTime = (minutes * 60) + seconds;
    var countdown = setInterval(function() {
        var minutesLeft = Math.floor(totalTime / 60);
        var secondsLeft = totalTime % 60;
    
        document.getElementById('minutes').value = minutesLeft;
        document.getElementById('seconds').value = secondsLeft;
    
        if (totalTime <= 0) {
            clearInterval(countdown);
          document.getElementById('alarm').play();
            alert('Hết giờ!');
            document.getElementById('alarm').pause();
        } 
        else {
            totalTime--;
        }
    }, 1000);
});
  
  document.getElementById('reset').addEventListener('click', function() {
    clearInterval(countdown);
    document.getElementById('minutes').value = "0";
    document.getElementById('seconds').value = "0";

});



