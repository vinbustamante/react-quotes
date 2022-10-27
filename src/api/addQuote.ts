import Constant from "../Constant";
import ApiEnum from "../enum/ApiEnum";
import { QuoteModel } from "../models/QuoteModel";
import httpRequest, { HttpMethodEnum } from "../utils/httpRequest";

export default async function addQuote(quote: QuoteModel) {
  return httpRequest({
    url: `${Constant.apiBase}/${ApiEnum.quotes}.json`,
    method: HttpMethodEnum.post,
    data: quote,
  });
}
