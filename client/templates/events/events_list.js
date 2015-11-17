Template.eventsList.helpers({
  events: Events.find({iso_end: {$gte: new Date()}})
});