import { Link, Route } from "react-router-dom";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AllQuotes, { getAllQuotesLoader } from "./pages/AllQuotes/AllQuotes";
import NewQuote, { newQuoteAction } from "./pages/NewQuote/NewQuote";
import QuoteDetail, {
  quoteDetailLoader,
} from "./pages/QuoteDetail/QuoteDetail";
import UrlPathEnum from "./enum/UrlPathEnum";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import Comments, {
  commentsLoader,
} from "./pages/QuoteDetail/components/Comments";
import RouteParamsEnum from "./enum/RouteParamsEnum";
import ErrorPage from "./pages/Error";

function LoadComment() {
  return (
    <div className="centered">
      <Link to="comments" className="btn--flat">
        Load Comment
      </Link>
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route
        index
        path={UrlPathEnum.quotes}
        element={<AllQuotes />}
        loader={getAllQuotesLoader}
      />
      <Route
        path={UrlPathEnum.quoteDetail}
        element={<QuoteDetail />}
        loader={quoteDetailLoader}
      >
        <Route path={`:${RouteParamsEnum.quoteId}`} element={<LoadComment />} />
        <Route
          path={`:${RouteParamsEnum.quoteId}/comments`}
          element={<Comments />}
          loader={commentsLoader}
        />
      </Route>
      <Route
        path={UrlPathEnum.newQuote}
        element={<NewQuote />}
        action={newQuoteAction}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
