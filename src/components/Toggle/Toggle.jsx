import styles from "./Toggle.module.css";

function Toggle({ isActive, onClick }) {
  return (
    <button
      type="button"
      aria-label={isActive ? "토글 켜짐" : "토글 꺼짐"}
      title={isActive ? "토글 켜짐" : "토글 꺼짐"}
      onClick={onClick}
    >
      <span
        className={`${styles.rectangle} ${
          isActive ? styles.rectangleActive : ""
        }`}
      >
        <span
          className={`${styles.circle} ${isActive ? styles.circleActive : ""}`}
        ></span>
      </span>
    </button>
  );
}

export default Toggle;
