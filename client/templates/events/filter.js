Template.filter.helpers({
	value:function(){
		return this.display_value || this.value;
	},
	count:function(){
		var filters = Session.get('filters') || {};
		if(this.value === undefined){
			delete filters[this.kind];
		}else{
			filters[this.kind] = this.value;
		}
		return Events.find(filters).count();
	},
	disabled:function(){
		var filters = Session.get('filters') || {};
		if(this.value === undefined){
			delete filters[this.kind];
		}else{
			filters[this.kind] = this.value;
		}
		var count = Events.find(filters).count();
		return (count === 0) ? 'disabled' : '';
	}
});
