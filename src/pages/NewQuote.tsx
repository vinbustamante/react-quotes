import { useNavigate } from "react-router-dom";
import { QuoteModel } from "../models/QuoteModel";
import QuoteForm from "../components/quotes/QuoteForm";
import UrlPathEnum from "../enum/UrlPathEnum";
import useAsync, { AsyncStatusEnum } from "../hooks/useAsync";
import addQuote from "../api/addQuote";

export default function NewQuote() {
  const navigate = useNavigate();
  const {
    sendRequest,
    state: { status },
  } = useAsync(addQuote);

  // handler
  async function onAddQuote(quote: QuoteModel) {
    await sendRequest(quote);
    navigate(UrlPathEnum.quotes);
  }

  return (
    <QuoteForm
      isLoading={status === AsyncStatusEnum.pending}
      onAddQuote={onAddQuote}
    />
  );
}
