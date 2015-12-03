if (Filters.find({kind:'agegroups'}).count() === 0) {
	var list = [
		{value:'Children'},
		{value:'3-5', display_value:'3–5', parent:'Children'},
		{value:' 6-8', display_value:'6–8', parent:'Children'},
		{value:' 13 - 18', display_value:'Teens'},
		{value:'Adults'},
		{value:'Adults 55+'}
	];
    
	_.each(list,function(item){
		item.kind = 'agegroups';
		Filters.insert(item);
	});
  
	// set the parents
	Filters.find({kind:'agegroups'})
	.forEach(function(item){
		if(item.parent !== undefined){
			var parent = Filters.findOne({kind:item.kind, value:item.parent});
			console.log('item.parent:',item.parent,' matches parent:',parent._id);
			Filters.update({_id:item._id},{$set: {parent_id:parent._id}, $unset: {parent: ''}});
		}
	});
	
}
