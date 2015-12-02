if (Types.find().count() === 0) {
	
	var allTypes = [
		'Affordable Care Act',
		'Art in the Library',
		'Augusta Baker\'s Dozen',
		'Author Event',
		'Black History Month',
		'Book Group',
		'Book Sale',
		'Business Event',
		'Children',
		'Closings',
		'Community Awareness',
		'Community Conversation',
		'Computer Class',
		'Craft',
		'Evento en Español',
		'Exhibit',
		'Friends Event',
		'Gaming',
		'Gardening',
		'Gee\'s Bend (P)',
		'Genealogy',
		'Go Green',
		'Growing Savers',
		'Health and Wellness',
		'Holiday Programs',
		'Job and Career',
		'Let\'s Speak English',
		'Local History',
		'Maker',
		'Meetings',
		'Movies',
		'Multicultural',
		'Nature',
		'NONE',
		'OneBook',
		'ongoing (P)',
		'Performance',
		'Sew Divine',
		'Staff Training (P)',
		'STEM/STEAM',
		'Storytime',
		'Summer Learning Challenge',
		'Summer Reading Club',
		'Teens',
		'Webinar (P)',
		'Workshop'
	];
	_.each(allTypes,function(thisType){
		Types.insert({value: thisType});
	});
}