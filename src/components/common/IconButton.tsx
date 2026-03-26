import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BUTTON_SIZE, COLOR, ICON_NAME, ICON_TYPE } from '../../constants';


type IconLibraryProps = {
  name: string;
  size?: number;
  color?: string;
  style?: object;
};

type ButtonSize = keyof typeof BUTTON_PADDING;

interface IconButtonProps {
  name?: string;
  iconType?: keyof typeof ICON_MAP;
  color?: string;
  size?: number;
  btnSize?: ButtonSize | null;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

const ICON_MAP = {
  [ICON_TYPE.ANT_DESIGN]: AntDesign,
  [ICON_TYPE.FEATHER]: Feather,
  [ICON_TYPE.IONICONS]: Ionicons,
  [ICON_TYPE.FONT_AWESOME]: FontAwesome,
  [ICON_TYPE.FONT_AWESOME5]: FontAwesome5,
  [ICON_TYPE.FONT_AWESOME6]: FontAwesome6,
  [ICON_TYPE.MATERIAL_COMMUNITY_ICONS]: MaterialCommunityIcons,
} as const;

const BUTTON_PADDING = {
  [BUTTON_SIZE.SMALL]: 8,
  [BUTTON_SIZE.MEDIUM]: 12,
  [BUTTON_SIZE.LARGE]: 16,
} as const;

const IconButton = React.forwardRef<View, IconButtonProps>(
  (
    {
      name = ICON_NAME.PLUS_CIRCLE,
      iconType = ICON_TYPE.ANT_DESIGN,
      color = COLOR.PRIMARY,
      size = 32,
      btnSize = null,
      onPress,
      disabled = false,
    },
    ref,
  ) => {
    const Icon = (ICON_MAP[iconType] ??
      AntDesign) as React.ComponentType<IconLibraryProps>;

    const hasBtnSize = btnSize !== null && btnSize in BUTTON_PADDING;

    return (
      <TouchableOpacity
        ref={ref}
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.base,
          hasBtnSize && [
            styles.withBackground,
            { padding: BUTTON_PADDING[btnSize as ButtonSize] },
          ],
        ]}
      >
        <Icon name={name} size={size} color={color} />
      </TouchableOpacity>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  withBackground: {
    backgroundColor: COLOR.WHITE,
  },
});
