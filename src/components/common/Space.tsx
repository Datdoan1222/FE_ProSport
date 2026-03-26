import React from 'react';
import { View } from 'react-native';

interface SpaceProps {
  width?: number;
  height?: number;
  [key: string]: any; // Cho phép các props khác
}
const Space: React.FC<SpaceProps> = ({ width, height, ...res }) => {
  return <View style={{ width, height, ...res }}></View>;
};

export default Space;
