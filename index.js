const readline = require("readline");
const generator = require("./sentences.js");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

// Definitions
let sentence = generator.GenerateSentence("medium", false) // ~ you can modify it => difficulty: string, punctuation: boolean
let correctWords = 0
let wrongWords = 0
let mistakeIndex = new Array()

// Start the stopwatch
const startTime = Date.now();

rl.question(`Type the following text as fast as you can: \x1b[33m${sentence}\x1b[0m\n>`, (input) => {
    // Stop the stopwatch
    const endTime = Date.now();

    // Calculate the typing speed in words per minute and the mistakes
    const words = input.split(" ")
    const original_words = sentence.split(" ")
    for (let i = 0; i < original_words.length; i++) {
        if (words[i] === original_words[i]) correctWords++
        else {
            wrongWords++
            mistakeIndex.push(i);
        }
    }
    const wordsPerMinute = Math.round(words.length / ((endTime - startTime) / 1000 / 60))

    if (correctWords == 0) {
        console.log(`\x1b[31mTotal Correct Words   : ${correctWords}\x1b[0m\nBetter Luck Next time!`)
        rl.close()
        return;
    }

    console.log(`\x1b[32mYour typing speed is                      : ${wordsPerMinute} words per minute.\x1b[0m`)
    console.log(`\x1b[32mTotal Correct Words                       : ${correctWords}\x1b[0m`)
    console.log(`\x1b[31mTotal Incorrect Words                     : ${wrongWords}\x1b[0m`)
    if (mistakeIndex.length == 1) {
        console.log(`\x1b[31mMistake word(s)                           : ${words[mistakeIndex[0]]}\x1b[0m`)
    } else if (mistakeIndex.length == 0) {
        // Print Nothing
    } else {
        console.log(`\x1b[31mMistake word(s):`)
        for (let i = 0; i < mistakeIndex.length; i++) {
            console.log(`\t${words[mistakeIndex[i]]}`)
        }
    }
    console.log(`\x1b[33mTotal Length of the sentence (word count) : ${original_words.length}\x1b[0m`)
    rl.close()
});
