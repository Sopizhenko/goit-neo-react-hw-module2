import css from "./Feedback.module.css";
import Notification from "../notification/Notification";

function Feedback({ feedback, positivePercentage }) {
  const feedbackItems = Object.entries(feedback).map(([key, value]) => (
    <li key={key}>
      <span className={css.name}>{key}: </span>
      <span>{value}</span>
    </li>
  ));

  return (
    <>
      <ul className={css.feedbackList}>{feedbackItems}</ul>
      <Notification message={`Positive feedback: ${positivePercentage}%`} />
    </>
  );
}

export default Feedback;
