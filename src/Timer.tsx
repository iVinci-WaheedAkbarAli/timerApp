import { useEffect, useState } from "react";
import "./App.css";
// import useSound from "use-sound";
// import Sound from "";
import SetTime from "./SetTime";
import TimeReset from "./TimeReset";
import Toggle from "./Toggle";
import RemainingTime from "./RemainingTime";

const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
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
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
      <div>
        <Toggle
          minutes={minutes}
          seconds={seconds}
          setErrorMessage={setErrorMessage}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          setTime={setTime}
        />
        <TimeReset setTime={setTime} setIsRunning={setIsRunning} />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <RemainingTime time={time} />
    </>
  );
};

export default Timer;
