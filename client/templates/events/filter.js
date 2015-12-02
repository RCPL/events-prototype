Template.filter.helpers({
	value:function(){
		return this.display_value || this.value;
	},
	checked:function(){
		var filters = Session.get('filters');
//		return (filters.indexOf(this) !== -1);
		return false;
	},
	count:function(){
//		var thisFilter = 
//		var type = Session.get('type');
//		return Events.find().count();
		return 5;
	}
});
