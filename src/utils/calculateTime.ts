const calculateTime = (secs: number): string => {
  const minutes = Math.floor(secs / 60);
  const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes}:${returnedSeconds}`;
};

export default calculateTime;
