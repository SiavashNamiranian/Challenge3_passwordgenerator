




function generatePassword() {

// Arrays of elements to be used for password generation
var spcialCh = ["~", "!", "@", "#","$", "%","^", "&", "*", "(", ")", "_", "-", "+", "=","/", "`","\\\\","{","}","[","]",";",":","'",".",",","?"]
var letter = ["q","W","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
var number = ["1","2","3","4","5","6","7","8","9","0"]
var ucLetter=[] // Upper case array

for (var i=0; i < letter.length; i++) { // upper case array loop of letter array
  ucLetter.push(letter[i].toUpperCase());
};

var final=""
var desirLength = Number(prompt(("Please specify desired password length, min=8 & max=128"))); // prompt for password length

  if (!desirLength){ // if no selection stops
    return;
  }
  
 // checking whether entry falls within specified length, and if not asking for re-entry 
 while (desirLength<8 || desirLength>128) { 
  alert("please enter a value between 8 and 128");
  desirLength = Number(prompt(("Please specify desired password length, min=8 & max=128")));
}

special = confirm ("Did you want special characters (i.e. &, @, etc.) in your password? ") // confirming which selections are desired
numbr = confirm ("Did you want numbers in your password?")
lett = confirm ("Did you want letters in your password?")
ulett = confirm ("Did you want upper case letters in your password?")  

if (special && numbr && lett && ulett) { // tailoring the summary array based on user selection 
  const poolone = spcialCh.concat(letter).concat(number).concat(ucLetter);
  
  console.log (poolone); 

    for (var a = 0; a < desirLength; a++) {
    var index = Math.floor(Math.random() * poolone.length);
    final += poolone[index];
  }
    
console.log (final);

} else if (!special && numbr && lett && ulett) {
  var pooltwo = letter.concat(number).concat(ucLetter);


  for (var a = 0; a < desirLength; a++) {
    var index = Math.floor(Math.random() * pooltwo.length);
    final += pooltwo[index];
  }

} else if (special && !numbr && lett && ulett) {

  var pool3 = spcialCh.concat(letter).concat(ucLetter);

  console.log(pool3);

  for (var a = 0; a < desirLength; a++) {
    var index = Math.floor(Math.random() * pool3.length);
    final += pool3[index];
  }



} else if (special && numbr && !lett && ulett) {

  var pool4 = spcialCh.concat(number).concat(ucLetter);

  for (var a = 0; a < desirLength; a++) {
    var index = Math.floor(Math.random() * pool4.length);
    final += pool4[index];
  }



  } else if (special && numbr && lett && !ulett) {

  var pool5 = spcialCh.concat(number).concat(letter);

  for (var a = 0; a < desirLength; a++) {
    var index = Math.floor(Math.random() * pool5.length);
    final += pool5[index];
  }
  
  }

return final;
}; 


var generateBtn = document.querySelector("#generate"); // var selecting the button on the screen 

// Add event listener to generate button

function writePassword(){
var password = generatePassword();
var passwordText = document.querySelector("#password"); // selecting html region where generated password to be displayed


passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword)










