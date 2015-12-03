Template.eventItem.helpers({
	prettyLibrary:function(){
		return this.library.replace('Richland Library', '').replace(' ','').replace('-','');
	},
	tagClass:function(){
		return this.library.replace('Richland Library', '').replace(' ','').replace('-','').toLowerCase();
	},
	prettyTime:function(time){
		var hours = time.getHours();
		var minutes = time.getMinutes();
		var meridian = 'a.m.';

		if(hours === 0){ hours = 12; }
		if(hours > 12){
			hours -= 12;
			meridian = 'p.m.';
		}

		if(minutes === 0) minutes = '';
		else minutes = ':' + minutes;

		return hours + minutes +' '+ meridian;
	},
	prettyDate:function(){
		return this.iso_start.getMonth()+1 +'/'+ this.iso_start.getDate();
	}
});