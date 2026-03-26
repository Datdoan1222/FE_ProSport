import React from 'react';
import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  View,
} from 'react-native';

import {
  buttonStyles,
  containerSizes,
  containerTypes,
  textColors,
} from '../../style/buttonStyles';
import { BUTTON_SIZE, BUTTON_TYPE } from '../../constants';
import Space from './Space';

interface ButtonProps {
  type?: (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];
  size?: (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];
  onPress?: (event: GestureResponderEvent) => void;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
  styles?: object;
}

const Button = React.forwardRef<View, ButtonProps>(
  (
    {
      type = BUTTON_TYPE.PRIMARY,
      size = BUTTON_SIZE.MEDIUM,
      onPress,
      prefix,
      suffix,
      disabled = false,
      children,
      styles = {},
    },
    ref,
  ) => {
    const buttonStyle = [
      buttonStyles.container,
      containerTypes[type],
      containerSizes[size],
    ];

    const textStyle = [buttonStyles.title, textColors[type]];

    return (
      <TouchableOpacity
        ref={ref}
        style={[buttonStyle, styles]}
        onPress={onPress}
        disabled={disabled}
      >
        {prefix ?? null}
        <Space width={10} />
        <Text allowFontScaling={false} style={textStyle}>
          {children}
        </Text>
        <Space width={10} />
        {suffix ?? null}
      </TouchableOpacity>
    );
  },
);

Button.displayName = 'Button';

export default Button;
