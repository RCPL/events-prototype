Router.configure({
	layoutTemplate: 'layout'
//	,loadingTemplate: 'loading'
});

Router.route('/',{
	name: 'eventsList',
	subscriptions: function() { return [
		Meteor.subscribe('events'),
		Meteor.subscribe('categories'),
		Meteor.subscribe('locations'),
		Meteor.subscribe('ages')
	]; }
});

Router.route('/event/:_id',{
	name: 'eventPage',
	template: 'eventPage',
	data: function() {
		return Events.findOne(this.params._id);
	}
});
