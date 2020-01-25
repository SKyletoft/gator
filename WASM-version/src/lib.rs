use regex::Regex;
use wasm_bindgen::prelude::*;

const SCOUTLAGEN: [&str; 8] = [
	"söker sin tro och respekterar andras",
	"är ärlig och pålitlig",
	"är vänlig och hjälpsam",
	"visar hänsyn och är en god kamrat",
	"möter svårigheter med glatt humör",
	"möter svårigheter med gott humör",
	"lär känna och vårdar naturen",
	"känner ansvar för sig själv och andra",
];

const MALSPAR: [&str; 14] = [
	"ta hand om sin kropp",
	"fysiska utmaningar",
	"förståelse för omvärlden",
	"känsla för naturen",
	"aktiv i samhället",
	"relationer",
	"aktiv i gruppen",
	"ledarskap",
	"problemlösning",
	"fantasi och kreativt uttryck",
	"kritiskt tänkande",
	"egna värderingar",
	"existens",
	"självinsikt och självkänsla",
];

const LOV_1: [&str; 7] = ["ek", "ask", "lönn", "bok", "björk", "al", "rönn"];

const LOV_2: [&str; 9] = [
	"näckros",
	"linnea",
	"skogsstjärna",
	"liljekonvalj",
	"förgätmigej",
	"styvmorsviol",
	"gullviva",
	"blåklint",
	"blåklocka",
];

const LOV_3: [&str; 10] = [
	"maskros",
	"blåklocka",
	"prästkrage",
	"blåsippa",
	"smörblomma",
	"näckros",
	"skogsstjärna",
	"gullviva",
	"blåklint",
	"liljekonvalj",
];

const HIDDENSENTENCES: [&str; 4] = [
	"59°58'44.5\"N_15°26'35.2\"E",
	"59°58'27.3\"N_15°27'19.1\"E",
	"59°58'51.5\"N_15°27'7.1\"E",
	"59°58'57.8\"N_15°26'50.2\"E"
];
const QUESTIONORDER: [[usize; 16]; 4] = [
	[34, 30, 17, 35, 18, 40, 31, 6, 32, 8, 9, 10, 33, 12, 19, 26],
	[27, 28, 17, 36, 18, 39, 21, 6, 22, 8, 9, 10, 29, 12, 25, 26],
	[15, 16, 17, 37, 18, 38, 21, 6, 22, 8, 9, 10, 23, 12, 24, 14],
	[15, 0,  1,  2,  3,  4,  5,  6,  7, 8, 9, 10, 11, 12, 13, 14],
];

const QUESTIONS: [[&str; 2]; 40] = [
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
	["Vad är Dalarnas landskapblomma?", "text"],
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

#[wasm_bindgen]
pub fn correct_question(question: i32, input: &str) -> bool {
	println!("values in rust: {} {}", question, input);
	match question {
		0  => match_single_regex		(input, "lila"),
		1  => match_exact				(input, "24"),
		2  => match_exact				(input, "87"),
		3  => match_exact_from_list		(input, &[".png", ".jpg", "jpeg", ".gif", "tiff", ".bmp"]),
		4  => match_ordered_regex_list	(input, &["körsbär", "äpp", "päron"]),
		5  => match_exact				(input, "250") ||
				match_exact				(input, "tvåhundrafemtio"),
		6  => match_exact				(input, "1910") ||
				match_exact				(input, "nittontio"),
		7  => match_unordered_regex_list(input, &SCOUTLAGEN, SCOUTLAGEN.len() - 1),
		8  => match_exact_from_list		(input, &[".png", ".jpg", "jpeg", ".gif", "tiff", ".bmp"]),
		9  => match_single_regex		(input, "triang"),
		10 => match_single_regex		(input, "båge"),
		11 => match_exact				(input, "t"),
		12 => match_single_regex		(input, "kluringar"),
		13 => match_single_regex		(input, "dalarna"),
		14 => match_exact				(input, "a"),
		15 => match_exact				(input, "var uppmärksam på vad som händer") ||
				match_exact				(input, "var uppmarksam pa vad som hander"),
		16 => match_single_regex		(input, "orange") ||
				match_single_regex		(input, "brandgul"),
		17 => match_exact				(input, "8"),
		18 => match_exact_from_list		(input, &[".png", ".jpg", "jpeg", ".gif", "tiff", ".bmp"]),
		19 => match_exact_from_list		(input, &[".png", ".jpg", "jpeg", ".gif", "tiff", ".bmp"]),
		21 => match_exact				(input, &"3.141592653589793"[0..input.len()]),
		22 => match_unordered_regex_list(input, &MALSPAR, MALSPAR.len() - 1),
		23 => match_unordered_regex_list(input, &["frukt", "grönt", "grönsak", "78.3 kg"], 0),
		24 => match_single_regex		(input, "berguv"),
		25 => match_single_regex		(input, "blåklocka"),
		26 => match_exact				(input, "e"),
		27 => match_single_regex		(input, "var uppmärksam på allt"),
		28 => match_single_regex		(input, "grön"),
		29 => match_single_regex		(input, "nor") &&
				match_single_regex		(input, "polen"),
		30 => match_single_regex		(input, "rosa"),
		31 => match_exact				(input, "7"),
		32 => match_exact				(input, "14"),
		33 => match_single_regex		(input, "is"),
		34 => match_single_regex		(input, "var uppmärksam på allt"),
		35 => match_single_regex		(input, "svart"),
		36 => match_exact				(input, "10"),
		37 => match_unordered_regex_list(input, &["mistaget", "misstaget", " s", "\"s\""], 0),
		38 => match_ordered_regex_list	(input, &LOV_1),
		39 => match_ordered_regex_list	(input, &LOV_2),
		40 => match_ordered_regex_list	(input, &LOV_3),
		_ => false,
	}
}

fn match_single_regex(input: &str, answer: &str) -> bool {
	Regex::new(answer).unwrap().is_match(input)
}

fn match_exact(input: &str, answer: &str) -> bool {
	input == answer
}

fn match_exact_from_list(input: &str, answers: &[&str]) -> bool {
	let substring = &input[input.len() - 4..input.len()];
	for answer in answers.iter() {
		if substring == *answer {
			return true;
		}
	}
	false
}

fn match_unordered_regex_list(input: &str, answers: &[&str], minimum: usize) -> bool {
	let mut matches = 0;
	for answer in answers.iter() {
		if Regex::new(answer).unwrap().is_match(input) {
			matches += 1;
		}
	}
	matches > minimum
}

fn match_ordered_regex_list(input: &str, answers: &[&str]) -> bool {
	let mut answer_iter = answers.iter();
	let mut input_iter = input.split(" ");
	loop {
		let next_answer = answer_iter.next();
		let next_iter = input_iter.next();

		if let Some(test_case) = next_iter {
			if let Some(answer) = next_answer {
				if !Regex::new(answer).unwrap().is_match(test_case) {
					return false;
				}
				continue;
			} else {
				return false;
			}
		} else {
			if let None = next_answer {
				return true;
			} else {
				return false;
			}
		}
	}
}

#[wasm_bindgen]
pub fn confirm () -> i32 {
	42
}