import React from "react";

type ToggleProps = {
  minutes: number;
  seconds: number;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
};

const Toggle: React.FC<ToggleProps> = ({
  minutes,
  seconds,
  setErrorMessage,
  isRunning,
  setIsRunning,
  setTime,
}) => {
  const totalTime: number = minutes * 60 + seconds;
  const toggle = () => {
    if (totalTime >= 3600) {
      setErrorMessage("エラー: 3600秒以上の値は許可されていません。");
    } else {
      setErrorMessage("");
      setIsRunning((prev) => !prev);
      setTime(totalTime);
    }
  };

  return (
    <>
      <button onClick={toggle}>{isRunning ? "ストップ" : "スタート"}</button>
    </>
  );
};
export default Toggle;
