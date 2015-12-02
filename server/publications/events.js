Meteor.publish('events', function() {
	var now = new Date();
	return Events.find({iso_end: {$gte: now}},{sort:{iso_start: 1},limit:100});
});

Meteor.publish('categories', function() {
	return Filters.find({kind:'category'});
});

Meteor.publish('locations', function() {
	return Filters.find({kind:'location'});
});

Meteor.publish('ages', function() {
	return Filters.find({kind:'age'});
});