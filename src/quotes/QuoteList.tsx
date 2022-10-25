import { Fragment } from "react";
import styled from "styled-components";

import QuoteItem from "./QuoteItem";

const UlStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  .sorting {
    padding-bottom: 1rem;
    border-bottom: 3px solid #b2d4d4;
    margin-bottom: 2rem;
  }

  .sorting button {
    font: inherit;
    color: teal;
    border: 1px solid teal;
    background-color: transparent;
    border-radius: 4px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
  }

  .sorting button:hover {
    background-color: #c2fafa;
  }
`;

export default function QuoteList(props: any) {
  return (
    <Fragment>
      <UlStyled>
        {props.quotes.map((quote: any) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </UlStyled>
    </Fragment>
  );
}
