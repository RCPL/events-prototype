if (Filters.find({kind:'eventtypes'}).count() === 0) {
	
	var list = [
		{value:'Z - CULTURAL & ARTS', display_value:'Art & Culture'},
		{value:'Z - EARLY LITERACY', display_value:'Early Literacy'},
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
		{value:'Health and Wellness', parent:'Other'},
		{value:'Holiday Programs', parent:'Other'},
		{value:'Job and Career', parent:'Other'},
		{value:'Let\'s Speak English', parent:'Other'},
		{value:'Local History', parent:'Other'},
		{value:'Maker', parent:'Other'},
		{value:'Meetings', parent:'Other'},
		{value:'Movies', parent:'Other'},
		{value:'Multicultural', parent:'Other'},
		{value:'Nature', parent:'Other'},
		{value:'NONE', parent:'Other'},
		{value:'OneBook', parent:'Other'},
		{value:'ongoing (P)', parent:'Other'},
		{value:'Performance', parent:'Other'},
		{value:'Sew Divine', parent:'Other'},
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
	_.each(list,function(item){
		var parent = Filters.find({kind:'eventtypes', value: item.parent}).fetch();
		if(parent.length !== 0){
			console.log('found parent',parent[0]);
			var child = Filters.update({value: item.value, kind:'eventtypes'},{$set: {parent_id:parent[0]._id}, $unset: {parent: ''}});
		}
	});
}
