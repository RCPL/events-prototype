Template.filters.helpers({
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
	},
	viewQueue: function(){
		return Session.get('viewQueue') ? 'Hide' : 'View';
	},
	viewPicks: function(){
		return Session.get('viewPicks') ? 'Hide' : 'View';
	}
});

Template.filters.events({
	"click ul a": function(event){
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
