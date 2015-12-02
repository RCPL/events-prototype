Meteor.publish('categories', function() {
	return Filters.find({kind:'eventtypes'});
});

Meteor.publish('locations', function() {
	return Filters.find({kind:'library'});
});

Meteor.publish('ages', function() {
	return Filters.find({kind:'agegroups'});
});
