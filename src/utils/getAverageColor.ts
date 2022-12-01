import { FastAverageColor } from 'fast-average-color';

const fac = new FastAverageColor();

const getAverageColor = async (image: string): Promise<string> => {
  // console.log('la imagen que me llega es ', image);
  const result = await fac
    .getColorAsync(image)
    .then((color) => {
      // console.log('Los colores son ', color);
      return color;
    })
    .catch((e) => {
      return e;
    });
  // console.log('El resultado es ', result.hex);
  // Promise.resolve(result);
  return result.rgba;
};

export default getAverageColor;
