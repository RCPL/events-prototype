if (Locations.find().count() === 0) {
	var list = [
		{name:"Richland Library - All Locations", short_name:"All Locations"},
		{name:"Richland Library  Eastover", short_name:"Eastover"},
		{name:"Richland Library  Cooper", short_name:"Cooper"},
		{name:"Richland Library  St. Andrews", short_name:"St. Andrews"},
		{name:"Richland Library Northeast", short_name:"Northeast"},
		{name:"Richland Library  Southeast", short_name:"Southeast"},
		{name:"Richland Library  Ballentine", short_name:"Ballentine"},
		{name:"Richland Library  Blythewood", short_name:"Blythewood"},
		{name:"Richland Library  Wheatley", short_name:"Wheatley"},
		{name:"Richland Library  Main", short_name:"Main"},
		{name:"Richland Library  Sandhills", short_name:"Sandhills"}
	];
	_.each(list,function(item){
		Locations.insert(item);
	});
}
