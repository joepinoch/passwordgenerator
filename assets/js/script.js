// Assignment code here
// Get references to the #generate element

var characterLength = 8;
var choices = [];

var specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "|",
  "~",
];
var lowCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = makePrompts();

  if (correctPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomValue = Math.floor(Math.random() * choices.length);
    password = password + choices[randomValue];
  }
  return password;
}

function makePrompts() {
  choices = [];

  characterLength = parseInt(
    prompt("How long do you want your password to be?")
  );

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("You didn't put a good number, try again!");
    return false;
  }

  if (confirm("How about lowercase letters?")) {
    choices = choices.concat(lowCase);
  }
  if (confirm("How about capital letters?")) {
    choices = choices.concat(upCase);
  }
  if (confirm("How about special characters?")) {
    choices = choices.concat(specialChar);
  }
  if (confirm("How about we throw some digits on there?")) {
    choices = choices.concat(number);
  }
  return true;
}
