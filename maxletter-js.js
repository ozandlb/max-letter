/* stringObj class */
function stringObj(inputString, destDivId) {

	this.inputString = inputString;

	this.destDivId = destDivId;
	
	
	/* method to return letter occuring most frequently */
	this.getMaxLetter = function() {
	
	  // first pass variables to track chars and frequencies
	  var trackstr = "";
	  var trackarr = [];
	
	  // regular expressions to only process letters
	  var regExpPatt = /[a-zA-Z]/;
	  var regExpUpper = /[A-Z]/;
	
	  var newchar = "";
	
	  for (var i = 0; i < this.inputString.length; i++) {
	
		newchar = this.inputString.charAt(i);
	
		if ( regExpPatt.test(newchar) ) {
	
			// if uppercase, convert to lowercase 
			if ( regExpUpper.test(newchar) ) {
				newchar = newchar.toLowerCase(); 
			}
	
			// if not in the original string, add new to tracker array and string
			if (trackstr.indexOf(newchar) == -1) {
			  trackarr[trackstr.length] = 1;
			  trackstr += newchar;
			}
		
			// if already in tracker array and string, increment array at char index
			else {
			  trackarr[trackstr.indexOf(newchar)]++;
			}
		}
	  }
	
	  // second pass variables to track max frequency	
	  var maxLetterArr = [];
	  var maxNumFreq = 0;
	
	  for (var i = 0; i <trackstr.length; i++) {
	
		// if frequency of char is greater
		if (trackarr[i] > maxNumFreq) {
		  //reset array
		  maxLetterArr = [];
		  maxNumFreq = trackarr[i];
		  maxLetterArr[0] = trackstr.charAt(i);
		}
		
		else if (trackarr[i] === maxNumFreq)
		  maxLetterArr[maxLetterArr.length] = trackstr.charAt(i);    	
	  }
	
	  return maxLetterArr;
	} // end of getMaxLetter method


	/* method to print output */
	this.insertOutput = function() { 
		
		document.getElementById(this.destDivId).innerHTML = this.getMaxLetter().join(", ");
	}

} // end of stringObj constructor class



execMaxLetter = function (passedString, passedDiv) {

	thisString = new stringObj (passedString, passedDiv);
	thisString.insertOutput();

}


