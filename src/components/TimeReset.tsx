type TimeResetProps = {
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setTimerSet: React.Dispatch<React.SetStateAction<boolean>>;
};
const TimeReset: React.FC<TimeResetProps> = ({
  setTime,
  setCurrentTime,
  setIsRunning,
  setTimerSet,
}) => {
  const reset = () => {
    setTime(0);
    setCurrentTime(0);
    setIsRunning(false);
    setTimerSet(false);
  };

  return <button onClick={reset}>リセット</button>;
};

export default TimeReset;
