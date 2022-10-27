import { useEffect, useState } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useAsync from "../hooks/useAsync";
import getAllQuotes from "../api/quote/getAllQuotes";

import AsyncResponse from "../components/AsyncResponse";

export default function AllQuotes() {
  const {
    sendRequest,
    state: { data, status },
  } = useAsync(getAllQuotes);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <AsyncResponse status={status}>
      <QuoteList quotes={data || []} />
    </AsyncResponse>
  );
}
