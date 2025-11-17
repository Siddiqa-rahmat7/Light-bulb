const bulbTop = document.querySelector("#bulb-top");
const btn = document.querySelector("#btn");

let isBtnOn = false;

btn.addEventListener("click", () => {
  if (isBtnOn) {
    isBtnOn = false;
    bulbTop.style.backgroundColor = "white";
    bulbTop.style.boxShadow = "none";
  } else {
    isBtnOn = true;
    bulbTop.style.backgroundColor = "yellow";
    bulbTop.style.boxShadow = "0 0 200px rgba(255,255,0,0.9)";
  }
});
