function updateTime(){
  var hoursEl = window.document.getElementById('currentTimeHours');
  var minutesEl = window.document.getElementById('currentTimeMinutes');
  var meridianEl = window.document.getElementById('currentTimeMeridian');
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var meridian = 'a.m.';
  if(hours === 0){ hours = 12; }
  if(hours > 12){
    hours -= 12;
    meridian = 'p.m.';
  }
  if(minutes < 10){ minutes = '0' + minutes; }
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  meridianEl.innerHTML = meridian;
}

window.updateTime = updateTime;

setInterval(window.updateTime,1000);
