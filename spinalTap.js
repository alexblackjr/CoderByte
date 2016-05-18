/*Solved by Alexander Black on 01/11/16. Bonfire: Spinal Tap Case.Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
	if(str.indexOf(" ") >= 0 || str.indexOf("_") >= 0){
        str = str.toLowerCase();
        str = str.replace(/[^a-z]/g,"-");
        return str;
    }else{  
		function hyphenThenLowered(match){
            return '-' + match.toLowerCase();
        }  
        return str.replace(/[A-Z]/g,hyphenThenLowered);
    }
}

spinalCase("thisIsSpinalTap");