const { greetUser } = require("../scr/cli.js")
const { playLCMGame } = require("../games/brain-scm.js")
const { playProgressionGame } = require("../games/brain-progression.js")
const prompt = require("prompt-sync")();

function main() {
    const userName = greetUser();
    while (true) {
        console.log("Select defence part:\n1. Find the smallest common multiple of given numbers.\n2. What number is missing in the progression?");
        const defence = prompt();
        
        if (defence === '1') {
            playLCMGame(userName);
        } else if (defence === '2') {
            playProgressionGame(userName);
        } else if (defence === 'exit') {
            console.log(`Goodbye, ${userName}!`);
            process.exit();
        } else {
            console.log("Invalid choice. Please select again.");
        }
    }
}

function checkAnswer(userAnswer, correctAnswer) {
    return userAnswer === correctAnswer;
}

main();
