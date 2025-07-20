const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(text) {
  const cleanText = text.replace(/[\W_]+/g, "").toLowerCase();
  const length = cleanText.length
  for (let i = 0; i < length/2; i++) {
    if (cleanText[i] !== cleanText[length-1-i]) {
      return false;
    }
  }
  
  return true;
}


checkBtn.addEventListener("click", () => {
    
  if (textInput.value.length === 0) {
    alert("Please input a value");
  } else {
    const answer = isPalindrome(textInput.value);
    if (answer) {
      const resultText = textInput.value + " is a palindrome"
      result.innerText = resultText
    } else {
      const resultText = textInput.value + " is not a palindrome"
      result.innerText = resultText
    }
    
  }
});
