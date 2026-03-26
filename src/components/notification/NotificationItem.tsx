import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { NotificationSectionsProps } from '../../types/notification';
import { Button } from '../common';
import { COLOR } from '../../constants';

const NotificationItem: React.FC<NotificationSectionsProps> = ({
  data,
  onPressItemSection,
}) => {
  return (
    <ImageBackground
      source={{ uri: data?.image }} // hoặc require(...)
      style={styles.container}
      imageStyle={styles.image}
    >
      <Button styles={styles.button} onPress={() => onPressItemSection?.(data)}>
        Đặt lịch ngay
      </Button>
    </ImageBackground>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
    marginBottom: 15,
    backgroundColor: '#000',
    borderRadius: 12,
  },

  image: {
    borderRadius: 12,
  },

  button: {
    alignSelf: 'flex-end',
    margin: 10,
    backgroundColor: COLOR.DANGER_50,
  },

  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});
