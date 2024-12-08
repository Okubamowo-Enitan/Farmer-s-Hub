import { getMarketPrices } from "./market.js";

// Select the container where prices will be displayed
const pricesContainer = document.getElementById("prices-container");

// Function to fetch and render market prices
async function displayMarketPrices() {
  try {
    // Fetch data from the mock API
    const prices = await getMarketPrices();

    // Loop through the data and create HTML elements for each product
    prices.forEach((item) => {
      const priceItem = document.createElement("div");
      priceItem.className = "price-item";

      priceItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
        <h4>${item.product}</h4>
        <p>Price: ${item.currency} ${item.price_per_kg} per ${item.unit}</p>
      `;

      pricesContainer.appendChild(priceItem);
    });
  } catch (error) {
    console.error("Error fetching market prices:", error);
  }
}

// Call the function to display prices
displayMarketPrices();
