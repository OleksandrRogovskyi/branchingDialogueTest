let pointerCurrent = 0;

function setup() {
    createCanvas(500, 500);
    reDraw(pointerCurrent);
}

const flow = [
    {
        question: "START?",
        answers: ["YES", "NO"],
        pointers: [1, 1]
    },
    {
        question: "Hi!",
        answers: ["Hello!", "Leave me alone"],
        pointers: [2, 3]
    },
    {
        question: "How are you doing?",
        answers: ["Fine, thanks", "The weather is awful"],
        pointers: [5, 3]
    },
    {
        question: "Is it so bad?",
        answers: ["Who are you to ask me?", "Go back"],
        pointers: [4, 1]
    },
    {
        question: "I am Oleksandr Rogovskyi.",
        answers: ["Omg", "Go back"],
        pointers: [1, 1]
    },
    {
        question: "Such a good day, isn't it?",
        answers: ["YES",  "NO"],
        pointers: [1, 1]
    }
];

function mousePressed() {
    if (mouseX > 100 && mouseX < 300 && mouseY > 320 && mouseY < 370) {
        reDraw(flow[pointerCurrent].pointers[0]);
    } else if (mouseX > 100 && mouseX < 300 && mouseY > 390 && mouseY < 440) {
        reDraw(flow[pointerCurrent].pointers[1]);
    }
}

function reDraw(pointer) {
    pointerCurrent = pointer;

    background(255, 255, 255);
    fill(0, 0, 0);
    rect(100, 200, 300, 100);
    rect(100, 320, 300, 50);
    rect(100, 390, 300, 50);
    fill(255, 255, 255);
    textSize(20);
    text(flow[pointerCurrent].question, 120, 260);
    textSize(10);
    text(flow[pointerCurrent].answers[0], 120, 350);
    text(flow[pointerCurrent].answers[1], 120, 420);
}
