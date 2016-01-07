Template.datePickerDay.helpers({
	active:function(){
		if(Session.get('date') === this.number){
			return 'active';
		}else{
			return '';
		}
	}
});
