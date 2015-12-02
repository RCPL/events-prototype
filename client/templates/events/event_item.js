Template.eventItem.helpers({
  prettyLibrary:function(){
    return this.library.replace('Richland Library  ', '').replace('Richland Library ',' ').replace('- ','');
  },
  prettyTime:function(){
    
    var hours = this.iso_start.hours;
    var minutes = this.iso_start.minutes;
    
    if(minutes === 0){
      return hours;
    }
    
    return hours
  }
});