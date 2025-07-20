const inputElem = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const resultDiv = document.getElementById("output");


function convertToRoman(val) {
      const romanNumeralsMap = {
            1000: "M",
            900: "CM",
            500: "D",
            400: "CD",
            100: "C",
            90: "XC",
            50: "L",
            40: "XL",
            10: "X",
            9: "IX",
            5: "V",
            4: "IV",
            1: "I"
      };

    const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let romanNumeral = "";

    while (val > 0) {
       for (let i = 0; i < romanValues.length; i++) {
           if ((val - romanValues[i]) >= 0) {
               romanNumeral += romanNumeralsMap[romanValues[i]];
               val -= romanValues[i];
               break;
            }
       }
    }

    return romanNumeral;

}

function showResult(val, romanVal){
   
    resultDiv.classList.remove("invalid", "valid")

    if (val.trim() === "") {
        resultDiv.classList.add("invalid")
        resultDiv.innerText = "Please enter a valid number"
    } else if (+val < 1) {
        resultDiv.classList.add("invalid")
        resultDiv.innerText = "Please enter a number greater than or equal to 1"
    } else if (+val > 3999) {
        resultDiv.classList.add("invalid")
        resultDiv.innerText = "Please enter a number less than or equal to 3999" 
    } else {
        resultDiv.classList.add("valid")
        resultDiv.innerText = romanVal(val);
    }
}

convertBtn.addEventListener("click", () => {
    showResult(inputElem.value, convertToRoman)
})