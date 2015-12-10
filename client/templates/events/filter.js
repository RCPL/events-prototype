Template.filter.helpers({
	value:function(){
		return this.display_value || this.value;
	},
	active:function(){
		if(Session.get(this.kind) === this._id){
			return 'active';
		}else{
			return '';
		}
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
	},
	hasParent: function(){
		return (this.parent_id !== undefined) ? 'has-parent' : '';
	}
});
