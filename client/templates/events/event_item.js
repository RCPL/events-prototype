Template.eventItem.helpers({
  prettyDate: function() {
    var m = this.iso_start.getMonth();
    var d = this.iso_start.getDate();
    return m +'/'+ d;
  },
  prettyTime: function() {
    var h = this.iso_start.getHours();
    var m = this.iso_start.getMinutes();
    if(m<10){ m = '0' + m }
    return h +':'+ m;
  },
  prettyLibrary:function(){
    return this.library.replace('Richland Library  ', '').toLowerCase();
  }
});