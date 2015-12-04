function updateTime(){
  var hoursEl = window.document.getElementById('currentTimeHours');
  var minutesEl = window.document.getElementById('currentTimeMinutes');
  var meridiemEl = window.document.getElementById('currentTimeMeridiem');
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var meridiem = 'a.m.';
  if(hours === 0){ hours = 12; }
  if(hours > 12){
    hours -= 12;
    meridiem = 'p.m.';
  }
  if(minutes < 10){ minutes = '0' + minutes; }
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  meridiemEl.innerHTML = meridiem;
}

//window.updateTime = updateTime;

//setInterval(window.updateTime,1000);
