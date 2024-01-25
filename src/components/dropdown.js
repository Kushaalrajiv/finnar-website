import React, { useState } from "react";
import logo from "./images/plus.png"
import logo2 from "./images/minus.png"
export default function Dropdown(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="scroll">
      <div className="Faq" onClick={toggleAnswer}>
        <span className="question">
          <b>{props.item.question}</b>
          <img src={showAnswer ? logo2 : logo} alt="logo" className="plus_minus_img"></img>
        </span>
        {showAnswer && <p className="answer">{props.item.answer}</p>}
      </div>
    </div>
  );
}
