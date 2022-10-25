import { useState } from "react";
import styled from "styled-components";

import NewCommentForm from "./NewCommentForm";

const SectionStyled = styled.section`
  text-align: center;

  & > button {
    font-size: 1.25rem;
  }
`;

export default function Comments() {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <SectionStyled>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </SectionStyled>
  );
}
