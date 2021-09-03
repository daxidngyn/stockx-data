export interface Product {
  name: string;
  pid: string;
  image: string;
  uuid: string;
  searchKey: string;
  size: string;
  details: ProductDetails;
}

export interface ProductDetails {
  retail: number;
  releaseDate: string;
  colorway: string;
  brand: string;
  type: string;
  gender: string;
  description: string;
}

export interface ProductWithMarketAndSizeMap extends Product {
  market: Market;
  sizeMap: SizeMap;
}

export type SizeMap = Record<string, string>;

export interface Market {
  productId: number;
  skuUuid: string | null;
  productUuid: string;
  lowestAsk: number;
  lowestAskSize: number;
  parentLowestAsk: number;
  numberOfAsks: number;
  hasAsks: number;
  salesThisPeriod: number;
  salesLastPeriod: number;
  highestBid: number;
  highestBidSize: number | null;
  numberOfBids: number;
  hasBids: number;
  annualHigh: number;
  annualLow: number;
  deadstockRangeLow: number;
  deadstockRangeHigh: number;
  volatility: number;
  deadstockSold: number;
  pricePremium: number;
  averageDeadstockPrice: number;
  lastSale: number;
  lastSaleSize: string;
  salesLast72Hours: number;
  changeValue: number;
  changePercentage: number;
  absChangePercentage: number;
  totalDollars: number;
  updatedAt: number;
  lastLowestAskTime: number;
  lastHighestBidTime: number;
  lastSaleDate: string;
  createdAt: string;
  deadstockSoldRank: number;
  pricePremiumRank: number;
  averageDeadstockPriceRank: number;
  featured: number;
  lowestAskFloat: number;
  highestBidFloat: number;
}
