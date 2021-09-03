export interface GetAskPriceResponse {
  ProductActivity: Array<ProductActivity>;
  Pagination: Pagination;
}

export type GetBidPriceResponse = GetAskPriceResponse;

export type GetSalesResponse = GetAskPriceResponse;

export interface ProductActivity {
  chainId: string;
  amount: number;
  createdAt: string;
  shoeSize: string;
  productId: null;
  skuUuid: string;
  frequency: string;
  state: string;
  customerId: null | string;
  localAmount: number;
  localCurrency: string;
}

export interface Pagination {
  limit: number;
  page: number;
  total: number;
  sort: Array<string>;
  order: Array<string>;
  lastPage: string;
  currentPage: string;
  nextPage: null | string;
  prevPage: null | string;
}
