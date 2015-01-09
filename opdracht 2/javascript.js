var leerlingen = [
	["1006700","Faissal Aboussi", 		"1006700"],
	["1004920","jasper oosterbroek", 	"1004920"],
	["1004161","Soubhi Belhaj", 		"1004161"],
	["1003443","Tom Boerop", 			"1003443"],
	["1015621","Jens Bouman", 			"1015621"],
	["1004378","Antony Bruynzeel", 		"1004378"],
	["1015159","Keanau Ching", 			"1015159"],
	["1003974","Pascal Dros", 			"1003974"],
	["88192",  "Oussama Fahchouch", 	"88192"],
	["1004470","Jessi Gomes Varela", 	"1004470"],
	["69907",  "Darryl Gopal", 			"69907"],
	["1011527","Leon van den Heuvel", 	"1011527"],
	["1012069","Simon Hoogeveen", 		"1012069"],
	["1012855","Pim Koekoek", 			"1012855"],
	["1015622","Bob van Leeuwen", 		"1015622"],
	["1015336","Denzel Lubbers", 		"1015336"],
	["1013822","Wiktor Lukasiewicz", 	"1013822"],
	["1009826","Menno de Mooij", 		"1009826"],
	["1015310","Hilario Oliveira Sanca","1015310"],
	["1004920","Jasper Oosterbroek", 	"1004920"],
	["1014029","Jelle Streekstra", 		"1014029"],
	["81648",  "Faouzi Tatou", 			"81648"],
	["1004502","Dennis van Waas", 		"1004502"],
	["1013045","Mike van Waas", 		"1013045"],
	["1015533","Frank van Woerden", 	"1015533"],
	["Admin", "Admin", "Admin"]
	];//comment

var myArray = [];

function input(){
	var llnummer = document.getElementById("nummer");
	var llwachtwoord = document.getElementById("wachtwoord");
	var nieuwnummer = localStorage.getItem("Localnummer");
	var nieuwwachtwoord =  localStorage.getItem("Localwachtwoord");
	var nieuwnaam = localStorage.getItem("Localnaam");
	var npassnaam = localStorage.getItem("npassnaam");
	var npass = localStorage.getItem("npass");

	leerlingen.push([nieuwnummer, nieuwnaam, nieuwwachtwoord]);

	console.log(llwachtwoord.value);
	console.log(npass);

	for( var i = 0; i < leerlingen.length; i++){
		if(llnummer.value == leerlingen[i][0]){
			if(npass != null){
				leerlingen[i][2] = npass;
				console.log(leerlingen[i][2]);
				localStorage.removeItem("npass");

				if(llwachtwoord.value == leerlingen[i][2]){
					window.location.href = "Hoofdpagina.html" + "?" + leerlingen[i][1]
					alert("Hallo " + leerlingen[i][1]);					
				}
				else{
					alert("Verkeerd wachtwoord ingevoerd.");
				}
			}else{
				console.log(leerlingen[i][2])
				if(llwachtwoord.value == leerlingen[i][2]){
					window.location.href = "Hoofdpagina.html" + "?" + leerlingen[i][1]
					alert("Hallo " + leerlingen[i][1]);					
				}
				else{
					alert("Verkeerd wachtwoord ingevoerd.");
				}
			}
		}
	}
	return false;
}
function gegevens(){
	var url = window.location.href.split("?");
	url = decodeURIComponent(url[1]);
	document.write("<div class='gegevens'><div id='gegevennaam'>" + url + "</div>");
	document.write("<a href='Home.html' id='afmelden'>" + "Afmelden" + "</a></div>");

	if (url == "Admin") {
		document.write("<form method='post' onsubmit='return toevoegen()'>")
		document.write("<div class='invoer'>Leerlingnummer: " + "<input type='text' class='input' id='leerlingnummer'><br>");
		document.write("Naam: " + " <input type='text' class='input' id='naam'><br>");
		document.write("Wachtwoord: " + "<input type='password' class='input' id='wachtwoord'></div>");
		document.write("<input type='submit' value='Maak aan' id='submit'></form>")
		document.write("<input type='button' value='reset' onclick='reset()' id='reset'>")
	};

	if (url != "Admin") {
		document.write("<form method='post' onsubmit='return passchange()'>")
		document.write("<div class='invoer'>Huidige wachtwoord: " + "<input type='password' class='input' id='hpass'><br>");
		document.write("Nieuwe wachtwoord: " + "<input type='password' class='input' id='npass'></div>");
		document.write("<input type='submit' value='Verander Wachtwoord' id='submit'></form>");
		document.write("<input type='button' value='Reset wachtwoord' onclick='resetww()' id='reset'>")
	};
}

function toevoegen(){
	var leerlingnummer = document.getElementById("leerlingnummer");
	var naam = document.getElementById("naam");
	var wachtwoord = document.getElementById("wachtwoord");
	localStorage.setItem("Localnummer", leerlingnummer.value);
	localStorage.setItem("Localnaam", naam.value);
	localStorage.setItem("Localwachtwoord", wachtwoord.value);
	console.log(leerlingnummer.value + naam.value + wachtwoord.value);
}

function reset(){
	localStorage.clear();
}

function passchange(){
	var url = window.location.href.split("?");
	url = decodeURIComponent(url[1]);

	var hpass = document.getElementById("hpass").value;
	var npass = document.getElementById("npass").value;
	var npassnaam = url

	for( var l = 0; l < leerlingen.length; l++){
		if (hpass == leerlingen[l][2]) {
			localStorage.setItem("npass", npass);	
		}else{
			if(leerlingen[l][1] == url){
			alert("Het ingevoerde huidige wachtwoord is niet correct")
			}
		}
	}

	console.log(npass)
	console.log(npassnaam)
	localStorage.setItem("npassnaam", npassnaam)
	localStorage.setItem("hpass", hpass);

}

function resetww(){
	var npass = localStorage.getItem("npass");
	var npassnaam = localStorage.getItem("npassnaam");

	for(var k = 0; k < leerlingen.length; k++){
		if(leerlingen[k][1] == npassnaam){
			npass = leerlingen[k][0];
		}
	}

	localStorage.setItem("npass", npass)
}
