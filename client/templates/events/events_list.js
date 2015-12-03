Template.eventsList.helpers({
	thisType: function(){
		var filters = Session.get('filters');
		if(filters.eventtypes !== undefined){
			return filters.eventtypes + ' ';
		}
	},
	atLocation: function(){
		var filters = Session.get('filters');
		if(filters.library !== undefined){
			return ' at ' + filters.library;
		}
	},
	forAges: function(){
		var filters = Session.get('filters');
		if(filters.agegroups !== undefined){
			return ' for ' + filters.agegroups;
		}
	},
	events: function(){
		return Events.find(Session.get('filters') || {});
	},
	categories: function(){
		return Filters.find({kind:'eventtypes'});
	},
	locations: function(){
		return Filters.find({kind:'library'});
	},
	ages: function(){
		return Filters.find({kind:'agegroups'});
	}
});

Template.eventsList.events({
	"click .filters a": function(event){
		event.preventDefault();

		var filters = Session.get('filters') || {};
		if(this.kind !== undefined){
			filters[this.kind] = this.value;
		}
		Session.set('filters',filters);

		Session.set(this.kind, this._id);
		console.log(this);
	}
});