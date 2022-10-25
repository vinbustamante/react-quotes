import { Route, Routes, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import RouteParamsEnum from "../enum/RouteParamsEnum";

export default function QuoteDetail() {
  const params = useParams();
  return (
    <>
      <h1>QuoteDetail</h1>
      <p>{params[RouteParamsEnum.splat]}</p>
      <Routes>
        <Route
          path={`:${RouteParamsEnum.quoteId}/comments`}
          element={<Comments />}
        />
      </Routes>
    </>
  );
}
