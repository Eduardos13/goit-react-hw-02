import React from "react";
import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
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
