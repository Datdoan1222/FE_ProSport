import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { BUTTON_SIZE, BUTTON_TYPE, COLOR, FONT_SIZE } from '../constants';
import { FONT } from '../constants/fontConstants';

type ButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];
// => "primary" | "secondary" | "danger" | "success" | "empty" | "disabled" | "primaryBorder" | "outline" | "outlineGrey"

type ButtonSize = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];
// => "small" | "medium" | "large" | "empty"

export const buttonStyles = StyleSheet.create({
  container: {
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BUTTON,
  },
  title: {
    fontFamily: FONT.REGULAR,
    fontWeight: 'normal',
    lineHeight: 16.41,
    fontSize: FONT_SIZE.TITLE,
  },
});

export const containerTypes: Record<ButtonType, ViewStyle> = {
  [BUTTON_TYPE.PRIMARY]: {
    backgroundColor: COLOR.PRIMARY,
  },
  [BUTTON_TYPE.SECONDARY]: {
    borderWidth: 1,
    backgroundColor: COLOR.SECONDARY,
    borderColor: COLOR.PRIMARY,
  },
  [BUTTON_TYPE.DANGER]: {
    borderWidth: 1,
    backgroundColor: COLOR.SECONDARY,
    borderColor: COLOR.DANGER,
  },
  [BUTTON_TYPE.SUCCESS]: {
    backgroundColor: COLOR.SUCCESS,
  },
  [BUTTON_TYPE.EMPTY]: {
    backgroundColor: 'transparent',
  },
  [BUTTON_TYPE.DISABLED]: {
    backgroundColor: COLOR.GREY_100,
  },
  [BUTTON_TYPE.PRIMARY_BORDER]: {
    borderWidth: 1,
    borderColor: COLOR.PRIMARY,
    backgroundColor: COLOR.BLUE_100,
    borderRadius: 999,
  },
  [BUTTON_TYPE.OUTLINE]: {
    borderWidth: 1,
    borderColor: COLOR.GREY_300,
    backgroundColor: COLOR.WHITE,
    borderRadius: 999,
  },
  [BUTTON_TYPE.OUTLINE_GREY]: {
    borderWidth: 1,
    borderColor: COLOR.GREY_100,
    backgroundColor: COLOR.GREY_100,
    borderRadius: 999,
  },
};

export const containerSizes: Record<ButtonSize, ViewStyle> = {
  [BUTTON_SIZE.SMALL]: { paddingVertical: 10, paddingHorizontal: 15 },
  [BUTTON_SIZE.MEDIUM]: { paddingVertical: 10, paddingHorizontal: 20 },
  [BUTTON_SIZE.LARGE]: { paddingVertical: 12, paddingHorizontal: 20 },
  [BUTTON_SIZE.EMPTY]: { paddingVertical: 10, paddingHorizontal: 0 },
};

export const textColors: Record<ButtonType, TextStyle> = {
  [BUTTON_TYPE.PRIMARY]: { color: COLOR.SECONDARY },
  [BUTTON_TYPE.SECONDARY]: { color: COLOR.PRIMARY },
  [BUTTON_TYPE.DANGER]: { color: COLOR.DANGER },
  [BUTTON_TYPE.SUCCESS]: { color: COLOR.WHITE },
  [BUTTON_TYPE.EMPTY]: { color: COLOR.BLACK },
  [BUTTON_TYPE.DISABLED]: { color: COLOR.GREY_400 },
  [BUTTON_TYPE.PRIMARY_BORDER]: { color: COLOR.PRIMARY },
  [BUTTON_TYPE.OUTLINE]: { color: COLOR.GREY_900 },
  [BUTTON_TYPE.OUTLINE_GREY]: { color: COLOR.GREY_900 },
};
