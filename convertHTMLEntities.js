/*Bonfire: Convert HTML Entities. Solved by Alexander Black on 01/12/16. Convert the characters &, <, >, " 
(double quote), and ' (apostrophe), in a string to their corresponding HTML entities.*/
 
function convert(str) {
  	function replaceCharacters(match){
		  for(var i = 0; i < match.length; i++){
			if(match[i] === "&"){
			  return "&amp;";
			}else if(match[i] === "<"){
			  return "&lt;";
			}else if(match[i] === ">"){
			  return "&gt;";
			}else if(match[i] === "'"){
			  return "&apos;"; 
			}else if(match[i] === "\""){
			  return "&quot;";
			}else{
			  continue;
			}
		 }  
	  }
	  var output = str.replace(/[^a-z ]/ig, replaceCharacters);
	  return output;
}

convert("Dolce & Gabbana");
