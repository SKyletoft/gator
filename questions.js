const hiddenSentence = [
	"59°58'44.5\"N_15°26'35.2\"E",
	"59°58'27.3\"N_15°27'19.1\"E",
	"59°58'51.5\"N_15°27'7.1\"E",
	"59°58'57.8\"N_15°26'50.2\"E"
];
const questionOrder = [
	[34, 30, 17, 35, 18, 40, 31, 6, 32, 8, 9, 10, 33, 12, 19, 26],
	[27, 28, 17, 36, 18, 39, 21, 6, 22, 8, 9, 10, 29, 12, 25, 26],
	[15, 16, 17, 37, 18, 38, 21, 6, 22, 8, 9, 10, 23, 12, 24, 14],
	[15,  0,  1,  2,  3,  4,  5, 6,  7, 8, 9, 10, 11, 12, 13, 14],
];

const questions = [
	{ // 0
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vad är ett annat ord för gredelin?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/lila/) != null;
		}
	},
	{ // 1
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Hur många trianglar?<br><img src='https://1.bp.blogspot.com/-5xv6Cg1yhFo/VNLXEhuYiXI/AAAAAAAAAXw/dNgNTrE4G5M/s1600/image002.gif' width='250'/>"
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "28";
		}
	},
	{ // 2
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "<img src=\"assets/car number.png\"/>";
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "87";
		}
	},
	{ // 3
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Ladda upp en bild på er patrull där ni lagar tigerkaka till era ledare!<br><a href=\"https://www.ica.se/recept/tigerkaka-719813/\">[Exempelrecept]</a>";
			document.getElementById("inputbox").setAttribute("type", "file");
		},
		validateAnswer: function () {
			const imageformats = [".png", ".jpg", "jpeg", ".gif", "tiff", ".bmp"]
			let text = lowerCaseInput();
			text = text.substr(text.length - 4);
			return imageformats.includes(text);
		}
	},
	{ // 4
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Identifiera följande löv<br/><img src=\"assets/blad/utmanare.png\" id=\"leaves\"/>";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const ans = [
				/körsbär/,
				/äpp/,
				/päron/
			];
			const input = lowerCaseInput().split(" ");
			if (input.length != ans.length) {
				return false;
			}
			for (let i = 0; i < 3; i++) {
				if (input[i].match(ans[i]) === null) {
					console.log("failed at ", i);
					return false;
				}
			}
			return true;
		}
	},
	{ // 5
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Hur mycket är dubbelt av hälften av tvåhundrafemtio?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "250" || input === "tvåhundrafemtio";
		}
	},
	{ // 6
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vilket år kom scouting till Sverige?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "1910" || input === "nittontio";
		}
	},
	{ // 7
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Skriv en scoutlag<br><i>Var noga med stavningen</i>";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			const laws = [
				/söker sin tro och respekterar andras/,
				/är ärlig och pålitlig/,
				/är vänlig och hjälpsam/,
				/visar hänsyn och är en god kamrat/,
				/möter svårigheter med glatt humör/,
				/möter svårigheter med gott humör/,
				/lär känna och vårdar naturen/,
				/känner ansvar för sig själv och andra/
			];
			let matches = 0;
			laws.forEach((law) => {
				if (input.match(law)) {
					matches++;
				}
			});
			return matches > 0;
		}
	},
	{ // 8
		generateText: function () {
			document.getElementById("questionLabel").innerText = "Ta en \"Gäster med gester\"-bild i enighet med scoutlag #4";
			document.getElementById("inputbox").setAttribute("type", "file");
		},
		validateAnswer: function () {
			const imageformats = [".png", ".jpg", "jpeg", ".gif", "tiff", ".bmp"]
			let input = lowerCaseInput()
			input = input.substr(input.length - 4);
			return imageformats.includes(input);
		}
	},
	{ // 9
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vad är det för symbol på taket av byggnaden 59°21’12.4”N 18°24’22.6”E?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/triang/) != null;
		}
	},
	{ // 10
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Bättre lyss till den sträng som brast, än att aldrig ha spänt en ______";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/båge/) != null;
		}
	},
	{ // 11
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "En man kom in på en restaurang och sa endast en bokstav. Vad beställde han?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "t";
		}
	},
	{ // 12
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Bilda ett ord av de bokstäverna som hamnar i de blåa rutorna<br/><a href=\"assets/musikkorsord.xlsx\">Korsord [Excel-fil]</a>";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/kluringar/) != null;
		}
	},
	{ // 13
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "I vilket landskap ligger Kopparbo?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/dalarna/) != null;
		}
	},
	{ // 14
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vilken är näst den vanligaste bokstaven i svenska språket?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "a";
		}
	},
	{ // 15
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "<audio controls><source src='assets/morseUtmanare.wav' type='audio/wav'>Your browser does not support the audio element.<br>Does any modern browser not support audio? Kom igen, det är 2019!</audio>";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "var uppmärksam på vad som händer" || input === "var uppmarksam pa vad som hander";
		}
	},
	{ // 16
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vilken färg får man av att blanda gult och rött?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/orange/) != null ||
				input.match(/brandgul/) != null;
		}
	},
	{ // 17
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Hur många kvadrater?<br><img src='https://mattemarknaden.files.wordpress.com/2014/10/1016741_783962828327021_4784829287177453249_n.png' width='250'/>"
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "8";
		}
	},
	{ // 18
		generateText: function () {
			document.getElementById("questionLabel").innerText = "Baka en sockerkaka till era ledare och ladda upp ett foto";
			document.getElementById("inputbox").setAttribute("type", "file");
		},
		validateAnswer: function () {
			const imageformats = [".png", ".jpg", "jpeg", ".gif", "tiff", ".bmp"]
			let input = lowerCaseInput()
			input = input.substr(input.length - 4);
			return imageformats.includes(input);
		}
	},
	{ // 19
		generateText: function () {
			document.getElementById("questionLabel").innerText = "Ta en bild på en tamoj!";
			document.getElementById("inputbox").setAttribute("type", "file");
		},
		validateAnswer: function () {
			const imageformats = [".png", ".jpg", "jpeg", ".gif", "tiff", ".bmp"]
			let input = lowerCaseInput()
			input = input.substr(input.length - 4);
			return imageformats.includes(input);
		}
	},
	{ // 20
		//löv
	},
	{ // 21
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vad är PIs första åtta decimaler?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			const piString = Math.PI.toString().substr(2, input.length);
			return input === piString;
		}
	},
	{ // 22
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vilka är de 14 målspåren?<br><i>Var noga med stavningen</i>";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			const laws = [
				/ta hand om sin kropp/,
				/fysiska utmaningar/,
				/förståelse för omvärlden/,
				/känsla för naturen/,
				/aktiv i samhället/,
				/relationer/,
				/aktiv i gruppen/,
				/ledarskap/,
				/problemlösning/,
				/fantasi och kreativt uttryck/,
				/kritiskt tänkande/,
				/egna värderingar/,
				/existens/,
				/självinsikt och självkänsla/
			];
			let matches = 0;
			laws.forEach((law) => {
				if (input.match(law)) {
					matches++;
				} else {
					console.log("failed: " + law.toString());
				}
			});
			return matches == laws.length;
		}
	},
	{ // 23
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "En frukt- och grönsakshandlare är 54 år gammal, 175 cm lång och har 43 i skonummer? Vad väger han?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			const laws = [
				/frukt/,
				/grönt/,
				/grönsak/,
				/78.3 kg/
			];
			let matches = 0;
			laws.forEach((law) => {
				if (input.match(law)) {
					matches++;
				}
			});
			return matches > 0;
		}
	},
	{ // 24
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vad är Dalarnas landskapsdjur?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/berguv/) != null;
		}
	},
	{ // 25
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vad är Dalarnas landskapblomma?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/blåklocka/) != null;
		}
	},
	{ // 26
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vad är svenskans vanligaste bokstav?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input == "e";
		}
	},
	{ // 27
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "ydu xsspbunvdp sa doow (3)<br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Retrato_de_Julio_C%C3%A9sar_%2826724093101%29.jpg/800px-Retrato_de_Julio_C%C3%A9sar_%2826724093101%29.jpg', height=350 tooltip='3'/>";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/var uppmärksam på allt/) != null;
		}
	},
	{ // 28
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vad får du om du blandar gul och blå?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/grön/) != null;
		}
	},
	{ // 29
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Från vilken del av Polen kommer Jultomten?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/nor/) != null && input.match(/polen/) != null;
		}
	},
	{ // 30
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vilken färg får du om du blandar vitt och rött";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/rosa/) != null;
		}
	},
	{ // 31
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Hur många scoutlagar finns det";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "7";
		}
	},
	{ // 32
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Hur många målspår finns det inom scouterna";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "14";
		}
	},
	{ // 33
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Hur skriver man vatten med två bokstäver?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/is/) != null;
		}
	},
	{ // 34
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "<img src='assets/bradgard.png' />";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/var uppmärksam på allt/) != null;
		}
	},
	{ // 35
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vilken färg har himlen när du står på månen?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/svart/) != null;
		}
	},
	{ // 36
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "10 guldfiskar i en skål, två dör, tre simmar iväg, 4 drunknar. Hur många fiskar är det kvar i skålen?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "10";
		}
	},
	{ // 37
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "<img src='https://www.humorbibeln.se/wp-content/uploads/sites/4/2019/10/visning9mistag.jpg' width='80%'/>";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			const laws = [
				/mistaget/,
				/misstaget/,
				/ s/,
				/"s"/
			];
			let matches = 0;
			laws.forEach((law) => {
				if (input.match(law)) {
					matches++;
				}
			});
			return matches > 0;
		}
	},
	{ // 38
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Identifiera följande löv<br><i>Var noga med stavningen</i><br><i>(Träd1, träd2, träd3...)</i><br/><img src=\"assets/blad/aventyrare.png\" id=\"leaves\"/>";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const ans = [
				/ek/,
				/ask/,
				/lönn/,
				/bok/,
				/björk/,
				/al/,
				/rönn/
			];
			const input = lowerCaseInput().split(" ");
			if (input.length != ans.length) {
				return false;
			}
			for (let i = 0; i < ans.length; i++) {
				if (input[i].match(ans[i]) === null) {
					console.log("failed at ", i);
					return false;
				}
			}
			return true;
		}
	},
	{ // 39
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Namnge blommorna i följande ordning:<br><i>Var noga med stavningen</i><br><i>(Blomma1, blomma2, blomma3...)</i><br/><img src=\"assets/blad/upptackare.png\" id=\"leaves\"/>";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const ans = [
				/näckros/,
				/linnea/,
				/skogsstjärna/,
				/liljekonvalj/,
				/förgätmigej/,
				/styvmorsviol/,
				/gullviva/,
				/blåklint/,
				/blåklocka/
			];
			const input = lowerCaseInput().split(" ");
			if (input.length != ans.length) {
				return false;
			}
			let used_white = false;
			for (let i = 0; i < ans.length; i++) {
				if (input[i].match(ans[i]) === null) {
					if (input[i].match(ans[i]) != null && !used_white) {
						used_white = true;
					} else {
						console.log("failed at ", i);
						return false;
					}
				}
			}
			return true;
		}
	},
	{ // 40
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Identifiera följande blommor i rätt ordning<br><i>Var noga med stavningen</i><br><i>(Blomma1, blomma2, blomma3...)</i><br/><img src=\"assets/blad/sparare.png\" id=\"leaves\"/>";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const ans = [
				/maskros/,
				/blåklocka/,
				/prästkrage/,
				/blåsippa/,
				/smörblomma/,
				/näckros/,
				/skogsstjärna/,
				/gullviva/,
				/blåklint/,
				/liljekonvalj/
			];
			const input = lowerCaseInput().split(" ");
			if (input.length != ans.length) {
				return false;
			}
			let used_white = false;
			for (let i = 0; i < ans.length; i++) {
				if (input[i].match(ans[i]) === null) {
					if (input[i].match(ans[i]) != null && !used_white) {
						used_white = true;
					} else {
						console.log("failed at ", i);
						return false;
					}
				}
			}
			return true;
		}
	},
];

/*
TEMPLATE
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return ();
		}
	}
*/