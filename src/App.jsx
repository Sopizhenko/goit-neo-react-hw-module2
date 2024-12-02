import { useState, useEffect } from "react";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Notification from "./components/notification/Notification";
import Feedback from "./components/feedback/Feedback";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");

    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  } , [feedback]);

  const updateFeedbacks = (feedbackType) => {
    setFeedback((feedback) => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };

  const resetFeedbacks = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = Object.values(feedback).reduce(
    (acc, value) => acc + value,
    0
  );

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        onClick={updateFeedbacks}
        reset={resetFeedbacks}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 && <Notification message="No feedback yet" />}
      {totalFeedback > 0 && <Feedback feedback={feedback} positivePercentage={positiveFeedback} />}
    </>
  );
}

export default App;
