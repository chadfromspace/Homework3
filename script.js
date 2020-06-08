//Create a variable to reference the generate button.
var generateBtn = document.querySelector("#generate");

//Create a variable to reference the copy to clipboard button.
var copyBtn = document.querySelector("#copyToClipboard");

//Define password element on document.
var passwordField = document.querySelector("#password");

//Arrays for lower case letters, upper case letters, numbers, and special characters.
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capitalAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","|",";",":","'",",","<",".",">","/","?"];

//Empty arrays to store confirmed criteria.
var characterArray = [];
var emptyPasswordArray = [];
var newPassword;

//Function to write the password over the placeholder text.
function writePassword(){

  //Call function to clear password values before writing a new password.
  resetPasswordBox();

  //Confirmation windows for password character criteria.
  var alphabetConfirm = confirm("Include lower case letters?");
  var capitalAlphabetConfirm = confirm("Include upper case letters?");
  var numbersConfirm = confirm("Include numbers?");
  var specialCharactersConfirm = confirm("Include special characters?");

  //If statements to push selected criteria to characterArray.
  if(alphabetConfirm){
    characterArray.push(alphabet);
  }
  if(capitalAlphabetConfirm){
    characterArray.push(capitalAlphabet);
  }
  if(numbersConfirm){
    characterArray.push(numbers);
  }
  if(specialCharactersConfirm){
    characterArray.push(specialCharacters);
  }

  //If statement to create an alert and reload the current page if no criteria is selected.
  if(characterArray.length === 0){
    alert("No character types selected. Make up your mind and try again.");
    location.reload();
  } else {

      //Prompt to confirm the number of characters included in the password.
      var numberOfCharactersConfirm = prompt("How many characters should the password be? (8-128 characters)");
    }

  //Loop to push the selected criteria to emptyPasswordArray if numberOfCharactersConfirm is great than 7, less than 129, and not a number is false.
  if(numberOfCharactersConfirm > 7 && numberOfCharactersConfirm < 129 && !isNaN(numberOfCharactersConfirm)){  
    for(i = 0; i < numberOfCharactersConfirm; i++){

      //Variable to select a random variable from characterArray.
      var characterSelection = characterArray[Math.floor(Math.random() * characterArray.length)]

      //Variable to select a variable from characterSelection.
      var characterSelection2 =  characterSelection[Math.floor(Math.random() * characterArray.length)]

      //Push the randomly selected variable to emptyPasswordArray.
      emptyPasswordArray.push(characterSelection2);
    }

    //Else statement to display an error and reload the current page if numberOfCharactersConfirm is less than 8, greater than 128, or not a number.
  } else{
      alert("Invalid entry. Please enter a number between 8 and 128.");
      location.reload();
    }

  //Join function to convert emptyPasswordArray to a string.
  newPassword = emptyPasswordArray.join("");

  //Set the value of password to update the placeholder text with the new password.
  passwordField.value = newPassword;
}

//Function to copy the password to the clipboard.
function copyPassword(){

  //If statement to verify that the value of passwordField is not equal to "Your Secure Password".
  if(passwordField.value!="Your Secure Password"){

    //Select to select the variable x.
    passwordField.select();
    document.execCommand('copy');
    alert("Password copied to clipboard.");
  } else{
          alert("No password to copy. Please generate a password before attempting to copy.");
    }
}

//Function to reset the values of the password variables.
function resetPasswordBox(){
  passwordField.value = "Your Secure Password";
  newPassword = "";
  emptyPasswordArray = [];
}

//Event listener to run the writePassword function when the generate button is clicked.
generateBtn.addEventListener("click", writePassword);

//Event listener to copy the password to the clipboard when the copy to clipboard button is clicked.
copyBtn.addEventListener("click", copyPassword);