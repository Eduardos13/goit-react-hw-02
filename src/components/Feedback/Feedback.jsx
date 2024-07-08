import React from "react";
import s from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <div className={s.wrapper}>
        <ul className={s.feedbackList}>
          <li className={s.feedbackItem}>Good : {feedback.good}</li>
          <li className={s.feedbackItem}>Neutral : {feedback.neutral}</li>
          <li className={s.feedbackItem}>Bad : {feedback.bad}</li>
          <li className={s.feedbackItem}>Tottal : {totalFeedback}</li>
          <li className={s.feedbackItem}>Positive : {positiveFeedback}%</li>
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
