if (Filters.find({kind:'location'}).count() === 0) {
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
		item.kind = 'location';
		Filters.insert(item);
	});
  
	// set the parents
	_.each(list,function(item){
		var parent = Filters.find({value: item.parent}).fetch();
		if(parent.length !== 0){
			console.log('found parent',parent[0]);
			var child = Filters.update({value: item.value},{$set: {parent_id:parent[0]._id}, $unset: {parent: ''}});
		}
	});
}
