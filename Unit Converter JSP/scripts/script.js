

	function CelsiusConverter(event){
		event.preventDefault();
		let degreef = document.getElementById("Input").value.toUpperCase();
		var convert = (degreef-32)*5/9;
		document.getElementById("wordBox").innerHTML= convert.toString()+ " Celsius";
	
		}
		
	function lbsToKilo(event){
		event.preventDefault();
		var lbs = document.getElementById("Input2").value.toUpperCase();
		var convert =lbs/2.205;
		document.getElementById("wordBox2").innerHTML= convert.toString()+ " Kilos";
	}
	
	function MilestoAU(event){
		event.preventDefault();
		var miles = document.getElementById("Input3").value.toUpperCase();
		var convert =miles/9.296e+7;
		document.getElementById("wordBox3").innerHTML= convert.toString()+ " Astronomical Units";
	}
	
	function InchToMiles(event){
		event.preventDefault();
		var inch = document.getElementById("Input4").value.toUpperCase();
		var convert = inch/63360;
		document.getElementById("wordBox4").innerHTML= convert.toString()+ " Miles";
	}
	

	document.getElementById("converter1").addEventListener("submit", CelsiusConverter);
	document.getElementById("converter2").addEventListener("submit", lbsToKilo);
	document.getElementById("converter3").addEventListener("submit", MilestoAU);
	document.getElementById("converter4").addEventListener("submit", InchToMiles);
	

