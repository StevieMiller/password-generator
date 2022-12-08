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
var selectedCharacters = [];

function generatePassword() {
  console.log("Your Button Works!");

  // Prompt: Password length
  var pwLength = prompt(
    "Choose a length for your password. It must be between 8 and 128."
  );

  // If password length does not meet criteria, function ends
  if (!pwLength) {
    return;
  }
  if (pwLength < 8 || pwLength > 128) {
    prompt("You must choose a number between 8 and 128. Try again.");
  }
  alert("Great! Let's add some uppercase letters.");

  // If password length meets criteria, move on to adding uppercase letters
  // Adds or omits uppercase letters
  var okUpperCase = confirm(
    "Click OK to include uppercase letters. Click cancel to omit."
  );
  alert("Awesome! Let's add some lowercase letters.");

  // Adds or omits lowercase letters
  var okLowerCase = confirm(
    "Click OK to include lowercase letters. Click cancel to omit."
  );
  alert("Rad! Let's add some numbers. ");

  // Adds or omits numbers
  var okNumbers = confirm("Click OK to include numbers. Click cancel to omit.");
  alert("Fantastic! Let's add some special characters.");

  // Adds or omits special characters
  var okSymbols = confirm(
    "Click OK to include special characters. Click cancel to omit."
  );

  // Adds characters to a single array
  var selectedCharacters = [];
  if (okUpperCase) {
    selectedCharacters = selectedCharacters.concat(upperCase);
  }
  if (okLowerCase) {
    selectedCharacters = selectedCharacters.concat(lowerCase);
  }
  if (okNumbers) {
    selectedCharacters = selectedCharacters.concat(numbers);
  }
  if (okSymbols) {
    selectedCharacters = selectedCharacters.concat(symbols);
  }
  console.log(selectedCharacters);

  // Empty array for selected password length
  var generatedPassword = [];
  // Checks for user selected password length
  for (var i = 0; i < pwLength; i++) {
    // Chooses random characters from selectedCharacters variable
    var randomize =
      selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
    generatedPassword.push(randomize);
  }
  // Compiles randomly chosen characters into password
  var randomizedPassword = generatedPassword.join("");
  console.log(randomizedPassword);
  return randomizedPassword;
}
// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
