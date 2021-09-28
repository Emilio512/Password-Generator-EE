// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = false
var lowerCase = false
var numbers = false
var length = document.getElementById("length")
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"]
var options = []


var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", assemblePassword);




function generatePassword() {
    var upperChoice = window.confirm("Do You Want Uppercase?");
    console.log(upperChoice)

    var lowerChoice = window.confirm("Do You Want Lowercase?");
    console.log(lowerChoice)
    var symbolChoice = window.confirm(" Do you want sumbols?");
    console.log(symbolChoice)
    var numberChoice = window.confirm(" Do you want numbers?")
    console.log(numberChoice)

    var passwordLength = window.prompt("Please enter a number between 8 and 128")
    console.log(passwordLength)
    if (passwordLength < 8 || passwordLength > 128 || passwordLength.isNaN) {
        alert("Need to pick a number between 8 and 128");
        return null;
    }
    var pass = []
    // console.log(upperChoice, lowerChoice, numberChoice, symbolChoice, +length.value)
    if (upperChoice === true && lowerChoice === true && numberChoice === true && symbolChoice === true) {
        options = options.concat(nums, lower, upper, symbols)

        for (let i = 0; i < parseInt(passwordLength); i++) {
            pass.push(options[Math.floor(Math.random() * options.length)])
        }
        return pass.join("")

    }
}






function assemblePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    console.log("password= ", password)
    passwordText.value = password;

}


// Add event listener to generate button
// generateBtn.addEventListener("click", assemblePassword);