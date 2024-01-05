import { Button } from "@chakra-ui/react";

// 関数をpropsとして渡すことでボタンの共通化を行う
type TimerButtonProps = {
  onClick: () => void;
  children: string;
  isDisabled?: boolean;
};
const TimerButton: React.FC<TimerButtonProps> = ({
  onClick,
  children,
  isDisabled,
}) => {
  return (
    <Button
      colorScheme="blue"
      w={40}
      margin="10"
      onClick={onClick}
      isDisabled={isDisabled}
    >
      {children}
    </Button>
  );
};

export default TimerButton;
