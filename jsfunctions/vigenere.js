//this charset can be changed as you want
const charset = "abcdefghijklmnopqrstuvwxyz";

//convert character to number, so we can sum or subtract
var charToNumber = (character) => {
	i = 0;
	while (i < charset.length) {
		if(charset.charAt(i) == character){
			return i;
		}
	i++;
	}
	console.log('character not found');
}

//convert number to character, so we can build the characters from the math we are doing
var numberToChar = (number) => {
	// if the number is less than 0 it means that we are doing subtraction (in this case, decoding)
	// so we need to add the length of the charset to convert it
	if (number < 0) {
		number += charset.length;
	}
	// if the number is greater, do the remainder of it (modular arithmetic thing)
	// to get only a number between 0 and the charset.length (in this case, from a to z)
	if (number > charset.length-1) {
		return charset.charAt(number%charset.length);
	}
	//convert the number the processed number into a character
	return charset.charAt(number);
}

var sum = (char1, char2) => {
	//sum the two numbers and transform them into characters
	return numberToChar(charToNumber(char1) + charToNumber(char2));
}

var sub = (char1, char2) => {
	//subtract the two numbers and transform them into characters
	return numberToChar(charToNumber(char1) - charToNumber(char2));
}

var vigenere = (msg, key, isDecode) => {
	//msg is the message to be encoded/decoded
	//key is the key for de encode/decode
	//isDecode => false for encode, true for decode
	
	//parameter processing (we want to take off only the spaces on the key string)
	key = key.replace(/\s/g,'').toLowerCase();
	msg = msg.toLowerCase();
	
	//if there isn't a key, we need to stop, otherwise it will get "whiled true"
	if (key.length == 0){
		console.log("length of 2nd parameter is 0, it must have to be greater than 0");
		return;
	}
	//we need to make the key to be larger than the msg
	//this is because the method of vigenere uses this, and it is necessary to encode all the letters in the string
	var i = 0;
	while (key.length < msg.replace(/\s/g,'').length){
		key = key + key.charAt(i);
		i++;
	}
	
	var result = "", j = 0;
	i = 0;
	//we will use a function if it is false and other if it is true
	//so declare a variable and make it dependant on this "isDecode" variable
	var codeAction;
	if(isDecode == false) codeAction = sum;
	else codeAction = sub;
	
	//concatenate all the letters with this logic
	//if there is a space, jump to the next letter in key, that's why is used a "j" instead of "i"
	while(i < msg.length){
		//if the character is a space or something not in the "charset", just put a space instead
		if (charset.includes(msg.charAt(i))){
			result += codeAction(msg.charAt(i), key.charAt(j));
			j++;
		} else result += " ";
		i++;
	}
	//and return
	return result;
}
