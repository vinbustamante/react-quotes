import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RouteParamsEnum from "../enum/RouteParamsEnum";
import SortEnum from "../enum/SortEnum";

const sortText: Record<string, string> = {
  [SortEnum.ascending]: "Sort Ascending",
  [SortEnum.descending]: "Sort Descending",
};

type ButtonSortingProps = {
  basePath: string;
  onSorting: (sortDirection: SortEnum) => void;
};

export default function ButtonSorting({
  basePath,
  onSorting,
}: ButtonSortingProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlSortDirection = queryParams.get(RouteParamsEnum.sort);
  const [sortDirection, setSortDirection] = useState<SortEnum>(
    (urlSortDirection as any) || SortEnum.ascending
  );

  // event handler
  function onSortClick() {
    let newSort = SortEnum.ascending;
    if (sortDirection === SortEnum.ascending) {
      newSort = SortEnum.descending;
    }
    setSortDirection(newSort);
    navigate(`${basePath}?${RouteParamsEnum.sort}=${newSort}`);
    onSorting(newSort);
  }

  return <button onClick={onSortClick}>{sortText[sortDirection]}</button>;
}
