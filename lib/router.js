Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/',{
  name: 'eventsList',
  subscriptions: function() { return Meteor.subscribe('events'); }
});

Router.route('/:filter',{
  subscriptions: function() { return Meteor.subscribe('events',this.params); }
});
