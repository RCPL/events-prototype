Meteor.publish('events', function() {
	var now = new Date();
//	var eod = new Date(today.getDay);
	return Events.find({iso_end: {$gte: now}},{sort:{iso_start: 1},limit:100});
});
