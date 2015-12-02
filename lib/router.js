Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/',{
  name: 'eventsList',
  subscriptions: function() { return [
	  Meteor.subscribe('events'),
	  Meteor.subscribe('types'),
	  Meteor.subscribe('locations'),
	  Meteor.subscribe('ages')
  ]; }
});
