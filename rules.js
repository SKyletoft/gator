let riddleNumber = 0;
let group = 3; //0: spårare, 1: upptäckare, 2: äventyrare, 3: utmanare

function init () {
    if (localStorage.riddleNumber !== undefined) {
        riddleNumber = parseInt(localStorage.riddleNumber);
        document.getElementById("centredbody").style.display = "";
        document.getElementById("initialSetupDiv").style.display = "None";
    } else {
        document.getElementById("centredbody").style.display = "None";
        document.getElementById("initialSetupDiv").style.display = "";
    }
    document.getElementById("charFlashDiv").style.display = "None";
    questions[riddleNumber].generateText();
}

function start (selection) {
    group = selection;
    riddleNumber = startingQuestionByGroup[group];
    localStorage.riddleNumber = riddleNumber;
    localStorage.group = group;
    init();
}

function flashCharacter (char, delay) {
    document.getElementById("charFlashDiv").innerHTML = char;
    show();
    setTimeout(hide, delay);
}

function show () {
    document.getElementById("charFlashDiv").style.display = "";
    document.getElementById("centredbody").style.display = "None";
}

function hide () {
    document.getElementById("charFlashDiv").style.display = "None";
    document.getElementById("centredbody").style.display = "";
}

function lowerCaseInput () {
    return (
        document.getElementById("inputbox")
            .value
            .toString()
            .toLowerCase()
    );
}

function getSentenceSegment () {
	const start = Math.round(riddleNumber / questionOrder[group].length * hiddenSentence.length);
	const end   = Math.round((riddleNumber + 1) / questionOrder[group].length * hiddenSentence.length);
	
	return hiddenSentence.substring(start, end);
}

function checkAnswer () {
    console.clear();
    if (questions[riddleNumber].validateAnswer()) {
        console.log("CORRECT!");
		changeQuestion(1);
        flashCharacter(getSentenceSegment(), 500);
        document.getElementById("inputbox").value = null;
    } else {
        console.log("FALSE");
        document.getElementById("centredbody").style.animationName = "fail";
        document.getElementById("centredbody").style.animationPlayState = "running";
        setTimeout(endAnimation, 500);
    }
}

function endAnimation () {
    let element = document.getElementById("centredbody");
    element.style.animationDelay = "0s";
    element.style.animationPlayState = "paused";
    element.style.marginLeft = "10%";
    element.style.animationName = "success";
}

function changeQuestion (steps) {
	riddleNumber += steps + questionOrder[group].length;
	riddleNumber %= questionOrder[group].length;
    updatePage();
}

function updatePage () {
    localStorage.riddleNumber = riddleNumber;
    questions[questionOrderGroup[riddleNumber]].generateText();
}
