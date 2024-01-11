const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv =  document.getElementById("result");
const userResult = document.getElementById("user-result");


const isPalindrome = (str) => {
    console.log("line 9>> ",str)
    let result;

    if (str.length <1) {
        alert("Please input a value")
     
    } else {
        let alphaNumStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
        let reversed = alphaNumStr.split('').reverse().join('');
        if(reversed === alphaNumStr) {
            result = " is a palindrome"
        } else {
            result = " is not a palindrome"
        }
    }
    resultDiv.innerHTML = `<p><strong>${str}</strong> ${result}</p>`;
    resultDiv.classList.remove("hidden");
}

checkButton.addEventListener('click', ()=> {
    const userInput = input.value
    isPalindrome(userInput)
})
 