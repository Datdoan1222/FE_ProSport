import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  ImageSourcePropType,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { COLOR } from '../../constants';

const { width } = Dimensions.get('window');

export type BannerItem = {
  // id: string;
  image: string;
};

type BannerProps = {
  data: string[];
  onPressItem?: (item: BannerItem) => void;
  style?: any;
  swipeEnabled?: boolean;
};

const Banner: React.FC<BannerProps> = ({
  data,
  onPressItem,
  style,
  swipeEnabled = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!Array.isArray(data) || data.length === 0) return null;

  const renderItem = ({ item }: { item: string }) => {
    return (
      <Pressable onPress={() => onPressItem}>
        <View style={styles.item}>
          <Image source={{ uri: item }} style={styles.image} />
        </View>
      </Pressable>
    );
  };

  return (
    <View style={[style ? style : styles.container]}>
      <Carousel
        width={width - 32}
        height={125}
        data={data}
        renderItem={renderItem}
        autoPlay
        loop
        onSnapToItem={setActiveIndex}
        pagingEnabled
        snapEnabled
        enabled={swipeEnabled}
        // mode="parallax"
      />
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 12,
  },
  item: {
    borderRadius: 35,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  // DOTS
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: COLOR.PRIMARY,
    width: 8,
    height: 8,
  },
});
