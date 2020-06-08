// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capitalAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","|",";",":","'",",","<",".",">","/","?"];
var characterArray = [];
var numberOfCharacters;
var emptyPasswordArray = [];

// Write password to the #password input
function writePassword() 
{
  /*
  var passwordText = document.querySelector("#password");
  passwordText.setAttribute('data-content',"Test");
  */
  var alphabetConfirm = confirm("Include lower case letters?");
  var capitalAlphabetConfirm = confirm("Include upper case letters?");
  var numbersConfirm = confirm("Include numbers?");
  var specialCharactersConfirm = confirm("Include special characters?");
  var numberOfCharactersConfirm = prompt("How many characters should the password be?");
  if(alphabetConfirm)
  {
    characterArray.push(alphabet);
  }

  if(capitalAlphabetConfirm)
  {
    characterArray.push(capitalAlphabet);
  }

  if(numbersConfirm)
  {
    characterArray.push(numbers);
  }

  if(specialCharactersConfirm)
  {
    characterArray.push(specialCharacters);
  }

  for(i = 0; i < numberOfCharactersConfirm; i++)
  {
      var characterSelection = Math.floor(Math.random() * characterArray.length);
      var characterSelection2 =  Math.floor(Math.random() * characterArray[characterSelection].length);
      emptyPasswordArray.push(characterArray[characterSelection[characterSelection2]]);
  }

  var newPassword = emptyPasswordArray.join();

  console.log(characterArray);

}

//Generate password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
