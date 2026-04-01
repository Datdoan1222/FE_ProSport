import React, { useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import Avatar from './Avatar';
import IconButton from './IconButton';
import IonIcons from './IonIcons';
import Space from './Space';
import TextComponent from './TextComponent';
import {
  BUTTON_SIZE,
  COLOR,
  FONT_SIZE,
  ICON_NAME,
  ICON_TYPE,
} from '../../constants';
import { BANNER_DATA } from '../../data/bannerData';

export const HEADER_MAX_HEIGHT = 170;
export const HEADER_MIN_HEIGHT = 100;

const DEFAULT_AVATAR_SIZE = 60;
const DEFAULT_ICON_SIZE = 30;
const SEARCH_BAR_BOTTOM_OFFSET = -20;
const SEARCH_BAR_HORIZONTAL_PADDING = 32;
const SEARCH_BAR_ICON_WIDTH = 40;
const SEARCH_BAR_GAP = 10;

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface HeaderProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  scrollY: Animated.Value;
  height?: number;
  sizeAvatar?: number;
  sizeIconBtn?: number;
  colorIconBtn?: string;
  idBackgroundHeader?: string | number;
  styleHeader?: object;
}

const createAnimations = (scrollY: Animated.Value) => {
  const scrollRange = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  const translateY = scrollY.interpolate({
    inputRange: [0, scrollRange],
    outputRange: [0, -scrollRange],
    extrapolate: 'clamp',
  });

  const infoOpacity = scrollY.interpolate({
    inputRange: [0, 50, 100],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });

  const infoTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -40],
    extrapolate: 'clamp',
  });

  return { translateY, infoOpacity, infoTranslateY };
};

const Header: React.FC<HeaderProps> = ({
  children,
  backgroundColor = COLOR.HEADER,
  scrollY,
  height = HEADER_MAX_HEIGHT,
  sizeAvatar = DEFAULT_AVATAR_SIZE,
  sizeIconBtn = DEFAULT_ICON_SIZE,
  colorIconBtn = COLOR.BLACK,
  idBackgroundHeader,
  styleHeader = {},
}) => {
  const [backgroundHeader, setBackgroundHeader] = useState<
    ImageSourcePropType | undefined
  >();

  useEffect(() => {
    if (!idBackgroundHeader) return;
    const banner = BANNER_DATA.find(item => item.id === idBackgroundHeader);
    if (banner) setBackgroundHeader(banner.image);
  }, [idBackgroundHeader]);

  const { translateY, infoOpacity, infoTranslateY } = createAnimations(scrollY);

  const searchBarWidth =
    SCREEN_WIDTH -
    SEARCH_BAR_HORIZONTAL_PADDING -
    SEARCH_BAR_ICON_WIDTH -
    SEARCH_BAR_GAP;

  return (
    <Animated.View
      style={[styles.wrapper, { transform: [{ translateY }], height }]}
    >
      <ImageBackground
        source={backgroundHeader}
        style={[styles.container, styleHeader, { backgroundColor, height }]}
      >
        <View style={styles.overlay} />

        <Animated.View
          style={[
            styles.information,
            {
              opacity: infoOpacity,
              transform: [{ translateY: infoTranslateY }],
            },
          ]}
        >
          <UserInfo sizeAvatar={sizeAvatar}>{children}</UserInfo>

          <IconButton
            name={ICON_NAME.NOTIFICATIONS}
            iconType={ICON_TYPE.FONT_AWESOME}
            size={sizeIconBtn}
            color={COLOR.WHITE}
          />
        </Animated.View>
      </ImageBackground>

      <View style={styles.search}>
        <TextInput
          style={[styles.input, { width: searchBarWidth }]}
          placeholder="Nhập số điện thoại"
          keyboardType="phone-pad"
        />
        <IconButton
          btnSize={BUTTON_SIZE.SMALL}
          name={ICON_NAME.HEART}
          iconType={ICON_TYPE.FONT_AWESOME}
          size={sizeIconBtn}
          color={colorIconBtn}
        />
      </View>

      <Space height={30} />
    </Animated.View>
  );
};

interface UserInfoProps {
  sizeAvatar: number;
  children?: React.ReactNode;
}

const UserInfo: React.FC<UserInfoProps> = ({ sizeAvatar, children }) => (
  <View style={styles.userInfo}>
    <Avatar size={sizeAvatar} uri="" />
    <Space width={10} />
    <View>
      <TextComponent size={FONT_SIZE.H4} isTitle>
        Doan Anh Dat
      </TextComponent>
      <View style={styles.location}>
        <IonIcons name={ICON_NAME.LOCATION} size={12} color={COLOR.WHITE} />
        <TextComponent size={FONT_SIZE.BODY_2}>{children}</TextComponent>
      </View>
    </View>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(184, 184, 184, 0.4)',
  },
  information: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    flex: 1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  search: {
    position: 'absolute',
    bottom: SEARCH_BAR_BOTTOM_OFFSET,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH - SEARCH_BAR_HORIZONTAL_PADDING,
  },
  input: {
    height: 38,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
