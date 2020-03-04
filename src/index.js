const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let finalResult = "";
  for (let letter of expr.match(/(.{10})/g)) {
    let result = "";
    if (letter == "**********") {
      finalResult += " ";
      continue;
    }
    for (let morse of letter.match(/(.{2})/g)) {
      if (morse == "10") result += ".";
      else if (morse == "11") result += "-";
    }
    finalResult += MORSE_TABLE[result];
  }
  return finalResult;
}

module.exports = {
  decode
};
