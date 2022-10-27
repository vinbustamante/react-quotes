import { LoaderFunctionArgs, Outlet, useLoaderData } from "react-router-dom";
import RouteParamsEnum from "../../enum/RouteParamsEnum";
import HighlightedQuote from "./components/HighlightedQuote";
import getQuote from "../../api/quote/getQuote";

export default function QuoteDetail() {
  const quote: any = useLoaderData();
  return (
    <>
      {quote && <HighlightedQuote quote={quote} />}
      <Outlet />
    </>
  );
}

export function quoteDetailLoader({ params }: LoaderFunctionArgs) {
  return getQuote(params[RouteParamsEnum.quoteId]!);
}
