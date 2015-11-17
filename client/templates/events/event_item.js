Template.eventItem.helpers({
  prettyDate: function() {
    var m = this.iso_date.getMonth();
    var d = this.iso_date.getDate();
    return m +'/'+ d;
  },
  prettyTime: function() {
    var h = this.iso_date.getHours();
    var m = this.iso_date.getMinutes();
    if(m<10){ m = '0' + m }
    return h +':'+ m;
  }
});