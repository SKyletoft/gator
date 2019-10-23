let riddleNumber = 0;

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

function checkAnswer () {
    if (questions[riddleNumber].validateAnswer()) {
        console.log("CORRECT!");
        riddleNumber = questions[riddleNumber].nextQuestion;
        updatePage();
        flashCharacter(hiddenSentence[riddleNumber], 500)
    } else {
        console.log("FALSE");
    }
    hide();
}

function goBack () {
    riddleNumber = Math.max(0, riddleNumber - 1); //MAKE SURE THIS LOGIC STILL APPLIES WHEN ALL QUESTIONS ARE ADDED!
    updatePage();
}

function updatePage () {
    localStorage.riddleNumber = riddleNumber;
    questions[riddleNumber].generateText();
}
