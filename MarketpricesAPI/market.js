// Mock API Data
const marketPrices = [
  { id: 1, product: "Maize", price_per_kg: 120, unit: "kg", currency: "NGN", image: "images/maize.jpg" },
  { id: 2, product: "Wheat", price_per_kg: 150, unit: "kg", currency: "NGN" },
  { id: 3, product: "Rice", price_per_kg: 200, unit: "kg", currency: "NGN" },
  { id: 4, product: "Soybeans", price_per_kg: 300, unit: "kg", currency: "NGN" },
  { id: 1, product: "Potatoe", price_per_kg: 120, unit: "kg", currency: "NGN" },
  { id: 2, product: "Yam", price_per_kg: 150, unit: "kg", currency: "NGN" },
  { id: 3, product: "Cassava", price_per_kg: 200, unit: "kg", currency: "NGN" },
  { id: 4, product: "Millet", price_per_kg: 300, unit: "kg", currency: "NGN" },
];

// Simulate fetching the data with a delay
export function getMarketPrices() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(marketPrices), 1000); // Simulates network delay
  });
}
