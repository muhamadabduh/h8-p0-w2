//1. Let's form a sentence

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(
	word +
		' ' +
		second +
		' ' +
		third +
		' ' +
		fourth +
		' ' +
		fifth +
		' ' +
		sixth +
		' ' +
		seventh
);

// 2. Index Accessing -1 by 1

var word1 = 'wow JavaScript is so cool';
var exampleFirstWord = word1[0] + word1[1] + word1[2];
var secondWord = word1[4] + word1[5] + word1[6] + word1 [7] + word1[8] + word1[9] + word1 [10] + word1[11] + word1[12] + word1[13]; 
var thirdWord =  word1[15] + word1[16]; 
var fourthWord = word1[18] + word1[19]; 
var fifthWord = word1[21] + word1[22] + word1[23] + word1[24]; 

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// 3. Breaking sentence again using substring
var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(3,13); 
var thirdWord3 = word3.substring(12,14); 
var fourthWord3 = word3.substring(14,16); 
var fifthWord3 = word3.substring(16,20); 

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// 4. Breaking Sentence (yet Again) and Count Each Length
var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(3,13); 
var thirdWord4 = word4.substring(12,14); 
var fourthWord4 = word4.substring(14,16); 
var fifthWord4 = word4.substring(16,20);

var firstWordLength = exampleFirstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;


console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord+ ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord+ ', with length: ' +thirdWordLength );
console.log('Fourth Word: ' + fourthWord+ ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord+ ', with length: ' + fifthWordLength );