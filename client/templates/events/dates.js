Template.dates.helpers({
	dates:function(){
		var list = [];
		for(var i=0; i<7; i++){
			var item = {};
			var itemMoment = moment().add(i,'days');
			item.start = moment(itemMoment).startOf('day');
			item.end = moment(itemMoment).endOf('day');
			item.name = itemMoment.format('ddd');
			item.number = itemMoment.date();
			item.display_number = (i === 0) ? "Today" : item.number;
			list.push(item);
		}
		return list;
	}
});

Template.dates.events({
	"click a": function(event){
		event.preventDefault();
		
		Session.set('date', this.number);
		
		var filters = Session.get('filters') || {};
		if(this.start !== undefined && this.end !== undefined){
			filters.iso_end = {$gte: new Date(this.start), $lte: new Date(this.end)};
		}else{
			delete filters.iso_end;
		}
		Session.set('filters',filters);
		
		console.log('this number',Session.get('date'));
	}
});
