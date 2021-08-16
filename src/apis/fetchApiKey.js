const axios = require("axios");
module.exports = async () => {
  const res = await axios.get(`https://www.stockx.com/`, {
    headers: {
      Host: "stockx.com",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-US,en;q=0.9",
      "sec-ch-ua":
        '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
    },
  });

  let apiKey = "";
  try {
    var idx =
      res.data.search("SEARCH_ONLY_API_KEY") + "SEARCH_ONLY_API_KEY".length + 3;

    while (res.data[idx] != '"') {
      idx++;
      apiKey += res.data[idx];
    }
  } catch (err) {
    throw new Error("Failed to parse API key for search");
  }

  return apiKey;
};
