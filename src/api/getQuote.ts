import Constant from "../Constant";
import ApiEnum from "../enum/ApiEnum";
import { QuoteModel } from "../models/QuoteModel";
import { Nullable } from "../type/Nullable";
import httpRequest from "../utils/httpRequest";

export default async function getQuote(
  quoteId: string
): Promise<Nullable<QuoteModel>> {
  let quote: Nullable<QuoteModel> = null;
  const data = await httpRequest({
    url: `${Constant.apiBase}/${ApiEnum.quotes}/${quoteId}.json`,
  });
  if (data) {
    quote = {
      ...data,
      id: quoteId,
    };
  }
  return quote;
}
