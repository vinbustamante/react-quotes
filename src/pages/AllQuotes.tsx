import { useEffect, useState } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useAsync, { AsyncStatusEnum } from "../hooks/useAsync";
import getAllQuotes from "../api/getAllQuotes";
import LoadingSpinner from "../components/UI/LoadingSpinner";

export default function AllQuotes() {
  const {
    sendRequest,
    state: { data, status },
  } = useAsync(getAllQuotes);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <>
      {status === AsyncStatusEnum.pending && (
        <div className="centered">
          <LoadingSpinner />{" "}
        </div>
      )}
      {status === AsyncStatusEnum.error && (
        <p className="centered focus">There was an error</p>
      )}
      {status === AsyncStatusEnum.completed && (
        <QuoteList quotes={data || []} />
      )}
      ;
    </>
  );
}
