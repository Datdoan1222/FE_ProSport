import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IonIcons, { IconSetType } from './IonIcons';
import Space from './Space';
import { COLOR } from '../../constants';
import { FONT } from '../../constants/fontConstants';

interface TextComponentProps {
  size?: number;
  flex?: number;
  isTitle?: boolean;
  color?: string;
  styles?: object;
  onPress?: () => void;
  isRequired?: boolean;
  numberLine?: number;
  children: React.ReactNode;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  iconName?: string;
  iconSet?: IconSetType;
}
const TextComponent: React.FC<TextComponentProps> = ({
  size,
  flex = 0,
  isTitle = false,
  color = 'black',
  styles = {},
  onPress,
  isRequired = false,
  numberLine = 1,
  children,
  alignItems = 'center',
  iconName,
  iconSet,
}) => {
  return (
    <View
      style={{
        flex: flex ?? 0,
        width: '100%',
        alignItems: alignItems,
        flexDirection: 'row',
      }}
    >
      {iconName && (
        <IonIcons name={iconName} iconSet={iconSet} size={size} color={color} />
      )}
      <Space width={4} />
      <Text
        numberOfLines={numberLine}
        style={[
          styless.text,
          {
            color: color ?? COLOR.GREY_900,
            fontSize: size ? size : isTitle ? 16 : 14,
            fontWeight: isTitle ? 'bold' : '100',
          },
          styles,
        ]}
        onPress={onPress}
        suppressHighlighting={!onPress}
      >
        {children}
        <Space width={4} />
        {isRequired && (
          <Text allowFontScaling={false} style={[styless.requiredText]}>
            *
          </Text>
        )}
      </Text>
    </View>
  );
};

const styless = StyleSheet.create({
  requiredText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },

  text: {
    fontFamily: FONT.REGULAR,
  },
});

export default TextComponent;
