const chat = [
    "[undefined] Are you there?", //
    "[undefined] Hellooooo?",
    "[undefined] I've found something important.",
    "[undefined] This changes EVERYTHING",
    "[me] what?",
    "[undefined] I found the body", //
    "[undefined] It was in",
    "[undefined] wait for it...",
    "null has joined the chat",
    "[null] Hi!",
    "[undefined] Never mind then...", //
    "undefined has left the chat",
    "[null] What was that about?",
    "connection to server lost, attempting again in 10s",
    "connection to server lost, attempting again in 9s",
    "connection to server lost, attempting again in 8s", //
    "connection to server lost, attempting again in 7s",
    "connection to server lost, attempting again in 6s",
    "connection to server lost, attempting again in 5s",
    "connection to server lost, attempting again in 4s",
    "connection to server lost, attempting again in 3s", //
    "connection to server lost, attempting again in 2s",
    "connection to server lost, attempting again in 1s",
    "attempting to reconnect...",
    "connection failed, please try again"
];
const delays = [
    0, 2, 5, 1, 10,
    2, 3, 4, 2, 2,
    2, 2, 2, 2, 1,
    1, 1, 1, 1, 1,
    1, 1, 1, 1, 5,
    1, 1, 1, 1, 1,
    1, 1, 1, 5
];

let index = 0;
let started = false;
let ended = false;

function printChat () {
    let d = new Date();
    document.getElementById("chatbox").innerHTML += (d.toLocaleTimeString() + " " + chat[index] + "<br>");
    index++;
}

function startChat() {
    if (started) {return;}
    started = true;
    //index = 0;
    let latestmessage = Date.now();
    setInterval(() => {
        if (Date.now() > latestmessage + (delays[index] + Math.random()) * 1000 && !ended) {
            printChat();
            latestmessage = Date.now();
        } else if (index >= chat.length) {
            ended = true;
            clearInterval();
        }
    }, 500);
}