import axios from "axios";
import { GetAskPriceResponse } from "../interfaces/Price";

// returns single sku ask prices
export default async (
  product: string,
  currency = "EUR",
  limit = 250,
  page = 1
): Promise<GetAskPriceResponse> => {
  const res = await axios.get(
    `https://stockx.com/api/rest/v2/products/${product}/activity?state=400&currency=${currency}&limit=${limit}&page=${page}&sort=createdAt&order=DESC`,
    {
      headers: {
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
    }
  );

  return res.data;
};
