import React from "react";
import s from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <div className={s.wrapper}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
