const alphabeticWords = (arr) => {
  const res = arr.map((element) => element.toLowerCase());
  console.log(res.sort());
};

const ascNumbers = (arr) => {
  const numbersArr = [];
  arr.map((item) => {
    if (!isNaN(item)) {
      numbersArr.push(item);
    }
  });

  if (numbersArr.length === 0) {
    console.log("You don't enter any numbers!");
  }
  const res = numbersArr.sort((a, b) => a - b);
  console.log(res);
};

const descNumbers = (arr) => {
  const numbersArr = [];
  arr.map((item) => {
    if (!isNaN(item)) {
      numbersArr.push(item);
    }
  });

  if (numbersArr.length === 0) {
    console.log("You don't enter any numbers!");
  }
  const res = numbersArr.sort((a, b) => b - a);
  console.log(res);
};

const ascNumberOfLettersWords = (arr) => {
  const res = arr.sort((a, b) => a.length - b.length);
  console.log(res);
};

const uniqWords = (arr) => {
  const wordsArr = [];
  arr.map((item) => {
    if (isNaN(item)) {
      wordsArr.push(item);
    }
  });

  if (wordsArr.length === 0) {
    console.log("You don't enter any words!");
  }

  console.log([...new Set(wordsArr)]);
};
const uniqValues = (arr) => {
  const res = new Set(arr);
  console.log([...res]);
};

module.exports = {
  alphabeticWords,
  ascNumbers,
  descNumbers,
  ascNumberOfLettersWords,
  uniqWords,
  uniqValues,
};
