import css from "./Options.module.css";

function Options({ onClick, reset, totalFeedback }) {
  return (
    <div className={css.buttonsGroup}>
      <button type="button" onClick={() => onClick("good")}>
        Good
      </button>
      <button type="button" onClick={() => onClick("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onClick("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="button" onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
