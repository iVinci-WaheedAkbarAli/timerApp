import { Button } from "@chakra-ui/react";

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

  return (
    <Button colorScheme="blue" w={40} onClick={reset}>
      リセット
    </Button>
  );
};

export default TimeReset;
