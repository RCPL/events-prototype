Meteor.publish('events', function() {
  return Events.find({iso_date: {$gt: new Date()}},{sort:{iso_start: -1},limit:10});
});
