Template.filter.helpers({
	checked:function(){
		var filters = Session.get('filters');
		return (filters.indexOf(this) !== -1);
	},
	count:function(){
		if()
		var type = Session.get('type');
		return Events.find().count();
	}
});