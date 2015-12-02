Meteor.publish('categories', function() {
	return Filters.find({kind:'category'});
});

Meteor.publish('locations', function() {
	return Filters.find({kind:'location'});
});

Meteor.publish('ages', function() {
	return Filters.find({kind:'age'});
});
