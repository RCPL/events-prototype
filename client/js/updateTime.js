function updateTime(){
  var hoursEl = window.document.getElementById('currentTimeHours');
  var minutesEl = window.document.getElementById('currentTimeMinutes');
  var meridianEl = window.document.getElementById('currentTimeMeridian');
  var now = new Date();
  var hours = now.getHours();
  var meridian = 'AM';
  if(hours === 0){ hours = 12; }
  if(hours > 12){
    hours -= 12;
    meridian = 'PM';
  }
  hoursEl.innerHTML = now.getHours() % 12;
  minutesEl.innerHTML = now.getMinutes();
  meridianEl.innerHTML = meridian;
}

window.updateTime = updateTime;

setInterval(window.updateTime,1000);
