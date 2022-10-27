import Constant from "../../Constant";
import ApiEnum from "../../enum/ApiEnum";
import { QuoteModel } from "../../models/QuoteModel";
import httpRequest, { HttpMethodEnum } from "../../service/http/httpRequest";

export default async function addQuote(quote: QuoteModel): Promise<QuoteModel> {
  return httpRequest({
    url: `${Constant.apiBase}/${ApiEnum.quotes}.json`,
    method: HttpMethodEnum.post,
    data: quote,
  });
}
