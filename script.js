let riddleNumber = 0;

function init () {
    if (localStorage.riddleNumber !== undefined) {
        riddleNumber = parseInt(localStorage.riddleNumber);
    }
    questions[riddleNumber].generateText();
}

function checkAnswer () {
    if (questions[riddleNumber].validateAnswer()) {
        console.log("CORRECT!");
        riddleNumber = questions[riddleNumber].nextQuestion;
        localStorage.riddleNumber = riddleNumber;
        questions[riddleNumber].generateText();
    } else {
        console.log("FALSE");
    }
    document.getElementById("inputbox").value = "";
}


const questions = [
    {
        generateText: function () {
            document.getElementById("questionLabel").innerHTML = "Vad säger morsen? [LÄNK]";
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
            const text = document.getElementById("inputbox").value.toString().substr(text.length - 4);
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
            document.getElementById("questionLabel").innerHTML = "Hur många trianglar?<br><img src='https://1.bp.blogspot.com/-5xv6Cg1yhFo/VNLXEhuYiXI/AAAAAAAAAXw/dNgNTrE4G5M/s1600/image002.gif' width='250'/>"
            document.getElementById("inputbox").setAttribute("type", "text");
        },
        validateAnswer: function () {
            if (document.getElementById("inputbox").value === "27") {
                return true;
            }
            return false;
        },
        nextQuestion: 0
    }
];