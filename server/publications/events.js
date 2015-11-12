Meteor.publish('events', function() {
  return Events.find({}, {limit:3});
});