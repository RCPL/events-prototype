Template.eventsList.helpers({
	events: function(){
		var types = Session.get('types') || [];
		if(types.length > 0){
			return Events.find({eventtypes: {$in: types}});
		}else{
			return Events.find();
		}
	},
	types: function(){
		return Types.find();
	},
	locations: function(){
		return Locations.find();
	},
	ages: function(){
		return Ages.find();
	}
});

Template.eventsList.events({
	"click .filters label": function(event){
		console.log('checked',event.target,event.target.checked);
		var types = Session.get('types') || [];
		var value = $(event.target).data('value');
		if(event.target.checked){
			types.push(value);
		}else{
			types = _.without(types, value);
		}
		Session.set('types',types);
	}
});