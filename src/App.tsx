import { Navigate, Route, Routes } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import RouteParamsEnum from "./enum/RouteParamsEnum";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/quotes" />} />
      <Route path="/quotes" element={<AllQuotes />} />
      <Route path={`/quotes/*`} element={<QuoteDetail />} />
      <Route path="/new-quote" element={<NewQuote />} />
    </Routes>
  );
}
