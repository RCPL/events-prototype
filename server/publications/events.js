Meteor.publish('events', function() {
	var now = new Date();
	return Events.find({iso_end: {$gte: now}},{sort:{iso_start: 1},limit:100});
});

Meteor.publish('types', function() {
	return Types.find();
});

Meteor.publish('locations', function() {
	return Locations.find();
});

Meteor.publish('ages', function() {
	return Ages.find();
});