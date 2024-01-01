import { useEffect, useState } from "react";
// import useSound from "use-sound";
// import Sound from "";
import SetTime from "./components/SetTime";
import SetTimeReset from "./components/SetTimeReset";
import TimeReset from "./components/TimeReset";
import Toggle from "./components/Toggle";
import RemainingTime from "./components/RemainingTime";

const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [timerSet, setTimerSet] = useState<boolean>(false);
  // const [play] = useSound(Sound);

  useEffect(() => {
    let intervalId: any = null;
    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            // play();
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
      <SetTime
        minutes={minutes}
        seconds={seconds}
        timerSet={timerSet}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        setTime={setTime}
        setErrorMessage={setErrorMessage}
        setIsRunning={setIsRunning}
        setTimerSet={setTimerSet}
      />
      <SetTimeReset
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        setTime={setTime}
        setCurrentTime={setCurrentTime}
        setIsRunning={setIsRunning}
        setTimerSet={setTimerSet}
      />
      <div>
        <Toggle
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          time={time}
          setTime={setTime}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
        <TimeReset
          setTime={setTime}
          setCurrentTime={setCurrentTime}
          setIsRunning={setIsRunning}
          setTimerSet={setTimerSet}
        />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <RemainingTime time={time} />
    </>
  );
};

export default Timer;
