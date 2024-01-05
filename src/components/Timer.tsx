import { useEffect, useState } from "react";
import useSound from "use-sound";
import Sound from "../assets/sound/alarm.mp3";
import TimerButton from "./TimerButton";
import { Box, Text } from "@chakra-ui/react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  const [timerSet, setTimerSet] = useState(false);
  const [play] = useSound(Sound);
  const formatTime = (value: number): string =>
    value < 10 ? `0${value}` : `${value}`;

  const displayMinutes = formatTime(Math.floor(time / 60));
  const displaySeconds = formatTime(time % 60);

  const handleRestartTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      setCurrentTime(time); // タイマーを停止した時点の時間で固定する
    } else {
      setIsRunning(true);
      setTime(currentTime); // タイマーを再開する時は保持していた時間を使う
    }
  };

  const reset = () => {
    setTime(0);
    setCurrentTime(0);
    setIsRunning(false);
  };
  const resetAll = () => {
    reset();
    setMinutes(0);
    setSeconds(0);
    setTimerSet(false);
  };

  const minutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setMinutes(isNaN(value) ? 0 : value);
  };
  const secondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSeconds(isNaN(value) ? 0 : value);
  };

  const totalTime: number = minutes * 60 + seconds;
  const checkValidation = (): void => {
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

  useEffect(() => {
    let intervalId: any = null;
    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            play();
            clearInterval(intervalId);
            setIsRunning(false);
            setTimerSet(false);
            return prev;
          }
        });
      }, 1000);
    }

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isRunning]);

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
      <TimerButton onClick={checkValidation} isDisabled={timerSet}>
        スタート
      </TimerButton>
      <TimerButton onClick={resetAll}>Allリセット</TimerButton>
      {errorMessage && (
        <Text color={"red"} fontSize={20}>
          {errorMessage}
        </Text>
      )}
      <Box>
        <Text fontSize={50}>
          残り時間: {displayMinutes}:{displaySeconds}
        </Text>
      </Box>
      <div>
        <TimerButton onClick={handleRestartTimer}>
          {isRunning ? "ストップ" : "再開"}
        </TimerButton>
        <TimerButton onClick={reset}>リセット</TimerButton>
      </div>
    </>
  );
};

export default Timer;
