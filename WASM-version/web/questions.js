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
	[15, 0,  1,  2,  3,  4,  5,  6,  7, 8, 9, 10, 11, 12, 13, 14],
];

const questions: [[&str; 2]; 39] = [
	["Vad är ett annat ord för gredelin?", "text"],
	["Hur många trianglar?<br><img src='https://1.bp.blogspot.com/-5xv6Cg1yhFo/VNLXEhuYiXI/AAAAAAAAAXw/dNgNTrE4G5M/s1600/image002.gif' width='250'/>", "text"],
	["<img src=\"assets/car number.png\"/>", "text"],
	["Ladda upp en bild på er patrull där ni lagar tigerkaka till era ledare!<br><a href=\"https://www.ica.se/recept/tigerkaka-719813/\">[Exempelrecept]</a>", "file"],
	["Identifiera följande löv<br/><img src=\"assets/blad/utmanare.png\" id=\"leaves\"/>", "text"],
	["Hur mycket är dubbelt av hälften av tvåhundrafemtio?", "text"],
	["Vilket år kom scouting till Sverige?", "text"],
	["Skriv en scoutlag<br><i>Var noga med stavningen</i>", "text"],
	["Ta en \"Gäster med gester\"-bild i enighet med scoutlag #4", "file"],
	["Vad är det för symbol på taket av byggnaden 59°21’12.4”N 18°24’22.6”E?", "text"],
	["Bättre lyss till den sträng som brast, än att aldrig ha spänt en ____", "text"],
	["En man kom in på en restaurang och sa endast en bokstav. Vad beställde han?", "text"],
	["Bilda ett ord av de bokstäverna som hamnar i de blåa rutorna<br/><a href=\"assets/musikkorsord.xlsx\">Korsord [Excel-fil]</a>", "text"],
	["I vilket landskap ligger Kopparbo?", "text"],
	["Vilken är näst den vanligaste bokstaven i svenska språket?", "text"],
	["<audio controls><source src='assets/morseUtmanare.wav' type='audio/wav'>Your browser does not support the audio element.<br>Does any modern browser not support audio? Kom igen, det är 2019!</audio>", "text"],
	["Vilken färg får man av att blanda gult och rött?", "text"],
	["Hur många kvadrater?<br><img src='https://mattemarknaden.files.wordpress.com/2014/10/1016741_783962828327021_4784829287177453249_n.png' width='250'/>", "text"],
	["Baka en sockerkaka till era ledare och ladda upp ett foto", "file"],
	["Ta en bild på en tamoj!", "file"],
	["Vad är PIs första åtta decimaler?", "text"],
	["Vilka är de 14 målspåren?<br><i>Var noga med stavningen</i>", "text"],
	["En frukt- och grönsakshandlare är 54 år gammal, 175 cm lång och har 43 i skonummer? Vad väger han?", "text"],
	["Vad är Dalarnas landskapsdjur?", "text"],
	["Vad är Dalarnas landskapblomma?", "text"]
	["Vad är svenskans vanligaste bokstav?", "text"],
	["ydu xsspbunvdp sa doow (3)<br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Retrato_de_Julio_C%C3%A9sar_%2826724093101%29.jpg/800px-Retrato_de_Julio_C%C3%A9sar_%2826724093101%29.jpg', height=350 tooltip='3'/>", "text"],
	["Vad får du om du blandar gul och blå?", "text"],
	["Från vilken del av Polen kommer Jultomten?", "text"],
	["Vilken färg får du om du blandar vitt och rött", "text"],
	["Hur många scoutlagar finns det", "text"],
	["Hur många målspår finns det inom scouterna", "text"],
	["Hur skriver man vatten med två bokstäver?", "text"],
	["<img src='assets/bradgard.png' />", "text"],
	["Vilken färg har himlen när du står på månen?", "text"],
	["10 guldfiskar i en skål, två dör, tre simmar iväg, 4 drunknar. Hur många fiskar är det kvar i skålen?", "text"],
	["<img src='https://www.humorbibeln.se/wp-content/uploads/sites/4/2019/10/visning9mistag.jpg' width='80%'/>", "text"],
	["Identifiera följande löv<br><i>Var noga med stavningen</i><br><i>(Träd1, träd2, träd3...)</i><br/><img src=\"assets/blad/aventyrare.png\" id=\"leaves\"/>", "text"],
	["Namnge blommorna i följande ordning:<br><i>Var noga med stavningen</i><br><i>(Blomma1, blomma2, blomma3...)</i><br/><img src=\"assets/blad/upptackare.png\" id=\"leaves\"/>", "text"],
	["Identifiera följande blommor i rätt ordning<br><i>Var noga med stavningen</i><br><i>(Blomma1, blomma2, blomma3...)</i><br/><img src=\"assets/blad/sparare.png\" id=\"leaves\"/>", "text"]
];