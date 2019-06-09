function subtractDays(d1, m1, y1, d2, m2, y2) {
	//get date object
	date1 = new Date(y1, m1, d1);
	date2 = new Date(y2, m2, d2);
	
	//convert to miliseconds
	var date1_ms = date1.getTime();
	var date2_ms = date2.getTime();
	
	//get one day in miliseconds
	var oneDay=1000*60*60*24;
	
	//get the date variation
	var dif_ms = date2_ms - date1_ms;
	
	//return the integer days difference
	return Math.round(dif_ms/oneDay); 
}