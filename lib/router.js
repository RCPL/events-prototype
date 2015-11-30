Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/',{
  name: 'eventsList',
  subscriptions: function() { return Meteor.subscribe('events'); }
});
