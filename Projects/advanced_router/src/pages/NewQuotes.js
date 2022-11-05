import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {
  const history = useHistory();
  const addQuoteHandler = (data) => {
    console.log(data);
    history.push('/quotes')
  };

  return (
    <>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  );
};

export default NewQuotes;
