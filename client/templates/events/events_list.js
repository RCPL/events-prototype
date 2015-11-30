Template.eventsList.helpers({
	events: function(){
		var filters = Session.get('filters') || [];
		if(filters.length > 0){
			return Events.find({library: {$in: filters}});
		}else{
			return Events.find();
		}
	}
});

Template.eventsList.events({
	"click .filters input": function(event){
		console.log('checked',event.target,event.target.checked);
		var filters = Session.get('filters') || [];
		var this_filter = $(event.target).data('library');
		if(event.target.checked){
			filters.push(this_filter);
		}else{
			filters = _.without(filters, this_filter);
		}
		Session.set('filters',filters);
	}
});