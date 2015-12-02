if (Filters.find({kind:'agegroups'}).count() === 0) {
	var list = [
		{value:'Children'},
		{value:'3-5', parent:'Children'},
		{value:'6-8', parent:'Children'},
		{value:'Adults'},
		{value:'Adults 55+'}
	];
    
	_.each(list,function(item){
		item.kind = 'agegroups';
		Filters.insert(item);
	});
  
	// set the parents
	_.each(list,function(item){
		var parent = Filters.find({kind:'agegroups', value: item.parent}).fetch();
		if(parent.length !== 0){
			console.log('found parent',parent[0]);
			var child = Filters.update({value: item.value, kind:'agegroups'},{$set: {parent_id:parent[0]._id}, $unset: {parent: ''}});
		}
	});
}
