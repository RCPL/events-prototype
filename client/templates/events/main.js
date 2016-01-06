Template.eventsMain.helpers({
	thisType: function(){
		var filters = Session.get('filters') || {};
		if(filters.eventtypes !== undefined){
			return filters.eventtypes + ' ';
		}
	},
	atLocation: function(){
		var filters = Session.get('filters') || {};
		if(filters.library !== undefined){
			return ' at ' + filters.library;
		}
	},
	forAges: function(){
		var filters = Session.get('filters') || {};
		if(filters.agegroups !== undefined){
			return ' for ' + filters.agegroups;
		}
	},
	events: function(){
		if(Session.get('viewQueue') === true){
			return Events.find(Session.get('filters') || {});
		}else{
			return Events.find({_id:{$in: Session.get('queue')}});
		}
	},
	categories: function(){
		return Filters.find({kind:'eventtypes'});
	},
	locations: function(){
		return Filters.find({kind:'library'});
	},
	ages: function(){
		return Filters.find({kind:'agegroups'});
	},
	queueCount: function(){
		var queue = Session.get('queue') || [];
		return queue.length;
	}
});

Template.eventsMain.events({
	"click .filters ul a": function(event){
		event.preventDefault();

		var filters = Session.get('filters') || {};
		if(this.kind !== undefined){
			filters[this.kind] = this.value;
		}
		Session.set('filters',filters);

		Session.set(this.kind, this._id);
		console.log(this._id);
	},
	"click .toggleQueue": function(event){
		event.preventDefault();

		var viewQueue = Session.get('viewQueue') || false;
		Session.set('viewQueue',!viewQueue);

		console.log('view the queue?', !viewQueue);
	}
});
