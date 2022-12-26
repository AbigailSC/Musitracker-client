const getTotalTime = (time: number): string => {
  const hours = time / 60;
  const hoursFx = Math.floor(time / 60);
  const minutes = (hours - hoursFx) * 60;
  const minutesFx = Math.round(minutes);
  if (hoursFx > 59)
    return `${Math.ceil(minutes / 60)}h ${Math.floor(minutes)}m`;
  return ` ${hoursFx}min ${minutesFx}s`;
};

export default getTotalTime;
