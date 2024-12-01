import { useEffect } from "react";
import css from "./Feedback.module.css";

function Feedback({ feedback }) {
  const feedbackItems = Object.entries(feedback).map(([key, value]) => (
    <li key={key}>
      <span className={css.name}>{key}: </span>
      <span>{value}</span>
    </li>
  ));

  return (
    <>
      <ul className={css.feedbackList}>{feedbackItems}</ul>
    </>
  );
}

export default Feedback;
