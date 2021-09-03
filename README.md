# StockX-Data

Unofficial StockX API to obtain product data through requests/promises.
Supports TypeScript since version 1.0.5.

## Searching for products

The `searchProducts` method simulates StockX's own search feature. This method takes in one parameter, the query, and returns an array of up to 20 product objects.

```js
const StockXData = require("stockx-data");
const stockX = new StockXData();

stockX.searchProducts("Jordan 1 Clay Green").then((searchedProduct) => {
  console.log(searchedProduct);
});
```

## Fetching product details

The `fetchProductDetails` method takes in one parameter, which should be product's uuid/searchKey. Both the uuid and searchKey are included as part of a product's keys. This method returns additional data that is not provided when using the `searchProducts` method listed above, such as pricing data and a sizeMap, which maps sizes with their respective uuids (if the product is a parent). The returned sizeMap can then be utilized to obtain data about a specific product's specific size by calling this method again.

```js
const StockXData = require("stockx-data");
const stockX = new StockXData();

stockX.searchProducts("Jordan 1 Clay Green").then((searchedProduct) => {
  //searchKey as a parameter
  stockX
    .fetchProductDetails(searchedProduct[0].searchKey)
    .then((productDetails) => {
      console.log(productDetails);
    });

  //uuid as a parameter
  stockX.fetchProductDetails(searchedProduct[0].uuid).then((productDetails) => {
    console.log(productDetails);
  });

  //obtaining data specific to size 10s
  stockX.fetchProductDetails(searchedProduct[0]).then((productDetails) => {
    stockX
      .fetchProductDetails(productDetails.sizeMap["10"])
      .then((productDetails2) => {
        console.log(productDetails2);
      });
  });
});
```

## Fetching prices

Both `fetchAskPrices` and `fetchBidPrices` methods take in one parameter, which should be product's uuid/searchKey.
Method returns either ask or bid prices for that specific product / sku.

```js
const StockXData = require("stockx-data");
const stockX = new StockXData();

stockX.searchProducts("Jordan 1 Clay Green").then((searchedProduct) => {
  //searchKey as a parameter
  stockX.fetchAskPrices(searchedProduct[0].searchKey).then((askPrices) => {
    console.log(askPrices);
  });

  //uuid as a parameter
  stockX.fetchBidPrices(searchedProduct[0].uuid).then((bidPrices) => {
    console.log(bidPrices);
  });
});
```

## Fetching prices

The `fetchSales` method takes in one parameter which should be product's uuid/searchKey. Method returns past completed sales for that product / sku.

```js
const StockXData = require("stockx-data");
const stockX = new StockXData();

stockX.searchProducts("Jordan 1 Clay Green").then((searchedProduct) => {
  //searchKey as a parameter
  stockX.fetchSales(searchedProduct[0].searchKey).then((sales) => {
    console.log(sales);
  });

  //uuid as a parameter
  stockX.fetchSales(searchedProduct[0].uuid).then((sales) => {
    console.log(sales);
  });
});
```