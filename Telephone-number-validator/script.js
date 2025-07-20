const form = document.querySelector('form');
const checkBtn = document.getElementById('check-btn');
const userInput = document.getElementById('user-input');
const clearBtn = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div')

const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

const createPara = (text) => {
    const p = document.createElement('p');
    if (regex.test(text)) {
        p.style.color = '#90ee90';
        p.innerHTML = `Valid US number: ${text}`;
        return p
    } else {
        p.style.color = '#ff7f7f';
        p.innerHTML = `Invalid US number: ${text}`;
        return p
   }
}

const addResult = (para) => {
    resultDiv.append(para);
}

form.addEventListener('submit', (e) => {
   e.preventDefault()
   if(!userInput.value) {
     alert("Please provide a phone number");
   } else {
      const para = createPara(userInput.value);
      addResult(para);
      userInput.value = "";
   }

})

clearBtn.addEventListener('click', () => {
    resultDiv.innerHTML = "";
})

