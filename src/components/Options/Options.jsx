import React from "react";
import s from "./Options.module.css";

const Options = ({ setFeedback, totalFeedback }) => {
  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={s.options}>
      <div className={s.wrapper}>
        <button
          className={s.optionButton}
          onClick={() => updateFeedback("good")}
        >
          Good
        </button>
        <button
          className={s.optionButton}
          onClick={() => updateFeedback("neutral")}
        >
          Neutral
        </button>
        <button
          className={s.optionButton}
          onClick={() => updateFeedback("bad")}
        >
          Bad
        </button>
        {totalFeedback > 0 && (
          <button className={s.optionButton} onClick={resetFeedback}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Options;
