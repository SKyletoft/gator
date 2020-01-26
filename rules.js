let riddleNumber = 0;
let group = 3; //0: spårare, 1: upptäckare, 2: äventyrare, 3: utmanare

const charFlashDiv = document.getElementById("charFlashDiv");
const centredbody = document.getElementById("centredbody");
const initialSetupDiv = document.getElementById("initialSetupDiv");
const inputbox = document.getElementById("inputbox");
const chatbox = document.getElementById("chatbox");


function init(input) {
	if (input !== undefined) {
		centredbody
			.style
			.display = "";
		initialSetupDiv
			.style
			.display = "None";
		console.log("Welcome back, I guess...");
	} else {
		centredbody
			.style
			.display = "None";
		initialSetupDiv
			.style
			.display = "";
	}
	chatbox
		.style
		.display = "None";
	console.log("But c'mon, google it instead of looking at the source code or console.\nDon't be boring!");
	charFlashDiv
		.style
		.display = "None";
	questions[questionOrder[group][riddleNumber]]
		.generateText();
}

function start(selection) {
	group = selection;
	riddleNumber = 0;
	//localStorage.riddleNumber = riddleNumber;
	//localStorage.group = group;
	init(0);
}

function flashCharacter(char, delay) {
	charFlashDiv.innerHTML = char;
	show();
	setTimeout(hide, delay);
}

function show() {
	charFlashDiv
		.style
		.display = "";
	centredbody
		.style
		.display = "None";
}

function hide() {
	charFlashDiv
		.style
		.display = "None";
	centredbody
		.style
		.display = "";
}

function lowerCaseInput() {
	return (
		inputbox
			.value
			.toString()
			.toLowerCase()
	);
}

function getSentenceSegment() {
	const start = Math.round(riddleNumber / questionOrder[group].length * hiddenSentence[group].length);
	const end = Math.round((riddleNumber + 1) / questionOrder[group].length * hiddenSentence[group].length);

	return hiddenSentence[group].substring(start, end);
}

function checkAnswer() {
	console.clear();
	if (questions[questionOrder[group][riddleNumber]].validateAnswer()) {
		console.log("CORRECT!");
		flashCharacter(getSentenceSegment(), 500);
		changeQuestion(1);
		inputbox.value = null;
	} else {
		console.log("FALSE");
		centredbody
			.style
			.animationName = "fail";
		centredbody
			.style
			.animationPlayState = "running";
		setTimeout(endAnimation, 500);
	}
}

function endAnimation() {
	centredbody
		.style
		.animationDelay = "0s";
	centredbody
		.style
		.animationPlayState = "paused";
	centredbody
		.style
		.marginLeft = "10%";
	centredbody
		.style
		.animationName = "success";
}

function changeQuestion(steps) {
	let newNumber = riddleNumber;
	newNumber += steps + questionOrder[group].length;
	newNumber %= questionOrder[group].length;
	console.log(riddleNumber + " => " + newNumber);
	riddleNumber = newNumber;
	updatePage();
}

function updatePage() {
	//localStorage.riddleNumber = riddleNumber;
	questions[questionOrder[group][riddleNumber]].generateText();
}

function reset () {
	//localStorage.clear();
	location.reload();
}

document.addEventListener("keydown", key => {
	switch (key.key) {
		case "Enter":
			checkAnswer();
			break;
		case "ArrowLeft":
			changeQuestion(-1);
			break;
		case "ArrowRight":
			changeQuestion(1);
			break;
		case "§":
		case "F12":
			chatbox
				.style
				.display = "";
			startChat();
			break;
	};
});