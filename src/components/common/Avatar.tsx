import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { COLOR } from '../../constants';
interface AvatarProps {
  size?: number;
  uri: string;
}
const Avatar: React.FC<AvatarProps> = ({ size = 96, uri = '' }) => {
  const fallback = require('../../assets/images/avatar.png');

  // check uri hợp lệ (http/https)
  const isValidUrl =
    typeof uri === 'string' &&
    (uri.startsWith('http://') || uri.startsWith('https://'));

  const source = isValidUrl ? { uri } : fallback;

  return (
    <Image
      style={[
        styles.avatar,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
      source={source}
    />
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 3,
    borderColor: COLOR.WHITE,
    backgroundColor: COLOR.WHITE,
    elevation: 10,
  },
});
