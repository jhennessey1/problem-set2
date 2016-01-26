function firstReverse(string) {
	var newString = []
	var stringArray = string.split("")
	for(var i = (stringArray.length - 1); i >= 0; i--) {
		newString.push(stringArray[i])
	}
	return newString.join("")
}

function swapCase(string) {
	var stringArray = string.split("")
	var newString = []
	for(var i = 0; i < stringArray.length; i++) {
		if(stringArray[i] === stringArray[i].toUpperCase()) {
			newString.push(stringArray[i].toLowerCase())
		}
		else if(stringArray[i] === stringArray[i].toLowerCase()) {
			newString.push(stringArray[i].toUpperCase())
		}
		else {
			newString.push(stringArray[i])
		}
	}
	return newString.join("")
}

// function letterCount(string) {
// 	var count = 0
// 	var mostRepeats = ""
// 	var stringArray = string.split(" ")
// 	for(i = 0; i < stringArray.length; i++) {
// 		var innerCount = 0
// 		var letters = stringArray[i].split("")
// 		for(n = 0; n < letters.length; n++) {
// 			for(x = (n + 1); x < letters.length; x++) {
// 				if(letters[n] === letters[x]) {
// 					innerCount += 1
// 				}
				
// 			}
// 			if(innerCount > count) {
// 			count = innerCount
// 			innerCount = 0
// 			mostRepeats = stringArray[i]
// 		}	
// 	}
// 	return mostRepeats
// 	}
// }


// function letterCount(string) {
// 	stringArray = string.split(" ")
// 	var count = 0
// 	var mostRepeats = ""
// 	for(var i = 0; i < stringArray.length; i++) {
// 		var lettersArray = stringArray[i].split("")
// 		for(var n = 0; n < lettersArray.length; n++) {
// 			var innerCount = 0
// 			var repeatedLetters = []
// 			for(var x = (n + 1); x < lettersArray.length; x++) {
// 				repeatedLetters.push(lettersArray[n])
// 				if(lettersArray[n] === lettersArray[x]) {
// 					repeatedLetters.push(lettersArray[x])
// 				}
// 			}
// 			if(repeatedLetters.length > innerCount) {
// 				innerCount = repeatedLetters.length
// 				repeatedLetters = []
// 			}
// 		}
// 		if(innerCount > count) {
// 			count = innerCount
// 			innerCount = 0
// 			mostRepeats = stringArray[n]
// 		}
// 	}
// 	return mostRepeats
// }

var repeatLettersCount = function(word) {
	count = -1
	for(i = 0; i < word.length; i++) {
		innerCount = -1
		for(n = 0; n < word.length; n++) {
			if(word[n] === word[i]) {
				innerCount++
			}
		}
		if(innerCount > count) {
			count = innerCount
			innerCount = -1
		} 
		else {
			innerCount = -1
		}
	}
	return count
}




var letterCount = function(string) {
	var stringArray = string.split(" ")
	var mostRepeats = ""
	var count = 0
	for(var i = 0; i < stringArray.length; i++) {
		if(repeatLettersCount(stringArray[i]) > count) {
			count = repeatLettersCount(stringArray[i])
			mostRepeats = stringArray[i]
		}
	}
	if(mostRepeats.length > 0) {
		return mostRepeats
	}
	else {
		return -1
	}
}


var test = letterCount("aa")

console.log(test)


















