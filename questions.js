const hiddenSentence = "59°58´57.8”N 15°26´50.2”E";

const questions = [
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vad är ett annat ord för gredelin?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			return (
				document.getElementById("inputbox")
					.value
					.toLowerCase()
					.match(/lila/)
					.length >
				0
			);
		},
		nextQuestion: 1
	},
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Hur många trianglar? (24st)<br><img src='https://1.bp.blogspot.com/-5xv6Cg1yhFo/VNLXEhuYiXI/AAAAAAAAAXw/dNgNTrE4G5M/s1600/image002.gif' width='250'/>"
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			return (
				document.getElementById("inputbox")
					.value ===
				"24"
			);
		},
		nextQuestion: 2
	},
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Ursäkta, va? \"Flytta tändstickor\". Whatever that means";
		},
		validateAnswer: function () {
			return true;
		},
		nextQuestion: 3
	},
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Ladda upp en bild på er patrull där ni lagar tigerkaka till era ledare!<br><a href=\"https://www.ica.se/recept/tigerkaka-719813/\">[Exempelrecept]</a>";
			document.getElementById("inputbox").setAttribute("type", "file");
		},
		validateAnswer: function () {
			const imageformats = [".png", ".jpg", "jpeg", ".gif", "tiff", ".bmp"]
			let text = document.getElementById("inputbox")
				.value
				.toString()
				.substr(text.length - 4);
			if (imageformats.indexOf(text) != -1) {
				return true;
			}
			return false;
		},
		nextQuestion: 4
	},
	{
		generateText: function () {
			//Löv
		},
		validateAnswer: function () {
			return true;
		},
		nextQuestion: 5
	},
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Hur mycket är dubbelt av hälften av 250?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			return (
				document.getElementById("inputbox")
					.value ===
				"250" ||
				document.getElementById("inputbox")
					.value
					.toLowerCase ===
				"tvåhundrafemtio"
			);
		},
		nextQuestion: 6
	},
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vilket år kom scouting till Sverige?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			return (
				document.getElementById("inputbox")
					.value ===
				"1983" ||
				document.getElementById("inputbox")
					.value
					.toLowerCase() ===
				"nittonåttiotre"
			);
		},
		nextQuestion: 7
	},
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Skriv en scoutlag";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			let input = document.getElementById("inputbox")
				.value
				.toLowerCase();
			const laws = "en scout söker sin tro och respekterar andras en scout är ärlig och pålitlig en scout är vänlig och hjälpsam en scout visar hänsyn och är en god kamrat en scout möter svårigheter med glatt humör en scout möter svårigheter med gott humör en scout lär känna och vårdar naturen en scout känner ansvar för sig själv och andra";
			return ( // Accepts "en", "och", "är" and so on?
				laws.match(input.toLowerCase()).length > 0
			);
		},
		nextQuestion: 0
	}
];

/*
TEMPLATE
    {
        generateText: function () {
            document.getElementById("questionLabel").innerHTML = "";
            document.getElementById("inputbox").setAttribute("type", "text");
        },
        validateAnswer: function () {
            return ();
        },
        nextQuestion: 0
    }
    
*/

const questionsOLD = [
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vad säger morsen?<br><audio controls><source src='assets/morse.wav' type='audio/wav'>Your browser does not support the audio element.</audio>";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			return document.getElementById("inputbox").value === "HEJ";
		},
		nextQuestion: 1
	},
	{
		generateText: function () {
			document.getElementById("questionLabel").innerText = "Ladda upp en bild!";
			document.getElementById("inputbox").setAttribute("type", "file");
		},
		validateAnswer: function () {
			const imageformats = [".png", ".jpg", "jpeg", ".gif", "tiff", ".bmp"]
			let text = document.getElementById("inputbox").value.toString()
			text = text.substr(text.length - 4);
			console.log(text);
			if (imageformats.indexOf(text) != -1) {
				return true;
			}
			return false;
		},
		nextQuestion: 2
	},
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Hur många trianglar? (24st)<br><img src='https://1.bp.blogspot.com/-5xv6Cg1yhFo/VNLXEhuYiXI/AAAAAAAAAXw/dNgNTrE4G5M/s1600/image002.gif' width='250'/>";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			if (document.getElementById("inputbox").value === "24") {
				return true;
			}
			return false;
		},
		nextQuestion: 0
	}
];
