if (Filters.find({kind:'eventtypes'}).count() === 0) {
	
	var list = [
		{value:'Z - CULTURAL & ARTS', display_value:'Art & Culture'},
		{value:'Z - LITERACY', display_value:'Books & Writing'},
		{value:'Z - WORKFORCE DEVELOPMENT', display_value:'Business & Jobs'},
		{value:'Z - COMMUNITY ENGAGEMENT', display_value:'Community Conversations'},
		{value:'Education'},
		{value:'Health and Wellness'},
		{value:'Local History', display_value:'History'},
		{value:'Hobbies & Crafts'},
//		{value:'Z - LIFESKILLS', display_value:'Life Skills'},
		{value:'Z - COMPUTERS & TECHNOLOGY', display_value:'Science & Technology'},		
		{value:'Z - EARLY LITERACY', display_value:'Storytime'},

//		{value:'Seasonal'},
		{value:'Internal / Library Updates'},
		
		{value:'Other'},
		
		
		{value:'Affordable Care Act', parent:'Other'},
		{value:'Art in the Library', parent:'Other'},
		{value:'Augusta Baker\'s Dozen', parent:'Other'},
		{value:'Author Event', parent:'Other'},
		{value:'Black History Month', parent:'Other'},
		{value:'Book Group', parent:'Other'},
		{value:'Book Sale', parent:'Other'},
		{value:'Business Event', parent:'Other'},
		{value:'Children', parent:'Other'},
		{value:'Closings', parent:'Other'},
		{value:'Community Awareness', parent:'Other'},
		{value:'Community Conversation', parent:'Other'},
		{value:'Computer Class', parent:'Other'},
		{value:'Craft', parent:'Other'},
		{value:'Evento en Español', parent:'Other'},
		{value:'Exhibit', parent:'Other'},
		{value:'Friends Event', parent:'Other'},
		{value:'Gaming', parent:'Other'},
		{value:'Gardening', parent:'Other'},
		{value:'Gee\'s Bend (P)', parent:'Other'},
		{value:'Genealogy', parent:'Other'},
		{value:'Go Green', parent:'Other'},
		{value:'Growing Savers', parent:'Other'},
		
		{value:'Holiday Programs', parent:'Other'},
		{value:'Job and Career', parent:'Other'},
		{value:'Let\'s Speak English', parent:'Education'},
		
		{value:'Maker', parent:'Other'},
		{value:'Meetings', parent:'Other'},
		{value:'Movies', parent:'Other'},
		{value:'Multicultural', parent:'Other'},
		{value:'Nature', parent:'Other'},
		{value:'NONE', parent:'Other'},
		{value:'OneBook', parent:'Other'},
		{value:'ongoing (P)', parent:'Other'},
		{value:'Performance', parent:'Other'},
		{value:'Sew Divine', parent:'Hobbies & Crafts'},
		{value:'Staff Training (P)', parent:'Other'},
		{value:'STEM/STEAM', parent:'Other'},
		{value:'Storytime', parent:'Z - EARLY LITERACY'},
		{value:'Summer Learning Challenge', parent:'Other'},
		{value:'Summer Reading Club', parent:'Other'},
		{value:'Teens', parent:'Other'},
		{value:'Webinar (P)', parent:'Other'},
		{value:'Workshop', parent:'Other'}
	];
    
	_.each(list,function(item){
		item.kind = 'eventtypes';
		Filters.insert(item);
	});

	// set the parents
	Filters.find({kind:'eventtypes'})
	.forEach(function(item){
		if(item.parent !== undefined){
			var parent = Filters.findOne({kind:item.kind, value:item.parent});
			if(parent !== undefined){
				console.log('item.parent:',item.parent,' matches parent:',parent._id);
				Filters.update({_id:item._id},{$set: {parent_id:parent._id}, $unset: {parent: ''}});
			}else{
				console.log('error with parent',parent);
			}
		}
	});
}

