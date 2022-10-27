import Constant from "../../Constant";
import ApiEnum from "../../enum/ApiEnum";
import { QuoteModel } from "../../models/QuoteModel";
import modelValidation from "../../service/validation/modelValidation";
import httpRequest, { HttpMethodEnum } from "../../service/http/httpRequest";
import requiredString from "../../service/validation/utils/requiredString";

// export default async function addQuote(quote: QuoteModel): Promise<QuoteModel> {
//   return httpRequest({
//     url: `${Constant.apiBase}/${ApiEnum.quotes}.xxxjson`,
//     method: HttpMethodEnum.post,
//     data: quote,
//   });
// }

const quoteModelValidation = {
  author: requiredString,
  text: requiredString,
};
type FunctionType = (quote: QuoteModel) => Promise<QuoteModel>;
const addQuote: FunctionType = (quote: QuoteModel) => {
  return httpRequest({
    url: `${Constant.apiBase}/${ApiEnum.quotes}.json`,
    method: HttpMethodEnum.post,
    data: quote,
  });
};
export default modelValidation<FunctionType>(addQuote, quoteModelValidation);
