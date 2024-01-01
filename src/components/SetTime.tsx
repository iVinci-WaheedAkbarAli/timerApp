import { Button } from "@chakra-ui/react";

type SetTimeProps = {
  minutes: number;
  seconds: number;
  timerSet: boolean;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setTimerSet: React.Dispatch<React.SetStateAction<boolean>>;
};

const SetTime: React.FC<SetTimeProps> = ({
  minutes,
  seconds,
  timerSet,
  setMinutes,
  setSeconds,
  setTime,
  setErrorMessage,
  setIsRunning,
  setTimerSet,
}) => {
  const minutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setMinutes(isNaN(value) ? 0 : value);
  };

  const secondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSeconds(isNaN(value) ? 0 : value);
  };

  const totalTime: number = minutes * 60 + seconds;
  const setTimer = (): void => {
    if (totalTime > 3600 || totalTime <= 0 || minutes > 60) {
      setErrorMessage("エラー: 0秒以上60分以内に設定してください");
    } else if (seconds >= 60) {
      setErrorMessage("エラー: 60秒以下の数字を入力してください");
    } else {
      setErrorMessage("");
      setTime(totalTime);
      setIsRunning(true);
      setTimerSet(true);
    }
  };
  return (
    <>
      <div>
        <input
          type="number"
          value={minutes.toString()}
          onChange={minutesChange}
          min="0"
          max="60"
        />
        分
        <input
          type="number"
          value={seconds.toString()}
          onChange={secondsChange}
          min="0"
          max="59"
        />
        秒
      </div>

      <Button
        colorScheme="blue"
        margin="10"
        onClick={setTimer}
        isDisabled={timerSet}
      >
        スタート
      </Button>
    </>
  );
};
export default SetTime;
