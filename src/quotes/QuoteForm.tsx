import { FormEvent, useRef } from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const FormStyled = styled.form`
  position: relative;

  & .loading {
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

  & .control input,
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

  & .control input:focus,
  & .control textarea:focus {
    background-color: #cbf8f8;
    outline-color: teal;
  }

  & .actions {
    text-align: right;
  }

  & .actions button {
    font-size: 1.25rem;
  }
`;

export default function QuoteForm(props: any) {
  const authorInputRef = useRef<any>();
  const textInputRef = useRef<any>();

  function submitFormHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <Card>
      <FormStyled onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className="control">
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className="control">
          <label htmlFor="text">Text</label>
          <textarea id="text" rows={5} ref={textInputRef}></textarea>
        </div>
        <div className="actions">
          <button className="btn">Add Quote</button>
        </div>
      </FormStyled>
    </Card>
  );
}
