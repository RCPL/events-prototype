Meteor.publish('events', function() {
  return Events.find({iso_end: {$gte: new Date()}},{sort:{iso_start: -1},limit:100});
});
