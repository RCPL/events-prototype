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
	subscriptions: function() { return [
		Meteor.subscribe('singleEvent',this.params._id)
	]; }
});
