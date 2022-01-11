const boughtStockPrice = document.querySelector("#stock-price");
const quantityBought = document.querySelector("#stocks-quantity");
const currentStockPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const displayResult = document.querySelector("#display-result");
const lossImage = document.querySelector("#image-loss");

const clickHandler = () => {
  let boughtPrice = Number(boughtStockPrice.value);
  let quantityStocks = Number(quantityBought.value);
  let currentPrice = Number(currentStockPrice.value);

  if (boughtPrice > 0 && quantityStocks > 0 && currentPrice > 0) {
    let boughtPriceTotalValue = boughtPrice * quantityStocks;
    let currentPriceTotalValue = currentPrice * quantityStocks;
    let margin = (
      ((currentPriceTotalValue - boughtPriceTotalValue) /
        boughtPriceTotalValue) *
      100
    ).toFixed(2);

    if (margin <= -50) {
      displayResult.style.display = "inline-block";
      displayResult.innerText = `Ohooo 😞 P/L 🔻${-margin}% You lost Rs.${-(
        currentPriceTotalValue - boughtPriceTotalValue
      )}`;
      lossImage.style.display = "block";
    } else if (boughtPriceTotalValue === currentPriceTotalValue) {
      displayResult.style.display = "inline-block";
      displayResult.innerText = "No gain no loss 😐 ";
      lossImage.style.display = "none";
    } else if (margin > 0) {
      document.body.style.backgroundImage = "url()";
      displayResult.style.display = "inline-block";
      displayResult.innerText = `🥳 Hurray.P/L 🔼${margin}%. You gained Rs.${
        currentPriceTotalValue - boughtPriceTotalValue
      }`;
      lossImage.style.display = "none";
    } else {
      document.body.style.backgroundImage = "url()";
      displayResult.style.display = "inline-block";
      displayResult.innerText = `Loss. P/L 🔻${-margin}% You lost Rs.${-(
        currentPriceTotalValue - boughtPriceTotalValue
      )}`;
      lossImage.style.display = "none";
    }
  } else {
    displayResult.style.display = "inline-block";
    displayResult.innerText = "Given data is invalid 🙃";
  }
};

checkBtn.addEventListener("click", clickHandler);
