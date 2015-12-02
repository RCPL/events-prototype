if (Filters.find({kind:'age'}).count() === 0) {
	var list = [
		{value:'Children'},
		{value:'3-5', parent:'Children'},
		{value:'6-8', parent:'Children'}
	];
    
	_.each(list,function(item){
		item.kind = 'age';
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
