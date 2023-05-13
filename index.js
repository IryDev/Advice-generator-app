const url = "https://api.adviceslip.com/advice";
const button = document.querySelector(".circle");

adviceId = document.getElementById("adviceID");
advice = document.getElementById("adviceText");


function getAdvice() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const slip = data.slip;
      adviceId.innerHTML = slip.id;
      advice.innerHTML = slip.advice;
    });
}

getAdvice();
button.addEventListener("click", getAdvice);
