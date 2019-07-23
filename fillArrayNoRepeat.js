function fillArrayNoRepeat(x, randomMax){
	//we want randomMax-1 because it is sort of "flooring" down the floats to ints
	randomMax = randomMax - 1;
	var templist = [1.1]; // 1.1 is just a placeholder
	var n = 1.1;
	
	var j = 0;
	var i = 0;
	while(i < x){
		//generate random int between 0 and randomMax-1
		n = Math.random();
		n = n*randomMax;
		n = Math.floor(n);
		
		//we do a while from the last added int to the first looking for duplicates
		j = i;
		while(templist[j] != n && j > 0){
			j--;
		}
		
		if (j == 0){
			//that means templist[i] isn't in the vector
			//then add it to the array
			templist[i] = n;
			i++;
		}
		
	}
	//returns the array
	return templist;
}
