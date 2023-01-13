import { FastAverageColor } from 'fast-average-color';

const fac = new FastAverageColor();

const getAverageColor = async (image: string): Promise<string> => {
  const result = await fac
    .getColorAsync(image)
    .then((color) => {
      return color;
    })
    .catch((e) => {
      return e;
    });
  return result.rgba;
};

export default getAverageColor;
