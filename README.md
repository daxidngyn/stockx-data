# StockX-Data
 Unofficial StockX API to obtain product data through requests/promises.
 
 ## Searching for products
 The `searchProducts` method simulates StockX's own search feature. This method takes in one parameter, the query, and returns an array of up to 20 product objects.
 ```js
const StockXData = require("stockx-data");
const stockX = new StockXData();

 stockX.searchProducts("Jordan 1 Clay Green").then((searchedProduct) => {
   console.log(searchedProduct)
});
 ```
 ## Fetching product details
 The `fetchProductDetails` method takes in one parameter, which can be a searched product, or a product's uuid/searchKey. Both the uuid and searchKey are included as part of a product's keys. This method returns additional data that is not provided when using the `searchProducts` method listed above, such as pricing data and a sizeMap, which maps sizes with their respective uuids (if the product is a parent). The returned sizeMap can then be utilized to obtain data about a specific product's specific size by calling this method again.
 ```js
 const StockXData = require("stockx-data");
const stockX = new StockXData();
 
 stockX.searchProducts("Jordan 1 Clay Green").then((searchedProduct) => {
   //product as a parameter
   stockX.fetchProductDetails(searchedProduct[0]).then((productDetails) => {
     console.log(productDetails);
   });

   //uuid as a parameter
   stockX.fetchProductDetails(searchedProduct[0].uuid).then((productDetails) => {
     console.log(productDetails);
   });

   //seachKey as a parameter
   stockX.fetchProductDetails(searchedProduct[0].searchKey).then((productDetails) => {
     console.log(productDetails);
   });
   
   //obtaining data specific to size 10s
   stockX.fetchProductDetails(searchedProduct[0]).then((productDetails) => {
     stockX.fetchProductDetails(productDetails.sizeMap['10']).then((productDetails2) => {
       console.log(productDetails2);
     });
   });
});
 ```
 
