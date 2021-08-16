const searchProducts = require("./apis/searchProducts");
const fetchProductDetails = require("./apis/fetchProductDetails");
const fetchApiKey = require("./apis/fetchApiKey");

module.exports = class StockXScraper {
  async searchProducts(query) {
    const products = await searchProducts(query);
    return products;
  }

  async fetchProductDetails(query) {
    const productDetails = await fetchProductDetails(query);
    return productDetails;
  }

  async fetchApiKey() {
    const apiKey = await fetchApiKey();
    return apiKey;
  }
};
