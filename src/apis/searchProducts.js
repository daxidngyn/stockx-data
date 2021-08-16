const algoliasearch = require("algoliasearch");

const stockxClient = algoliasearch(
  "XW7SBCT9V6",
  "6b5e76b49705eb9f51a06d3c82f7acee"
);
const stockxIndex = stockxClient.initIndex("products");
const requestOptions = {
  headers: { "X-Algolia-UserToken": "xw7sbct9v6" },
};

module.exports = async (query) => {
  const res = await stockxIndex.search(query, requestOptions);
  const productArray = res.hits.map((product) => {
    return {
      name: product.name,
      pid: product.style_id,
      image: product.media.imageUrl,
      uuid: product.id,
      details: {
        retail: product.price,
        releaseDate: product.release_date,
        colorway: product.colorway,
        brand: product.brand,
        type: product.make,
        gender: product.gender,
        description: product.description,
      },
    };
  });
  if (productArray.length == 0) throw new Error("No products found!");
  else return productArray;
};
