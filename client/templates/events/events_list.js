Template.eventsList.helpers({
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

//		$(this).parent('ul').children('li').removeClass('active');
//		this.active = 'active';
		
		var filters = Session.get('filters') || {};
		if(this.kind !== undefined){
			filters[this.kind] = this.value;
		}
		Session.set('filters',filters);
		//var filters = Session.set('filters') || [];
//		console.log('checked',event.target,event.target.checked);
//		var types = Session.get('types') || [];
//		var value = $(event.target).data('value');
//		if(event.target.checked){
//			types.push(value);
//		}else{
//			types = _.without(types, value);
//		}
//		Session.set('types',types);
	}
});