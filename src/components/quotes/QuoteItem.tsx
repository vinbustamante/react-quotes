import { Link } from "react-router-dom";
import styled from "styled-components";
import UrlPathEnum from "../../enum/UrlPathEnum";
import { QuoteModel } from "../../models/QuoteModel";

const LiStyled = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: #c2e7f0;

  &:last-of-type {
    border-bottom: none;
  }

  & figure {
    margin: 0;
    padding: 0;
    width: 70%;
  }

  & blockquote {
    margin: 0;
    text-align: left;
    font-size: 1.5rem;
    color: #212929;
  }

  & p {
    margin: 0;
    margin-bottom: 0.25rem;
  }

  & figcaption {
    font-style: italic;
    color: #566d6d;
  }
`;

type QuoteItemProps = {
  quote: QuoteModel;
};

export default function QuoteItem({ quote }: QuoteItemProps) {
  return (
    <LiStyled>
      <figure>
        <blockquote>
          <p>{quote.text}</p>
        </blockquote>
        <figcaption>{quote.author}</figcaption>
      </figure>
      <Link to={`${UrlPathEnum.quotes}/${quote.id}`} className="btn">
        View Fullscreen
      </Link>
    </LiStyled>
  );
}
