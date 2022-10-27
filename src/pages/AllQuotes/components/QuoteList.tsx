import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { QuoteModel } from "../../../models/QuoteModel";

import QuoteItem from "./QuoteItem";
import UrlPathEnum from "../../../enum/UrlPathEnum";
import SortEnum from "../../../enum/SortEnum";
import ButtonSorting from "../../../components/ButtonSorting";

const UlStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SortingContainerStyled = styled.div`
  padding-bottom: 1rem;
  border-bottom: 3px solid #b2d4d4;
  margin-bottom: 2rem;

  & button {
    font: inherit;
    color: teal;
    border: 1px solid teal;
    background-color: transparent;
    border-radius: 4px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
  }

  & button:hover {
    background-color: #c2fafa;
  }
`;

const sortQuotes = (quotes: any, ascending: any) => {
  return quotes.sort((quoteA: any, quoteB: any) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

type QuoteListProps = {
  quotes: QuoteModel[];
};

export default function QuoteList({ quotes }: QuoteListProps) {
  const [quoteList, setQuoteList] = useState<QuoteModel[]>(quotes);

  function onSorting(sortDirection: SortEnum) {
    setQuoteList((quoteList) =>
      sortQuotes([...quoteList], sortDirection === SortEnum.ascending)
    );
  }

  // side effect
  useEffect(() => {
    setQuoteList(quotes);
  }, [quotes]);

  return (
    <Fragment>
      <SortingContainerStyled className="sorting">
        <ButtonSorting basePath={UrlPathEnum.quotes} onSorting={onSorting} />
      </SortingContainerStyled>
      <UlStyled>
        {quoteList.map((quote: any) => (
          <QuoteItem key={quote.id} quote={quote} />
        ))}
      </UlStyled>
    </Fragment>
  );
}
