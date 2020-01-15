const chat = [
    "[undefined] Are you there?",
    "[undefined] Hellooooo?",
    "[undefined] I've found something important.",
    "[undefined] This changes EVERYTHING",
    "[me] what?",
];
const delays = [
    0,
    2000,
    5000,
    1000,
    10000,
    10000,
    1000,
    1000
];

let index = 0;
function printChat () {
    console.log(Date.now() + " " + chat[index]);
    index++;
}

function startChat() {
    index = 0;
    let latestmessage = Date.now();
    while (index < chat.length) {
        if (Date.now() > latestmessage + delays[index]) {
            printChat();
            latestmessage = Date.now();
        }
    }
}