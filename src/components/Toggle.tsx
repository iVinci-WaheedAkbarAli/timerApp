type ToggleProps = {
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  currentTime: number; // 追加: 現在の時間を保持するステート
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>; // 追加: 現在の時間を更新する関数
};

const Toggle: React.FC<ToggleProps> = ({
  isRunning,
  setIsRunning,
  setTime,
  currentTime,
  setCurrentTime,
  time,
}) => {
  const toggle = () => {
    if (isRunning) {
      setIsRunning(false);
      setCurrentTime(time); // タイマーを停止した時点の時間で固定する
    } else {
      setIsRunning(true);
      setTime(currentTime); // タイマーを再開する時は保持していた時間を使う
    }
  };

  return (
    <>
      <button onClick={toggle}>{isRunning ? "ストップ" : "再開"}</button>
    </>
  );
};

export default Toggle;
