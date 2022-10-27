import { Navigate, Route, Routes } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes/AllQuotes";
import NewQuote from "./pages/NewQuote/NewQuote";
import QuoteDetail from "./pages/QuoteDetail/QuoteDetail";
import UrlPathEnum from "./enum/UrlPathEnum";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path={UrlPathEnum.root}
          element={<Navigate to={UrlPathEnum.quotes} />}
        />
        <Route path={UrlPathEnum.quotes} element={<AllQuotes />} />
        <Route path={UrlPathEnum.quoteDetail} element={<QuoteDetail />} />
        <Route path={UrlPathEnum.newQuote} element={<NewQuote />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
