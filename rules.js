var localStorage = unsafeWindow.localStorage;

let riddleNumber = 0;
let group = 3; //0: spårare, 1: upptäckare, 2: äventyrare, 3: utmanare

function init() {
    if (localStorage.riddleNumber !== undefined) {
        riddleNumber = parseInt(localStorage.riddleNumber);
        group = parseInt(localStorage.group);
        document.getElementById("centredbody").style.display = "";
        document.getElementById("initialSetupDiv").style.display = "None";
        console.log("Welcome back, I guess...");
    } else {
        document.getElementById("centredbody").style.display = "None";
        document.getElementById("initialSetupDiv").style.display = "";
    }
    document.getElementById("chatbox").style.display = "None";
    console.log("But c'mon, google it instead of looking at the source code or console.\nDon't be boring!");
    document.getElementById("charFlashDiv").style.display = "None";
    questions[questionOrder[group][riddleNumber]].generateText();
}

function start(selection) {
    group = selection;
    riddleNumber = 0;
    localStorage.riddleNumber = riddleNumber;
    localStorage.group = group;
    init();
}

function flashCharacter(char, delay) {
    document.getElementById("charFlashDiv").innerHTML = char;
    show();
    setTimeout(hide, delay);
}

function show() {
    document.getElementById("charFlashDiv").style.display = "";
    document.getElementById("centredbody").style.display = "None";
}

function hide() {
    document.getElementById("charFlashDiv").style.display = "None";
    document.getElementById("centredbody").style.display = "";
}

function lowerCaseInput() {
    return (
        document.getElementById("inputbox")
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
        document.getElementById("inputbox").value = null;
    } else {
        console.log("FALSE");
        document.getElementById("centredbody").style.animationName = "fail";
        document.getElementById("centredbody").style.animationPlayState = "running";
        setTimeout(endAnimation, 500);
    }
}

function endAnimation() {
    let element = document.getElementById("centredbody");
    element.style.animationDelay = "0s";
    element.style.animationPlayState = "paused";
    element.style.marginLeft = "10%";
    element.style.animationName = "success";
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
    localStorage.riddleNumber = riddleNumber;
    questions[questionOrder[group][riddleNumber]].generateText();
}

function reset () {
    localStorage.clear();
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
            document.getElementById("chatbox").style.display = "";
            startChat();
            break;
    };
});