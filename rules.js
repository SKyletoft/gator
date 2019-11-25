let riddleNumber = 0;
let group = 3; //0: spårare, 1: upptäckare, 2: äventyrare, 3: utmanare

function init () {
    if (localStorage.riddleNumber !== undefined) {
        riddleNumber = parseInt(localStorage.riddleNumber);
    }
    document.getElementById("charFlashDiv").style.display = "None";
    questions[riddleNumber].generateText();
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
    const lettersPerSegment = Math.ceil(hiddenSentence.length / questionsByGroup[group]);
    const segment = riddleNumber - startingQuestionByGroup[group];
    return hiddenSentence.substr(segment * lettersPerSegment, lettersPerSegment);
}

function checkAnswer () {
    if (questions[riddleNumber].validateAnswer()) {
        console.log("CORRECT!");
        riddleNumber = questions[riddleNumber].nextQuestion;
        updatePage();
        flashCharacter(getSentenceSegment(), 500);
        document.getElementById("inputbox").value = null;
    } else {
        console.log("FALSE");
    }
}

function goBack () {
    riddleNumber = Math.max(0, riddleNumber - 1); //MAKE SURE THIS LOGIC STILL APPLIES WHEN ALL QUESTIONS ARE ADDED!
    updatePage();
}

function updatePage () {
    localStorage.riddleNumber = riddleNumber;
    questions[riddleNumber].generateText();
}
