function clock(){
  var today = new Date()
  var hours = today.getHours();
  var minutes = today.getMinutes();
  if(hours < 10){
    hours = "0" + hours;
  }

  if(minutes < 10){
    minutes = "0" + minutes;
  }

  if(hours > 12){
    hours = hours - 12;
  }
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = ": " + minutes;

  var time = today.getHours();

  if(time > 17){
    document.getElementById('message').innerHTML = "Good evening!"
  }else if (time > 12 && time < 17) {
    document.getElementById('message').innerHTML = "Good afternoon!"
  }else {
    document.getElementById('message').innerHTML = "Good morning!"
  }
}



setInterval(clock, 1);
