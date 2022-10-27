import Constant from "../../Constant";
import ApiEnum from "../../enum/ApiEnum";
import { QuoteCommentModel } from "../../models/QuoteCommentModel";
import delay from "../../service/date/delay";
import httpRequest, { HttpMethodEnum } from "../../service/http/httpRequest";

export default async function addComment(
  comment: QuoteCommentModel
): Promise<QuoteCommentModel> {
  const response = await httpRequest({
    url: `${Constant.apiBase}/${ApiEnum.comments}/${comment.quoteId}.json`,
    method: HttpMethodEnum.post,
    data: {
      comment: comment.comment,
    },
  });
  return response;
}
