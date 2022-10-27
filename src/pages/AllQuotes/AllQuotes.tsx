import { Await, defer, useLoaderData } from "react-router-dom";
import QuoteList from "./components/QuoteList";
import getAllQuotes from "../../api/quote/getAllQuotes";
import SuspenseLoader from "../../components/SuspenseLoader";

export default function AllQuotes() {
  const loaderData: any = useLoaderData();
  return (
    <SuspenseLoader>
      <Await
        resolve={loaderData.quotes}
        errorElement={<p>Error loading data</p>}
      >
        {(quotes) => <QuoteList quotes={quotes || []} />}
      </Await>
    </SuspenseLoader>
  );
}

export function getAllQuotesLoader() {
  return defer({
    quotes: getAllQuotes(),
  });
}
