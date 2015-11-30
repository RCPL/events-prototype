// http://host6.evanced.info/richland/evanced/eventsxml.asp?lib=all&nd=365&alltime=1&dm=exml

Meteor.methods({
	'importEvanced':function(){
		HTTP.call('GET','http://host6.evanced.info/richland/evanced/eventsxml.asp',
			{ params: {
				lib:'all',
				alltime:1,
				dm:'exml',
				nd:20
			}},
			function(xmlError,xmlResponse){
				if(xmlError){
					console.error('call to external xml error',xmlError);
				}else{
					console.log('xmlResponse',xmlResponse);
					xml2js.parseString(xmlResponse.content, {trim:true, explicitArray:false, emptyTag:undefined},function (jsError, jsResult) {
						if(jsError){
							console.error('xml2js error',jsError);
						}else{
							_.each(jsResult.event.item,function(eventItem){
								eventItem.iso_start = new Date(eventItem.date + ' ' + eventItem.time);
								eventItem.iso_end = new Date(eventItem.date + ' ' + eventItem.endtime);
								var existing = Events.findOne({id: eventItem.id});
								if(existing){
									if(existing.lastupdated != eventItem.lastupdated){
										console.log('updating event #',eventItem.id)
										Events.update({_id: existing._id},eventItem);
									}
								}else{
									console.log('new event #',eventItem.id)
									existing = Events.insert(eventItem);
								}
							});
						}
					});
				}
			}
		);
	}
});

if (Events.find().count() === 0) {
	Meteor.call('importEvanced');
}
