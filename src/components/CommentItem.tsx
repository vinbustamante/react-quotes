import styled from "styled-components";

const LiStyled = styled.li`
  margin: 1rem 0;
  color: #4a5555;
  font-size: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid teal;
`;

type CommentItemProps = {
  text: string;
};

export default function CommentItem({ text }: CommentItemProps) {
  return (
    <LiStyled>
      <p>{text}</p>
    </LiStyled>
  );
}
