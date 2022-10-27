import styled from "styled-components";
import { QuoteCommentModel } from "../../../models/QuoteCommentModel";
import CommentItem from "./CommentItem";

const UlStyled = styled.ul`
  list-style: none;
  margin: 2.5rem 0;
  padding: 0;
`;

type CommentListProps = {
  comments: QuoteCommentModel[];
};

export default function CommentList({ comments }: CommentListProps) {
  return (
    <UlStyled>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </UlStyled>
  );
}
