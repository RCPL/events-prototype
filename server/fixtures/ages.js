if (Filters.find({kind:'agegroups'}).count() === 0) {
	var list = [
//		{value:'Children All Ages'},
		{value:'Babies'},
//		{value:'Programs for Young Children', display_value:'For Young Children'},
//		{value:'Programs for School Age Children', display_value:'For School Age'},
//		{value:'Programs for Parents', display_value:'For Parents'},
//		{value:'Programs for Teens', display_value:'For Teens'},
//		{value:'Programs for Adults', display_value:'For Adults'},
//		{value:'Programs for Families', display_value:'For Families'},
		
		{value:'Children All Ages', display_value:'Children 1–12'},
		{value:'1-2', display_value:'Toddlers 1–2', parent:'Children All Ages'},
		{value:'3-5', display_value:'Children 3–5', parent:'Children All Ages'},
		{value:'6-8', display_value:'Children 6–8', parent:'Children All Ages'},
		{value:'9-12', display_value:'Tweens 9–12', parent:'Children All Ages'},
		{value:'13 - 18', display_value:'Teens 13–18'},
		{value:'Adults', display_value:'Adults'},
		{value:'Adults 55+', display_value:'Adults 55+'}
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
