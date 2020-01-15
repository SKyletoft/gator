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
    "[undefined] Never mind then"
];
const delays = [
    0,
    2000,
    5000,
    1000,
    10000,
    2000,
    3000,
    4000
];

let index = 0;
let latestmessage;

function printChat () {
    let d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes() + " " + chat[index]);
    index++;
}

function startChat() {
    index = 0;
    latestmessage = Date.now();
    setInterval(() => {
        if (Date.now() > latestmessage + delays[index]) {
            printChat();
            latestmessage = Date.now();
        }
    }, 500);
}