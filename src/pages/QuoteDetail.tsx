import { useEffect, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
  useMatch,
} from "react-router-dom";
import Comments from "../components/Comments";
import RouteParamsEnum from "../enum/RouteParamsEnum";
import { QuoteModel } from "../models/QuoteModel";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import UrlPathEnum from "../enum/UrlPathEnum";

const DUMMY_LIST: QuoteModel[] = [
  {
    id: "q1",
    author: "marvin",
    text: "do it again",
  },
  {
    id: "q2",
    author: "marvin",
    text: "keep going",
  },
];

export default function QuoteDetail() {
  const [quote, setQuote] = useState<QuoteModel>();
  const params = useParams();
  const location = useLocation();

  const quoteId = params[RouteParamsEnum.splat]?.split("/")[0];

  useEffect(() => {
    const quote = DUMMY_LIST.find((item) => item.id == quoteId);
    if (quote) {
      setQuote(quote);
    }
  }, [quoteId]);

  function LoadComment() {
    return (
      <div className="centered">
        <Link to={`${location.pathname}/comments`} className="btn--flat">
          Load Comment
        </Link>
      </div>
    );
  }

  return (
    <>
      {quote && <HighlightedQuote quote={quote} />}
      <Routes>
        <Route
          path={`/:${RouteParamsEnum.quoteId}`}
          element={<LoadComment />}
        />
        <Route
          path={`/:${RouteParamsEnum.quoteId}/comments`}
          element={<Comments />}
        />
      </Routes>
    </>
  );
}
