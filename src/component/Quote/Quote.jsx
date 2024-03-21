import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "./Quote.css"
import { quotes } from "../../dummy";
const QuoteSlide = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index + 1) % quotes.length);
  };

  const handlePrevious = () => {
    setIndex((index - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="quote">
      <div className="quote-heading">
        <h1>Our Students says</h1>
      </div>
      <div className="quote-container">
        <div className="quote-data">
          <img src={quotes[index].image} alt="" />
          <p> <span>“</span> {quotes[index].quote} <span>”</span> </p>
          <p>- {quotes[index].author}</p>
        </div>

        <div className="quote-btn">
          <button onClick={handlePrevious}>{"<"}</button>
          <button onClick={handleNext}>{">"}</button>
        </div>
      </div>
    </div>
    
  );
};

// ReactDOM.render(<QuoteSlide />, document.getElementById("root"));
export default QuoteSlide;