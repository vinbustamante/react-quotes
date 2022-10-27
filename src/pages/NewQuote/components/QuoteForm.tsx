import { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { QuoteModel } from "../../../models/QuoteModel";
import Card from "../../../components/Card";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { Form, useNavigation } from "react-router-dom";
import UrlPathEnum from "../../../enum/UrlPathEnum";
import ObjectMap from "../../../type/ObjectMap";

const FormComponentStyle = styled(Form)`
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

  & .control input.error,
  & .control textarea.error {
    border: 1px solid red;
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

type QuoteFormProps = {
  // onAddQuote: (quote: QuoteModel) => void;
  isSubmitting: boolean;
  isLoading?: boolean;
  validationError?: ObjectMap;
};

export default function QuoteForm({
  isSubmitting,
  validationError = {},
}: QuoteFormProps) {
  const navigation = useNavigation();
  // const authorInputRef = useRef<any>();
  // const textInputRef = useRef<any>();
  const [isEntered, setEntered] = useState(false);

  // function submitFormHandler(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   // const enteredAuthor = authorInputRef.current.value;
  //   // const enteredText = textInputRef.current.value;

  //   // optional: Could validate here

  //   // props.onAddQuote({ author: enteredAuthor, text: enteredText });
  // }

  function onFormFocused() {
    setEntered(true);
  }

  console.log("validation error received: ", validationError["author"]);

  return (
    <Card>
      <FormComponentStyle
        onFocus={onFormFocused}
        method="post"
        action={UrlPathEnum.newQuote}
      >
        {isSubmitting && (
          <div className="loading">
            <LoadingSpinner />
          </div>
        )}

        <div className="control">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            className={classNames({
              error: validationError["author"] !== undefined,
            })}
          />
        </div>
        <div className="control">
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            name="text"
            rows={5}
            className={classNames({
              error: validationError["text"] !== undefined,
            })}
          ></textarea>
        </div>
        <div className="actions">
          <button className="btn" disabled={isSubmitting}>
            Add Quote
          </button>
        </div>
      </FormComponentStyle>
    </Card>
  );
}
