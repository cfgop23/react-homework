# React 1주차 과제

- [figma 링크](https://www.figma.com/file/HI2qHKkpElxkgQihdvzd0N/%EC%95%84%ED%86%A0%EB%AF%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?type=design&node-id=0%3A1&mode=design&t=lZYvPE5UX582cHvi-1)

![react-homework-toggle](https://github.com/cfgop23/react-homework/assets/103302206/7045beaf-2c17-4df3-a6ff-0bbbff5b7c21)

```jsx
const [isActive, setIsActive] = useState(false);

const handleToggle = () => {
  setIsActive(!isActive);
};
```

useState를 이용해서 토글 클릭시 boolean값이 바뀌도록 설정했습니다.

```jsx
<Toggle isActive={isActive} onClick={handleToggle} />
```

Toggle 컴포넌트를 만들고 isActive와 이벤트함수를 props로 넘기도록하였습니다.

```jsx
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
```

전달받은 isActive를 삼항연산자로 사용해서 라벨과 타이틀을 달리하고 active된 클래스를 넣고 빼면서 스타일 변화를 가능하게 했습니다.
