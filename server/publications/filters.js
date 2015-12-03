Meteor.publish('categories', function() {
	return Filters.find({kind:'eventtypes', parent_id: {$exists: false}});
});

Meteor.publish('locations', function() {
	return Filters.find({kind:'library', parent_id: {$exists: false}});
});

Meteor.publish('ages', function() {
	return Filters.find({kind:'agegroups', parent_id: {$exists: false}});
});
