type SetTimeProps = {
  minutes: number;
  seconds: number;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
};
const SetTime: React.FC<SetTimeProps> = ({
  minutes,
  seconds,
  setMinutes,
  setSeconds,
}) => {
  const minutesChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMinutes(parseInt(e.target.value));
  const secondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeconds(parseInt(e.target.value));
  };
  return (
    <>
      <input
        type="number"
        value={minutes}
        onChange={minutesChange}
        min="0"
        max="60"
      />
      分
      <input
        type="number"
        value={seconds}
        onChange={secondsChange}
        min="0"
        max="59"
      />
      秒
    </>
  );
};
export default SetTime;
