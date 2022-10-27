import {
  ActionFunctionArgs,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { QuoteModel } from "../../models/QuoteModel";
import QuoteForm from "./components/QuoteForm";
import UrlPathEnum from "../../enum/UrlPathEnum";
import addQuote from "../../api/quote/addQuote";
import ValidationException from "../../exception/ValidationException";

export default function NewQuote() {
  const validation: any = useActionData();
  const navigation = useNavigation();
  return (
    <>
      {validation instanceof ValidationException && (
        <p>there was a validation error</p>
      )}
      <QuoteForm
        validationError={validation?.validationError}
        isSubmitting={navigation.state === "submitting"}
      />
    </>
  );
}

export async function newQuoteAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const newQuote: QuoteModel = {
    author: formData.get("author")!.toString(),
    text: formData.get("text")!.toString(),
  };
  try {
    await addQuote(newQuote);
  } catch (err: any) {
    if (err instanceof ValidationException) {
      return err;
    } else {
      throw err;
    }
  }
  return redirect(UrlPathEnum.quotes);
}
