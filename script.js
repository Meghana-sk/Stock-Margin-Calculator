
const boughtStockPrice = document.querySelector("#stock-price");
const quantityBought = document.querySelector("#stocks-quantity");
const currentStockPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn")
const displayResult = document.querySelector("#display-result")
const lossImage = document.querySelector("#image-loss")


function clickHandler() {

  let boughtPrice = Number(boughtStockPrice.value)
  let quantityStocks = Number(quantityBought.value);
  let currentPrice = Number(currentStockPrice.value);

  let boughtPriceTotalValue = boughtPrice * quantityStocks;
  let currentPriceTotalValue = currentPrice * quantityStocks;
  console.log("//", boughtPriceTotalValue, currentPriceTotalValue)
  let margin = ((currentPriceTotalValue - boughtPriceTotalValue) / boughtPriceTotalValue) * 100;
  if (margin <= -50) {
    console.log("***", margin)
    displayResult.innerText = `Ohooo 😞 P/L${margin}%🔻`
    // document.body.style.backgroundImage = "url('sad.jpg')";
    // document.body.style.backgroundPosition = "right";
   
    //  document.body.style.backgroundSize = "300px 300px";
    // document.body.style.backgroundRepeat = "no-repeat";
    // lossImage.style.backgroundImage = "url('sad.jpg')"
    lossImage.style.display = "block";
  } else if (margin === 0) {
    console.log("*****", margin)
    // document.body.style.backgroundImage = "url()"
    displayResult.innerText = `😐 P/L ${margin}%`
    lossImage.style.display = "none";
  } else if (margin > 0) {
    console.log("*******", margin)
    document.body.style.backgroundImage = "url()"
    displayResult.innerText = `Hurray.   P/L ${margin}%🔼`
    lossImage.style.display = "none";
  }
}

checkBtn.addEventListener("click", clickHandler)



