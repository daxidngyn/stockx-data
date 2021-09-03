import fetchApiKey from "./apis/fetchApiKey";
import fetchAskPrices from "./apis/fetchAskPrices";
import fetchBidPrices from "./apis/fetchBidPrices";
import fetchProductDetails from "./apis/fetchProductDetails";
import fetchSales from "./apis/fetchSales";
import searchProducts from "./apis/searchProducts";
import {Product, ProductWithMarketAndSizeMap} from "./interfaces";
import {GetAskPriceResponse, GetBidPriceResponse, GetSalesResponse} from "./interfaces/Price";

interface Scraper {
    searchProducts(query: string): Promise<Array<Product>>

    fetchProductDetails(query: string): Promise<ProductWithMarketAndSizeMap>

    fetchApiKey(query: string): Promise<string>

    fetchAskPrices(query: string): Promise<GetAskPriceResponse>

    fetchBidPrices(query: string): Promise<GetBidPriceResponse>

    fetchSales(query: string): Promise<GetSalesResponse>
}

export class StockXScraper implements Scraper {
    async searchProducts(query: string): Promise<Array<Product>> {
        return searchProducts(query);
    }

    async fetchProductDetails(query: string): Promise<ProductWithMarketAndSizeMap> {
        return fetchProductDetails(query);
    }

    async fetchApiKey(): Promise<string> {
        return fetchApiKey();
    }

    async fetchAskPrices(query: string): Promise<GetAskPriceResponse> {
        return fetchAskPrices(query);
    }

    async fetchBidPrices(query: string): Promise<GetBidPriceResponse> {
        return fetchBidPrices(query);
    }

    async fetchSales(query: string): Promise<GetBidPriceResponse> {
        return fetchSales(query);
    }
}
