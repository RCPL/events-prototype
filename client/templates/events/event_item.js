Template.eventItem.helpers({
	prettyLibrary:function(){
		return this.library.replace('Richland Library  ', '').replace('Richland Library ', '').replace('- ','');
	},
	tagClass:function(){
		return this.library.replace('Richland Library', '').replace(' ','').replace('-','').toLowerCase();
	},
	prettyTime:function(time){
		var hours = time.getHours();
		var minutes = time.getMinutes();
		var meridiem = 'a.m.';

		if(hours >= 12){
			hours -= 12;
			meridiem = 'p.m.';
		}
		if(hours === 0){ hours = 12; }

		if(minutes === 0) minutes = '';
		else minutes = ':' + minutes;

		return hours + minutes +' '+ meridiem;
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
	},
	signup_display: function(){
		return (this.signup == 1);
	},
	prettyLocation:function(){
		if(this.location !== null){
			var library = this.library.replace('Richland Library  ', '').replace('Richland Library ', '').replace('- ','');
			return ' / ' + this.location.replace(library+' ','');
		}else{
			return '';
		}
	},
	queuePrint: function(){
		var queue = Session.get('queue') || [];
		return (queue.indexOf(this._id) === -1) ? 'Print' : 'Don\'t print';
	}
});

Template.eventItem.events({
	"click a.toggle-queue": function(event){
		event.preventDefault();

		var queue = Session.get('queue') || [];
		if(queue.indexOf(this._id) === -1){
			queue.push(this._id);
		}else{
			queue = _.without(queue,this._id);
		}
		Session.set('queue',queue);
		console.log('(un)queued',this._id);
	}
});
