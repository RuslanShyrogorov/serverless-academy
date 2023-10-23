#! /usr/bin/env node

const readline = require("node:readline/promises");

const {
  alphabeticWords,
  ascNumbers,
  descNumbers,
  ascNumberOfLettersWords,
  uniqWords,
  uniqValues,
} = require("./utils/sort");

async function main() {
  const rl = readline.createInterface(process.stdin, process.stdout);

  const answer = await rl.question(
    "Hello! Enter 10 words or digits dividing them in space: "
  );

  const userAnswer = answer.split(" ");

  const typeSort = await rl.question(`
  1. Sort words alphabeticall
  2. Show numbers from lesser to greater
  3. Show numbers from bigger to smaller
  4. Display words in ascending order by number of letters in the word
  5. Show only unique words
  6. Display only unique values from the set of words and numbers entered by the user `);

  if (typeSort === "exit") {
    rl.close();
    return;
  }
  switch (typeSort) {
    case "1":
      alphabeticWords(userAnswer);
      break;
    case "2":
      ascNumbers(userAnswer);
      break;
    case "3":
      descNumbers(userAnswer);
      break;
    case "4":
      ascNumberOfLettersWords(userAnswer);
      break;
    case "5":
      uniqWords(userAnswer);
      break;
    case "6":
      uniqValues(userAnswer);
      break;

    default:
      console.log(`Unknown value -> "${typeSort}"`);
      break;
  }
  rl.close();
  main();
}

async function run() {
  try {
    await main();
  } catch (error) {
    console.log("failed", error);
  }
}

run();
