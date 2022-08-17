// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var input = window.prompt("How many characters in generated password?");

  var passwordLength = parseInt(input); //parseInt takes input as a value
  if (isNaN(passwordLength)) {
    window.alert("Please enter a valid number between 8 and 128.")
    return
  } 

// ALERT FOR PROPER PASSWORD LENGTH
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a valid number between 8 and 128.")
    return
  }

// USE window.confirm TO CREATE A WINDOW THAT NEEDS A YES OR NO.
  var lowerCaseConfirm = window.confirm("Include lowercase letter in generated password?")

  var numberConfirm = window.confirm("Include numeric characters in generated password?");

  var symbolsConfirm = window.confirm("Include symbols in generated password?");

  var upperCaseConfirmed = window.confirm("Include uppercase letter in generated password?");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
