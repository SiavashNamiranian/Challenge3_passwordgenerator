// Assignment Code
var spcialCh = ["~", "!", "@", "#","$", "%","^", "&", "*", "(", ")", "_", "-", "+", "=","/", "`","\\\\","{","}","[","]",";",":","'",".",",","?"]
var letter = ["q","W","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
var number = ["1","2","3","4","5","6","7","8","9","0"]
var ucLetter=[]


for (var i=0; i < letter.length; i++) {
  ucLetter.push(letter[i].toUpperCase());
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", function(){

  var passwordLength = parseInt(prompt(("Please specify desired password length, min=8 & max=128")));

  if (!passwordLength){
    return;
  }
  
 while (!(passwordLength>=8) || !(passwordLength<=128)) {
  alert("please enter a value between 8 and 128");
  passwordLength = parseInt(prompt(("Please specify desired password length, min=8 & max=128")));
 }

special = confirm ("Did you want special characters (i.e. &, @, etc.) in your password? ")
numbr = confirm ("Did you want numbers in your password?")
lett = confirm ("Did you want letters in your password?")
ulett = confirm ("Did you want upper case letters in your password?")  

if (special && numbr && lett && ulett) {
  var pool = spcialCh.concat(letter).concat(number).concat(ucLetter); 
  console.log(pool);
}  
  
  


});
