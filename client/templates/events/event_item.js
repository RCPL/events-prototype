Template.eventItem.helpers({
	prettyLibrary:function(){
		return this.library.replace('Richland Library', '').replace(' ','').replace('-','');
	},
	tagClass:function(){
		return this.library.replace('Richland Library', '').replace(' ','').replace('-','').toLowerCase();
	},
	prettyTime:function(){
		var hours = this.iso_start.hours;
		var minutes = this.iso_start.minutes;

		if(minutes === 0){
			return hours;
		}

		return hours
	}
});