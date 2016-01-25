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

function letterCount(string) {
	var count = 0
	var mostRepeats = ""
	var stringArray = string.split(" ")
	for(i = 0; i < stringArray.length; i++) {
		var innerCount = 0
		var letters = stringArray[i].split("")
		for(n = 0; n < letters.length; n++) {
			for(x = (n + 1); x < letters.length; x++) {
				if(letters[n] === letters[x]) {
					innerCount += 1
				}
			}
		}
		if(innerCount > count) {
			count = innerCount
			innerCount = 0
			mostRepeats = stringArray[i]
		}	
	}
	return mostRepeats
}













