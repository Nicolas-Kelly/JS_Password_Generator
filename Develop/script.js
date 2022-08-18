// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"// all lowercase characters
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"// all uppercase characters
const specialCharacters = "!@#$%^&*()_+<>:'[]{}"// all special characters
const numbers = "0123456789"// all numbers
var possibleCharacters = "";

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
  var lowerCaseConfirm = window.confirm("Include lowercase letters in generated password?")
  var lowerCase = ("a b c d e f g h i j k l m n o p q r s t u v w x y z") // All lowercase characters

  var numberConfirm = window.confirm("Include numeric characters in generated password?");
  var numberCase = ("0 1 2 3 4 5 6 7 8 9"); // All numbers characters

  var symbolsConfirm = window.confirm("Include symbols in generated password?");
  var symbolsCase= ("! @ # $ % ^ & * ( ) _ +"); // All symbols characters

  var upperCaseConfirm = window.confirm("Include uppercase letters in generated password?");
  var upperCase = ("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"); // All uppercase characters

  var passwordOptions = [];
  if (lowerCaseConfirm === true) { // If lowerCaseConfirm is true, then add lowerCase var into passwordOptions var
    passwordOptions.push(lowerCase)
  }
  if (numberConfirm === true) { // If numberConfirm is true, then add numberCase var into passwordOptions var
    passwordOptions.push(numberCase)
  }
  if (symbolsConfirm === true) { // If symbolsConfirm is true, then add symbolsCase var into passwordOptions var
    passwordOptions.push(symbolsCase)
  }
  if (upperCaseConfirm === true) { // If upperCaseConfirm is true, then add upperCase var into passwordOptions var
    passwordOptions.push(upperCase)
  }

  

}

if (
  uppercaseCharacters === false && lowercaseCharacters === false && numbers === false && specialCharacters === false
) {
  alert("Your password must be one of these character types.")
  return null;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
