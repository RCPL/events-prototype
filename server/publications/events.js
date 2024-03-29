Meteor.publish('events', function() {
	var now = new Date();
	var eow = moment(new Date()).endOf("day").add(6,'days');
	return Events.find({iso_end: {$gte: now, $lte: eow._d}},{sort:{iso_start: 1},limit:100});
});
