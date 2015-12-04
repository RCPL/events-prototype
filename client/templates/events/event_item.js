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
		var meridiem = 'a.m.';

		if(hours === 0){ hours = 12; }
		if(hours > 12){
			hours -= 12;
			meridiem = 'p.m.';
		}

		if(minutes === 0) minutes = '';
		else minutes = ':' + minutes;

		return hours + minutes + meridiem;
	},
	prettyDate:function(){
		if(Session.get('date') === undefined){
			return moment(this.iso_start).format('ddd, MMM D');
		}else{
			return '';
		}
	},
	staffPick:function(){
		return (this.featuredevent == 1) ? '★ Staff Pick' : '';
	}
});
