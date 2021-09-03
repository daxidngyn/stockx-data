const algoliasearch = require("algoliasearch");

const stockxClient = algoliasearch(
  "XW7SBCT9V6",
  "6b5e76b49705eb9f51a06d3c82f7acee"
);

const stockxIndex = stockxClient.initIndex("products");
const requestOptions = {
  headers: { "X-Algolia-UserToken": "xw7sbct9v6" },
};

export default async (query: string) => {
  const res = await stockxIndex.search(query, requestOptions);
  // TODO improve mapping
  const productArray = res.hits.map((product: any) => {
    return {
      name: product.name,
      pid: product.style_id,
      image: product.media.imageUrl,
      uuid: product.id,
      searchKey: product.short_description,
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
