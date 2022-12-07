const changeOpacityColor = (color: string): string => {
  const opacity = 0.5;
  const rgb = color
    .replace(/[^\d,]/g, '')
    .split(',')
    .map((n) => parseInt(n, 10));
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
};

export default changeOpacityColor;
