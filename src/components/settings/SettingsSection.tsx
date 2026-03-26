import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SettingSectionProps } from '../../types/Setting';
import SettingsItem from './SettingsItem';

const SettingsSection: React.FC<SettingSectionProps> = ({
  settings,
  onPressItem,
}) => {
  return (
    <View style={styles.settingsGroup}>
      {settings.map(item => (
        <SettingsItem
          key={item.id}
          item={item}
          onPress={() => onPressItem?.(item)}
        />
      ))}
    </View>
  );
};
const CARD_BG = '#FFFFFF';
const BORDER = '#EFEFEF';
export default SettingsSection;
const styles = StyleSheet.create({
  settingsGroup: {
    backgroundColor: CARD_BG,
    borderRadius: 20,
    paddingHorizontal: 4,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  divider: {
    height: 1,
    backgroundColor: BORDER,
    marginHorizontal: 16,
  },
});
