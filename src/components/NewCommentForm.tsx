import { FormEvent, useRef } from "react";
import styled from "styled-components";

const FormStyled = styled.form`
  margin-top: 1rem;
  position: relative;
  text-align: center;

  .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .control {
    margin-bottom: 0.5rem;
  }

  & .control label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & .control textarea {
    font: inherit;
    padding: 0.35rem;
    border-radius: 4px;
    background-color: #f0f0f0;
    border: 1px solid #c1d1d1;
    display: block;
    width: 100%;
    font-size: 1.25rem;
  }

  & .control textarea:focus {
    background-color: #cbf8f8;
    outline-color: teal;
  }

  & .actions button {
    font-size: 1.25rem;
  }
`;

export default function NewCommentForm() {
  const commentTextRef = useRef<any>();

  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
  };

  return (
    <FormStyled onSubmit={submitFormHandler}>
      <div className="control">
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows={5} ref={commentTextRef}></textarea>
      </div>
      <div className="actions">
        <button className="btn">Add Comment</button>
      </div>
    </FormStyled>
  );
}
