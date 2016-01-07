Template.datePickerMain.helpers({
	days:function(){
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

Template.datePickerMain.events({
	"click .dates a": function(event){
		event.preventDefault();

		Session.set('date', this.number);

		var filters = Session.get('filters') || {};
		if(this.start !== undefined && this.end !== undefined){
			filters.iso_end = {$gte: new Date(this.start), $lte: new Date(this.end)};
		}else{
			delete filters.iso_end;
		}
		Session.set('filters',filters);
	},

	"click #datePickerMode button": function(event){

		console.log(event);
	}
});
