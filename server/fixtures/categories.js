if (Filters.find({kind:'category'}).count() === 0) {
	
	var list = [
		{value:'Other'},
		{value:'Affordable Care Act', display_value:'Affordable Care Act', parent:'Other'},
		{value:'Art in the Library', display_value:'Art in the Library', parent:'Other'},
		{value:'Augusta Baker\'s Dozen', display_value:'Augusta Baker\'s Dozen', parent:'Other'},
		{value:'Author Event', display_value:'Author Event', parent:'Other'},
		{value:'Black History Month', display_value:'Black History Month', parent:'Other'},
		{value:'Book Group', display_value:'Book Group', parent:'Other'},
		{value:'Book Sale', display_value:'Book Sale', parent:'Other'},
		{value:'Business Event', display_value:'Business Event', parent:'Other'},
		{value:'Children', display_value:'Children', parent:'Other'},
		{value:'Closings', display_value:'Closings', parent:'Other'},
		{value:'Community Awareness', display_value:'Community Awareness', parent:'Other'},
		{value:'Community Conversation', display_value:'Community Conversation', parent:'Other'},
		{value:'Computer Class', display_value:'Computer Class', parent:'Other'},
		{value:'Craft', display_value:'Craft', parent:'Other'},
		{value:'Evento en Español', display_value:'Evento en Español', parent:'Other'},
		{value:'Exhibit', display_value:'Exhibit', parent:'Other'},
		{value:'Friends Event', display_value:'Friends Event', parent:'Other'},
		{value:'Gaming', display_value:'Gaming', parent:'Other'},
		{value:'Gardening', display_value:'Gardening', parent:'Other'},
		{value:'Gee\'s Bend (P)', display_value:'Gee\'s Bend (P)', parent:'Other'},
		{value:'Genealogy', display_value:'Genealogy', parent:'Other'},
		{value:'Go Green', display_value:'Go Green', parent:'Other'},
		{value:'Growing Savers', display_value:'Growing Savers', parent:'Other'},
		{value:'Health and Wellness', display_value:'Health and Wellness', parent:'Other'},
		{value:'Holiday Programs', display_value:'Holiday Programs', parent:'Other'},
		{value:'Job and Career', display_value:'Job and Career', parent:'Other'},
		{value:'Let\'s Speak English', display_value:'Let\'s Speak English', parent:'Other'},
		{value:'Local History', display_value:'Local History', parent:'Other'},
		{value:'Maker', display_value:'Maker', parent:'Other'},
		{value:'Meetings', display_value:'Meetings', parent:'Other'},
		{value:'Movies', display_value:'Movies', parent:'Other'},
		{value:'Multicultural', display_value:'Multicultural', parent:'Other'},
		{value:'Nature', display_value:'Nature', parent:'Other'},
		{value:'NONE', display_value:'NONE', parent:'Other'},
		{value:'OneBook', display_value:'OneBook', parent:'Other'},
		{value:'ongoing (P)', display_value:'ongoing (P)', parent:'Other'},
		{value:'Performance', display_value:'Performance', parent:'Other'},
		{value:'Sew Divine', display_value:'Sew Divine', parent:'Other'},
		{value:'Staff Training (P)', display_value:'Staff Training (P)', parent:'Other'},
		{value:'STEM/STEAM', display_value:'STEM/STEAM', parent:'Other'},
		{value:'Storytime', display_value:'Storytime', parent:'Other'},
		{value:'Summer Learning Challenge', display_value:'Summer Learning Challenge', parent:'Other'},
		{value:'Summer Reading Club', display_value:'Summer Reading Club', parent:'Other'},
		{value:'Teens', display_value:'Teens', parent:'Other'},
		{value:'Webinar (P)', display_value:'Webinar (P)', parent:'Other'},
		{value:'Workshop', display_value:'Workshop', parent:'Other'}
	];
    
	_.each(list,function(item){
		item.kind = 'category';
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
