import { Button } from "@chakra-ui/react";

type SetTimeResetProps = {
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setTimerSet: React.Dispatch<React.SetStateAction<boolean>>;
};
const SetTimeReset: React.FC<SetTimeResetProps> = ({
  setTime,
  setMinutes,
  setSeconds,
  setCurrentTime,
  setIsRunning,
  setTimerSet,
}) => {
  const handleReset = () => {
    setTime(0);
    setMinutes(0);
    setSeconds(0);
    setCurrentTime(0);
    setIsRunning(false);
    setTimerSet(false);
  };
  return (
    <Button colorScheme="blue" onClick={handleReset}>
      Allリセット
    </Button>
  );
};
export default SetTimeReset;
