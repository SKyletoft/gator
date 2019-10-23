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

const utmanare = [
    {
        generateText: function () {
            document.getElementById("questionLabel").innerHTML = "Vad är ett annat ord för gredelin?";
            document.getElementById("inputbox").setAttribute("type", "text");
        },
        validateAnswer: function () {
            return (
                document.getElementById("inputbox")
                        .value
                        .toLowerCase()
                        .match(/lila/)
                        .length > 
                0
            );
        },
        nextQuestion: 1
    },
    {
        generateText: function () {
            document.getElementById("questionLabel").innerHTML = "Hur många trianglar? (24st)<br><img src='https://1.bp.blogspot.com/-5xv6Cg1yhFo/VNLXEhuYiXI/AAAAAAAAAXw/dNgNTrE4G5M/s1600/image002.gif' width='250'/>"
            document.getElementById("inputbox").setAttribute("type", "text");
        },
        validateAnswer: function () {
            return (
                document.getElementById("inputbox")
                        .value ===
                "24"
            );
        },
        nextQuestion: 2
    },
    {
        generateText: function () {
            document.getElementById("questionLabel").innerHTML = "Ursäkta, va? \"Flytta tändstickor\". Whatever that means";
        },
        validateAnswer: function () {
            return true;
        },
        nextQuestion: 3
    },
    {
        generateText: function () {
            document.getElementById("questionLabel").innerText = "Ladda upp en bild på er patrull där ni lagar tigerkaka till era ledare!<br><a href=\"https://www.ica.se/recept/tigerkaka-719813/\">[Exempelrecept]</a>";
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
        nextQuestion: 4
    },
    {
        generateText: function () {
            //Löv
        },
        validateAnswer: function () {
            return true;
        },
        nextQuestion: 5
    },
    {
        generateText: function () {
            document.getElementById("questionLabel").innerHTML = "Hur mycket är dubbelt av hälften av 250?";
            document.getElementById("inputbox").setAttribute("type", "text");
        },
        validateAnswer: function () {
            return (
                document.getElementById("inputbox")
                        .value ===
                "250" ||
                document.getElementById("inputbox")
                        .value ===
                "tvåhundrafemtio"
            );
        },
        nextQuestion: 6
    },
    {
        generateText: function () {
            document.getElementById("questionLabel").innerHTML = "Vilket år kom scouting till Sverige?";
            document.getElementById("inputbox").setAttribute("type", "text");
        },
        validateAnswer: function () {
            return (
                document.getElementById("inputbox")
                        .value ===
                "1983" ||
                document.getElementById("inputbox")
                        .value ===
                "nittonåttiotre"
            );
        },
        nextQuestion: 7
    },
];

const questions = [
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
