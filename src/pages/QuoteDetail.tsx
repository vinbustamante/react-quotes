import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import RouteParamsEnum from "../enum/RouteParamsEnum";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import UrlPathEnum from "../enum/UrlPathEnum";
import useAsync from "../hooks/useAsync";
import getQuote from "../api/getQuote";

export default function QuoteDetail() {
  const {
    sendRequest,
    state: { data: quote },
  } = useAsync(getQuote);
  const params = useParams();
  const location = useLocation();

  const quoteId = params[RouteParamsEnum.splat]?.split("/")[0];

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

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
      {quote && (
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
      )}
    </>
  );
}
