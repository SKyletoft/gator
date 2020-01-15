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
    0, 2, 5, 1, 10, 2, 3, 4
];

let index = 0;
let latestmessage;

function printChat () {
    let d = new Date();
    console.log(d.toLocaleTimeString() + " " + chat[index]);
    index++;
}

function startChat() {
    index = 0;
    latestmessage = Date.now();
    setInterval(() => {
        if (Date.now() > latestmessage + delays[index] * 1000) {
            printChat();
            latestmessage = Date.now();
        }
    }, 500);
}

console.log(new Date().toLocaleTimeString());

let x = [1,2,3,4,5];
console.log(x);
console.log(x[2]);
x[2] = 7;
console.log(x[2]);
console.log(x);