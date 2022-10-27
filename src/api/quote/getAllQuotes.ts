import Constant from "../../Constant";
import ApiEnum from "../../enum/ApiEnum";
import { QuoteModel } from "../../models/QuoteModel";
import httpRequest, { HttpMethodEnum } from "../../utils/httpRequest";

export default async function getAllQuotes(): Promise<QuoteModel[]> {
  const response = await httpRequest({
    url: `${Constant.apiBase}/${ApiEnum.quotes}.json`,
    method: HttpMethodEnum.get,
  });

  const transformedQuotes: QuoteModel[] = [];
  for (const key in response) {
    const quoteObj = {
      id: key,
      ...response[key],
    };
    transformedQuotes.push(quoteObj);
  }
  return transformedQuotes;
}
