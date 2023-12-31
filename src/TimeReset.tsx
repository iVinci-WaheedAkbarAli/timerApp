type TimeResetProps = {
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
};
const TimeReset: React.FC<TimeResetProps> = ({ setTime, setIsRunning }) => {
  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return <button onClick={reset}>リセット</button>;
};

export default TimeReset;
