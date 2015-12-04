if (Filters.find({kind:'agegroups'}).count() === 0) {
	var list = [
		{value:'Children All Ages', display_value:'For All Children'},
		{value:'Programs for Young Children', display_value:'For Young Children'},
		{value:'Programs for School Age Children', display_value:'For School Age'},
		{value:'Programs for Parents', display_value:'For Parents'},
		{value:'Programs for Teens', display_value:'For Teens'},
		{value:'Programs for Adults', display_value:'For Adults'},
		{value:'Programs for Families', display_value:'For Families'},
		
		{value:'3-5', display_value:'Ages 3–5'},
		{value:'6-8', display_value:'Ages 6–8'},
		{value:'9-12', display_value:'Ages 9–12'},
		{value:'13 - 18', display_value:'Ages 13–18'},
		{value:'Adults', display_value:'Ages 19–55'},
		{value:'Adults 55+', display_value:'Ages 55+'}
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
