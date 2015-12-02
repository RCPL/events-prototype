Template.type.helpers({
	selected:function(){
		var filters = Session.get('type');
		return (filters.indexOf(this) !== -1);
	},
	count:function(){
		var type = Session.get('type');
		return Events.find().count();
	}
});