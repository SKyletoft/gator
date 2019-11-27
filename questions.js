const hiddenSentence = "59°58'57.8\"N_15°26'50.2\"E";
const questionOrder = [
	[],
	[],
	[],
	[14, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13]
];
const questionsByGroup = [
	questionOrder[0].length,
	questionOrder[1].length,
	questionOrder[2].length,
	questionOrder[3].length
];
const startingQuestionByGroup = [
	questionOrder[0][0],
	questionOrder[1][0],
	questionOrder[2][0],
	questionOrder[3][0]
];

const questions = [
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vad är ett annat ord för gredelin?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/lila/) != null;
		}
	},
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Hur många trianglar?<br><img src='https://1.bp.blogspot.com/-5xv6Cg1yhFo/VNLXEhuYiXI/AAAAAAAAAXw/dNgNTrE4G5M/s1600/image002.gif' width='250'/>"
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/24/) != null;
		}
	},
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Ursäkta, va? \"Flytta tändstickor\". Whatever that means";
		},
		validateAnswer: function () {
			return true;
		}
	},
	{
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
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Identifiera följande löv<br/><img src=\"assets/blad/utmanare.png\" id=\"leaves\"/>";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const ans = [
				/äpp/,
				/biggarå/,
				/körsbär/,
				/päron/,
				/plommon/
			];
			const input = lowerCaseInput().split(" ");
			if (input.length != ans.length) {
				return false;
			}
			for (let i = 0; i < 5; i++) {
				if (input[i].match(ans[i]) === null) {
					console.log("failed at ", i);
					return false;
				}
			}
			return true;
		}
	},
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Hur mycket är dubbelt av hälften av tvåhundrafemtio?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "250" || input === "tvåhundrafemtio";
		}
	},
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vilket år kom scouting till Sverige?";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "1983" || input === "nittonåttiotre";
		}
	},
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Skriv en scoutlag";
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
	{
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
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "Vad är det för symbol på taket av byggnaden 59°21’12.4”N 18°24’22.6”E";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
				const input = lowerCaseInput();
				return input.match(/triangel/).length > 0;
		}
	},
	{
		generateText: function () {
        		document.getElementById("questionLabel").innerHTML = "Bättre lyss till den sträng som brast, än att aldrig ha spänt en ______";
        		document.getElementById("inputbox").setAttribute("type", "text");
        },
        validateAnswer: function () {
			const input = lowerCaseInput();
			return input.match(/båge/).length > 0;
        }
	},
	{
		generateText: function () {
            document.getElementById("questionLabel").innerHTML = "En man kom in på en restaurang och sa endast en bokstav. Vad beställde han?";
            document.getElementById("inputbox").setAttribute("type", "text");
        },
        validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "t";
        }
	},
    {
        generateText: function () {
			//MUSIKKORSORD?
            document.getElementById("questionLabel").innerHTML = "Just click next";
            document.getElementById("inputbox").setAttribute("type", "text");
        },
        validateAnswer: function () {
			const input = lowerCaseInput();
            return true;
        }
    },
    {
        generateText: function () {
            document.getElementById("questionLabel").innerHTML = "I vilket landskap ligger Kopparbo?";
            document.getElementById("inputbox").setAttribute("type", "text");
        },
        validateAnswer: function () {
			const input = lowerCaseInput();
            return input.match(/dalarna/).length > 0;
        }
    },
    {
        generateText: function () {
            document.getElementById("questionLabel").innerHTML = "Vilken är näst den vanligaste bokstaven i svenska språket?";
            document.getElementById("inputbox").setAttribute("type", "text");
        },
        validateAnswer: function () {
			const input = lowerCaseInput();
            return input === "a";
        }
    },
	{
		generateText: function () {
			document.getElementById("questionLabel").innerHTML = "<audio controls><source src='assets/morseUtmanare.wav' type='audio/wav'>Your browser does not support the audio element.<br>Does any modern browser not support audio? Kom igen, det är 2019!</audio>";
			document.getElementById("inputbox").setAttribute("type", "text");
		},
		validateAnswer: function () {
			const input = lowerCaseInput();
			return input === "var uppmärksam på vad som händer" || input === "var uppmarksam pa vad som hander";
		},
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
