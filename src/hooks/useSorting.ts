import { useState } from "react";
import { useLocation } from "react-router-dom";
import RouteParamsEnum from "../enum/RouteParamsEnum";
import SortEnum from "../enum/SortEnum";

const sortText: Record<string, string> = {
  [SortEnum.ascending]: "Sort Ascending",
  [SortEnum.descending]: "Sort Descending",
};

export default function useSorting() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlSortDirection = queryParams.get(RouteParamsEnum.sort);
  const [sortDirection, setSortDirection] = useState<SortEnum>(
    (urlSortDirection as any) || SortEnum.ascending
  );

  // event handler
  function changeSort() {
    let newSort = SortEnum.ascending;
    if (sortDirection === SortEnum.ascending) {
      newSort = SortEnum.descending;
    }
    setSortDirection(newSort);
  }

  return {
    sortDirection,
    changeSort,
    sortText: sortText[sortDirection],
  };
}
