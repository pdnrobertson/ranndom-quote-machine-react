import React, { useState, useEffect } from "react";

const QuoteBox = () => {
  const initialQuote = {
    text: "Do, or do not. There is no try.",
    author: "Yoda"
  };
  const [quote, setQuote] = useState(initialQuote);

  const fetchQuote = async () => {
    const fetching = await fetch("https://quotes.rest/qod");
    const response = await fetching.json();
    const newQuote = response.contents.quotes[0];
    console.log(newQuote);
    setQuote({
      text: newQuote.quote,
      author: newQuote.author
    });
  };

  return (
    <div>
      <div className="container">
        <div className="box">
          <div className="content">
            <p>"{quote.text}"</p>
            <p>- {quote.author}</p>
          </div>
          <button
            className="button is-primary is-outlined"
            onClick={fetchQuote}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
