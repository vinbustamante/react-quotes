import { useEffect, useState } from "react";
import styled from "styled-components";
import getAllComments from "../../../api/quote/getAllComments";
import useAsync from "../../../hooks/useAsync";
import { QuoteModel } from "../../../models/QuoteModel";
import AsyncResponse from "../../../components/AsyncResponse";
import CommentList from "./CommentsList";

import NewCommentForm from "./NewCommentForm";

const SectionStyled = styled.section`
  text-align: center;

  & > button {
    font-size: 1.25rem;
  }
`;

type CommentsProps = {
  quote: QuoteModel;
};

export default function Comments({ quote }: CommentsProps) {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {
    sendRequest,
    state: { data: quoteComments, status },
  } = useAsync(getAllComments);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  // event handler
  function onCommentAdded() {
    setIsAddingComment(false);
    sendRequest(quote.id);
  }

  // side effect
  useEffect(() => {
    sendRequest(quote.id);
  }, [sendRequest]);

  return (
    <AsyncResponse status={status}>
      <SectionStyled>
        <h2>User Comments</h2>
        {!isAddingComment && (
          <button className="btn" onClick={startAddCommentHandler}>
            Add a Comment
          </button>
        )}
        {isAddingComment && (
          <NewCommentForm quote={quote} onCommentAdded={onCommentAdded} />
        )}
        {<CommentList comments={quoteComments || []} />}
      </SectionStyled>
    </AsyncResponse>
  );
}
