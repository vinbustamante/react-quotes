import { useState } from "react";
import { QuoteModel } from "../models/QuoteModel";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_LIST: QuoteModel[] = [
  {
    id: "q1",
    author: "marvin",
    text: "do it again",
  },
  {
    id: "q2",
    author: "marvin",
    text: "keep going",
  },
];

export default function AllQuotes() {
  const [quotes] = useState<QuoteModel[]>(DUMMY_LIST);
  return <QuoteList quotes={quotes} />;
}
