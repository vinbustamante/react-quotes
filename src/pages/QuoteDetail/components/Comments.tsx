import { useEffect, useState } from "react";
import styled from "styled-components";
import getAllComments from "../../../api/quote/getAllComments";
import useAsync from "../../../hooks/useAsync";
import { QuoteModel } from "../../../models/QuoteModel";
import AsyncResponse from "../../../components/AsyncResponse";
import CommentList from "./CommentsList";

import NewCommentForm from "./NewCommentForm";
import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import RouteParamsEnum from "../../../enum/RouteParamsEnum";

const SectionStyled = styled.section`
  text-align: center;

  & > button {
    font-size: 1.25rem;
  }
`;

export default function Comments() {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const comments: any = useLoaderData();
  const params = useParams();
  const quoteId = params[RouteParamsEnum.quoteId];

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  // // event handler
  function onCommentAdded() {
    setIsAddingComment(false);
    // sendRequest(quote.id);
  }

  // // side effect

  return (
    <SectionStyled>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && quoteId && (
        <NewCommentForm quoteId={quoteId} onCommentAdded={onCommentAdded} />
      )}
      {comments && <CommentList comments={comments} />}
    </SectionStyled>
  );
}

export function commentsLoader({ params }: LoaderFunctionArgs) {
  const quoteId = params[RouteParamsEnum.quoteId];
  return getAllComments(quoteId!);
}
