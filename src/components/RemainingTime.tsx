type RemainingTimeProps = { time: number };
const RemainingTime: React.FC<RemainingTimeProps> = ({ time }) => {
  const formatTime = (value: number): string =>
    value < 10 ? `0${value}` : `${value}`;

  const displayMinutes = formatTime(Math.floor(time / 60));
  const displaySeconds = formatTime(time % 60);

  return (
    <div>
      残り時間: {displayMinutes}:{displaySeconds}
    </div>
  );
};
export default RemainingTime;
