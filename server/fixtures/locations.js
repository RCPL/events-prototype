if (Filters.find({kind:'library'}).count() === 0) {
	var list = [
		{value:"Richland Library - All Locations", display_value:"All Locations"},
		{value:"Richland Library  Eastover", display_value:"Eastover"},
		{value:"Richland Library  Cooper", display_value:"Cooper"},
		{value:"Richland Library  St. Andrews", display_value:"St. Andrews"},
		{value:"Richland Library Northeast", display_value:"Northeast"},
		{value:"Richland Library  Southeast", display_value:"Southeast"},
		{value:"Richland Library  Ballentine", display_value:"Ballentine"},
		{value:"Richland Library  Blythewood", display_value:"Blythewood"},
		{value:"Richland Library  Wheatley", display_value:"Wheatley"},
		{value:"Richland Library  Main", display_value:"Main"},
		{value:"Richland Library  Sandhills", display_value:"Sandhills"}
	];
	
	_.each(list,function(item){
		item.kind = 'library';
		Filters.insert(item);
	});
  
	// set the parents
	Filters.find({kind:'library'})
	.forEach(function(item){
		if(item.parent !== undefined){
			var parent = Filters.findOne({kind:item.kind, value:item.parent});
			console.log('item.parent:',item.parent,' matches parent:',parent._id);
			Filters.update({_id:item._id},{$set: {parent_id:parent._id}, $unset: {parent: ''}});
		}
	});
}
