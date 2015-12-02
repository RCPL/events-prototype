SyncedCron.add({
	name: 'update Evanced',
	schedule: function(parser) {
		return parser.text('every 5 minutes');
	},
	job: function() {
		Meteor.call('importEvanced');
		Meteor.call('pruneEvanced');
	}
});

SyncedCron.start();
