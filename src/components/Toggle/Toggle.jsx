import styles from "./Toggle.module.css";

function Toggle({ isActive, onClick }) {
  return (
    <button
      type="button"
      aria-label={isActive ? "토글 켜짐" : "토글 꺼짐"}
      title={isActive ? "토글 켜짐" : "토글 꺼짐"}
      onClick={onClick}
    >
      <div
        className={`${styles.rectangle} ${
          isActive ? styles.rectangleActive : ""
        }`}
      >
        <div
          className={`${styles.circle} ${isActive ? styles.circleActive : ""}`}
        ></div>
      </div>
    </button>
  );
}

export default Toggle;
