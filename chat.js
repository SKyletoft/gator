const chat = [
    "[undefined] Are you there?",
    "[undefined] Hellooooo?",
    "[undefined] I've found something important.",
    "[undefined] This changes EVERYTHING",
    "[me] what?",
    "[undefined] I found the body",
    "[undefined] It was in",
    "null has joined the chat",
    "[null] Hi!",
    "[undefined] Never mind then...",
    "undefined has left the chat",
    "you have been disconnected"
];
const delays = [
    0, 2, 5, 1, 10, 2, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
];

let index = 0;

function printChat () {
    let d = new Date();
    document.getElementById("chatbox").innerHTML += (d.toLocaleTimeString() + " " + chat[index] + "<br>");
    index++;
}

function startChat() {
    index = 0;
    let latestmessage = Date.now();
    setInterval(() => {
        if (Date.now() > latestmessage + delays[index] * 1000) {
            printChat();
            latestmessage = Date.now();
        }
    }, 500);
}