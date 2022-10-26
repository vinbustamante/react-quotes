import { useNavigate } from "react-router-dom";
import { QuoteModel } from "../models/QuoteModel";
import QuoteForm from "../components/quotes/QuoteForm";
import UrlPathEnum from "../enum/UrlPathEnum";
import useAsync from "../hooks/useAsync";
import addQuote from "../api/addQuote";

export default function NewQuote() {
  const navigate = useNavigate();
  const { sendRequest, state } = useAsync(addQuote);

  // handler
  async function onAddQuote(quote: QuoteModel) {
    await sendRequest(quote);
    navigate(UrlPathEnum.quotes);
  }

  return <QuoteForm onAddQuote={onAddQuote} />;
}
