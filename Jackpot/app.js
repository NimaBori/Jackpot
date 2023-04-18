let currecny, totalAmount;
const endpoint =
  "http://feedsapi.safe-installation.com/api/GetJackpotTotalAmount?CurrencyCode=USD&currencySymbol=$&BrandID=0";
const jackpotAmount = document.querySelector(".amount");

window.onload = function () {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      currecny = data.entity.currencyCode;
      totalAmount = Number(data.entity.totalAmount);
      console.log(currecny, typeof totalAmount);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

function updateValue() {
  const currentValue = parseFloat(totalAmount);
  const randomValue = Math.random() * (0.1 - 0.01) + 0.01; // Generate random number between 0.01 and 0.10 or 1-10 Cent
  const newValue = (currentValue + randomValue).toFixed(2); // Add random value to current value and round to 2 decimal places
  jackpotAmount.textContent = `${currecny} ${newValue}`; // Update value in HTML
}

setInterval(updateValue, 3000); // Update value every 3 seconds
