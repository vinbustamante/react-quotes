import Constant from "../../Constant";
import ApiEnum from "../../enum/ApiEnum";
import { QuoteCommentModel } from "../../models/QuoteCommentModel";
import httpRequest, { HttpMethodEnum } from "../../service/http/httpRequest";

export default async function getAllComments(
  quoteId: string
): Promise<QuoteCommentModel[]> {
  const response = await httpRequest({
    url: `${Constant.apiBase}/${ApiEnum.comments}/${quoteId}.json`,
  });
  const records: QuoteCommentModel[] = [];
  for (const key in response) {
    const quoteObj = {
      id: key,
      ...response[key],
    };
    records.push(quoteObj);
  }
  return records;
}
