const searchProducts = require("./apis/searchProducts");
const fetchProductDetails = require("./apis/fetchProductDetails");
const fetchApiKey = require("./apis/fetchApiKey");
const fetchAskPrices = require("./apis/fetchAskPrices");
const fetchBidPrices = require("./apis/fetchBidPrices");
const fetchSales = require("./apis/fetchSales");

module.exports = class StockXScraper {
    async searchProducts(query) {
        return searchProducts(query);
    }

    async fetchProductDetails(query) {
        return fetchProductDetails(query);
    }

    async fetchApiKey() {
        return fetchApiKey();
    }

    async fetchAskPrices(query) {
        return fetchAskPrices(query);
    }

    async fetchBidPrices(query) {
        return fetchBidPrices(query);
    }

    async fetchSales(query) {
        return fetchSales(query);
    }
};
