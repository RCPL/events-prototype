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
			return Events.find({_id:{$in: Session.get('queue')}});
		}else{
			return Events.find(Session.get('filters') || {});
		}
	}
});
