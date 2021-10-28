import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');

const wp = (widthPercent: number) => {
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent.toString())) / 100,
  );
  return screenPixel;
};

const hp = (heightPercent: number) => {
  const screenPixel = PixelRatio.roundToNearestPixel(
    (height * parseFloat(heightPercent.toString())) / 100,
  );
  return screenPixel;
};

const figmaWidth: number = 375;

const px = (valuePx: number) => {
  const widthPercent = (valuePx / figmaWidth) * 100;
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * widthPercent) / 100,
  );
  return screenPixel;
};

export const metrics = {
  wp,
  hp,
  px,
};
