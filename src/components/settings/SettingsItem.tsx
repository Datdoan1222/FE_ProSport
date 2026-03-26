import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { IconButton, IonIcons } from '../common';
import { BUTTON_SIZE, COLOR, ICON_NAME, ICON_TYPE } from '../../constants';
import { SettingItem } from '../../types/Setting';
interface SettingsItemProps {
  item: SettingItem;
  onPress?: () => void;
}
const SettingsItem: React.FC<SettingsItemProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.settingLeft}>
        <IconButton
          name={item.icon}
          iconType={ICON_TYPE.IONICONS}
          size={25}
          btnSize={BUTTON_SIZE.SMALL}
        />
        <Text style={styles.settingLabel}>{item.label}</Text>
      </View>
      <IonIcons
        name={ICON_NAME.ARROW_RIGHT}
        iconSet={ICON_TYPE.FEATHER}
        color={COLOR.BLACK}
        size={25}
      />
    </TouchableOpacity>
  );
};
export default SettingsItem;

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconWrapper: {
    width: 38,
    height: 38,
    borderRadius: 12,
    // backgroundColor: BG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 17,
  },
  settingLabel: {
    fontSize: 15,
    fontWeight: '500',
    // color: TEXT_PRIMARY,
    letterSpacing: -0.1,
  },
});
