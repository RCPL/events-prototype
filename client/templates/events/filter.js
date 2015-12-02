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
		var filters = Session.get('filters') || {};
		filters[this.kind] = this.value;
		return Events.find(filters).count();
//		return (filters !== undefined);
	}
});
