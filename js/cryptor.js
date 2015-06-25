encryptionType = document.getElementById('encryptionType')
encryptionOptions = document.getElementById('encryptionOptions')

function optionPanel(){
	if (encryptionType.value == "1") {
		document.getElementById('encryptionOptions').innerHTML = "<label for='shiftAmount' class=''>Shift Amount:</label><input id='shiftAmount' class='form-control' type='text' placeholder='Example: 1'>"
	} else {
		document.getElementById('encryptionOptions').innerHTML = "<label for='keyWord' class=''>Key Word:</label><input id='keyWord' class='form-control' type='text' placeholder='Enter key word...'>"
	};
}

function getMethod(x){
	result = document.getElementById('result')

	if (encryptionType.value == "1") {
		shift = document.getElementById('shiftAmount').value
		result.innerHTML = caesarShift(shift,x);
	} else if (encryptionType.value == "2") {
		keyWord = document.getElementById('keyWord').value
		result.innerHTML = polyAlphabetic(keyWord,x)
	};
}

function caesarShift(shift,x){
	message = document.getElementById('message').value
	shift = parseInt(shift)
	result = ""
	if (x == "1") {
		shift = -shift
	};
	shift = parseInt(shift)
	for (var i = 0; i <= message.length - 1; i++) {
		if (message.charAt(i) == " ") {
			result = result + " "
		} else {
			result = result + number2letter(parseInt(letter2number(message.charAt(i))) + shift)
		};
	};
	return result;
}

function polyAlphabetic(keyWord,x){
	message = document.getElementById('message').value
	result=""
	for (var i = 0; i <= message.length - 1; i) {
		for (var j = 0; j <= keyWord.length - 1; j++) {
			if (i > message.length - 1) {
				break
			} else if (message.charAt(i) == " ") {
				result = result + " "
				j = j - 1
			} else {
				if (x == "1") {
					result = result + number2letter(parseInt(letter2number(message.charAt(i)) - letter2number(keyWord.charAt(j))))
				} else {
					result = result + number2letter(parseInt(letter2number(message.charAt(i)) + letter2number(keyWord.charAt(j))))
				};
			};
			i += 1
		};
	};
	return result;
}

/*
function NEXT(data,x){
	if (x == "1") {
		result = result +
	} else {
		result = result +
	};
	return result;
}
*/

function letter2number(letter){
	if (letter == "a" || letter == "A") {
		return 0
	} else if (letter == "b" || letter == "B") {
		return 1
	} else if (letter == "c" || letter == "C") {
		return 2
	} else if (letter == "d" || letter == "D") {
		return 3
	} else if (letter == "e" || letter == "E") {
		return 4
	} else if (letter == "f" || letter == "F") {
		return 5
	} else if (letter == "g" || letter == "G") {
		return 6
	} else if (letter == "h" || letter == "H") {
		return 7
	} else if (letter == "i" || letter == "I") {
		return 8
	} else if (letter == "j" || letter == "J") {
		return 9
	} else if (letter == "k" || letter == "K") {
		return 10
	} else if (letter == "l" || letter == "L") {
		return 11
	} else if (letter == "m" || letter == "M") {
		return 12
	} else if (letter == "n" || letter == "N") {
		return 13
	} else if (letter == "o" || letter == "O") {
		return 14
	} else if (letter == "p" || letter == "P") {
		return 15
	} else if (letter == "q" || letter == "Q") {
		return 16
	} else if (letter == "r" || letter == "R") {
		return 17
	} else if (letter == "s" || letter == "S") {
		return 18
	} else if (letter == "t" || letter == "T") {
		return 19
	} else if (letter == "u" || letter == "U") {
		return 20
	} else if (letter == "v" || letter == "V") {
		return 21
	} else if (letter == "w" || letter == "W") {
		return 22
	} else if (letter == "x" || letter == "X") {
		return 23
	} else if (letter == "y" || letter == "Y") {
		return 24
	} else if (letter == "z" || letter == "Z") {
		return 25
	};
}

function number2letter(number){
	if (number > 26) {
		number = number - 26
	} else if (number < 0) {
		number = number + 26
	};
	switch (number) {
		case 0:
			return "a"
		case 1:
			return "b"
		case 2:
			return "c"
		case 3:
			return "d"
		case 4:
			return "e"
		case 5:
			return "f"
		case 6:
			return "g"
		case 7:
			return "h"
		case 8:
			return "i"
		case 9:
			return "j"
		case 10:
			return "k"
		case 11:
			return "l"
		case 12:
			return "m"
		case 13:
			return "n"
		case 14:
			return "o"
		case 15:
			return "p"
		case 16:
			return "q"
		case 17:
			return "r"
		case 18:
			return "s"
		case 19:
			return "t"
		case 20:
			return "u"
		case 21:
			return "v"
		case 22:
			return "w"
		case 23:
			return "x"
		case 24:
			return "y"
		case 25:
			return "z"
	}
}