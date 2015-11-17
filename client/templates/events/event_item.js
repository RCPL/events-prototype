Template.eventItem.helpers({
  prettyLibrary:function(){
    return this.library.replace('Richland Library  ', '').replace('Richland Library ',' ').toLowerCase();
  }
});