import styled from "styled-components";
import CommentItem from "./CommentItem";

const UlStyled = styled.ul`
  list-style: none;
  margin: 2.5rem 0;
  padding: 0;
`;

type CommentListProps = {
  comments: any[];
};

export default function CommentList(props: CommentListProps) {
  return (
    <UlStyled>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </UlStyled>
  );
}
