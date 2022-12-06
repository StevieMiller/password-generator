// Assignment Code

// character variables
var generateBtn = document.querySelector("#generate");
var upperCase = [
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
var lowerCase = [
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
var symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "=",
  "<",
  ">",
  "/",
  "?",
  ":",
  ";",
  "~",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var pwLength = "";
var generatedPassword = "";
var selectedCharacters = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  console.log("Your Button Works!");

  // Prompt: Password length
  var pwLength = prompt(
    "Choose a length for your password. It must be between 8 and 128."
  );
  // If password length does not meet criteria, function ends
  if (!pwLength || pwLength < 8 || pwLength > 128) {
    window.alert("You must choose a number between 8 and 128. Try again.");
    return;
  }
  alert("Great! Let's add some uppercase letters.");
  // If password length meets criteria, move on to adding uppercase letters
  var okUpperCase = window.confirm("Click OK to add uppercase letters.");
  if (okUpperCase) {
    okUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
    selectedCharacters.push(okUpperCase);
    console.log(selectedCharacters);
    alert("Awesome! Let's add some lowercase letters.");
  }
  // Add lowercase letters
  var okLowerCase = window.confirm("Click OK to add lowercase letters.");
  if (okLowerCase) {
    okLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    selectedCharacters.push(okLowerCase);
    console.log(selectedCharacters);
    alert("Rad! Let's add some numbers.");
  }
  // Add numbers
  var okNumbers = window.confirm("Click OK to add numbers.");
  if (okNumbers) {
    okNumbers = numbers[Math.floor(Math.random() * numbers.length)];
    selectedCharacters.push(okNumbers);
    console.log(selectedCharacters);
    alert("Fantastic! Let's add some symbols.");
  }
  // Add symbols
  var okSymbols = window.confirm("Click OK to add symbols.");
  if (okSymbols) {
    okSymbols = symbols[Math.floor(Math.random() * symbols.length)];
    selectedCharacters.push(okSymbols);
    console.log(selectedCharacters);
    alert("Almost done! Click OK!");
  }
}

// Compile selected characters into password

// Write password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
