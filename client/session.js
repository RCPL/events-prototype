if(Session.get('date') === undefined){
	Session.set('date',moment().date());
}

if(Session.get('filters') === undefined){
	Session.set('filters',{
		iso_end: {$gte:moment()._d, $lte:moment().endOf('day')._d}
	});
}

if(Session.get('viewQueue') === undefined){
	Session.set('viewQueue',false);
}
