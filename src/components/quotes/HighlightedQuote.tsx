import styled from "styled-components";
import { QuoteModel } from "../../models/QuoteModel";

const FigureStyled = styled.figure`
  background-color: #162b2b;
  color: white;
  border-radius: 6px;
  padding: 3rem;
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;

  & p {
    font-size: 2.5rem;
  }

  & figcaption {
    font-style: italic;
    font-size: 1.5rem;
    text-align: right;
    color: #a1e0e0;
  }
`;

type HighlightedQuoteProps = {
  quote: QuoteModel;
};

export default function HighlightedQuote({ quote }: HighlightedQuoteProps) {
  return (
    <FigureStyled>
      <p>{quote.text}</p>
      <figcaption>{quote.author}</figcaption>
    </FigureStyled>
  );
}
