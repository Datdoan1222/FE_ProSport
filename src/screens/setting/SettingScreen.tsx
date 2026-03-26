import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import SettingsSection from '../../components/settings/SettingsSection';
import ProfileItem from '../../components/settings/ProfileItem';
import { SettingItem } from '../../types/Setting';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NAVIGATION_NAME } from '../../constants';
import { SetiingStackParamList } from '../../navigation/SettingStack';
import { useDispatch, useSelector } from 'react-redux';

const SettingScreen: React.FC = () => {
  type NavigationProp = NativeStackNavigationProp<SetiingStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  const users = useSelector((state: any) => state.user.list);
  const loading = useSelector((state: any) => state.user.loading);
  const handlePressItem = (item: SettingItem) => {
    if (item.id === 'profile') {
      navigation.navigate(NAVIGATION_NAME.INFO_VERSION_SCREEN);
    }
  };
  return (
    <ScreenWrapper idBackgroundHeader="profile">
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <ProfileItem id={''} avatar={''} name={''} email={''} address={''} />

        {/* Settings Group 1 */}
        <SettingsSection settings={[]} onPressItem={handlePressItem} />

        {/* Settings Group 2 */}
        <SettingsSection settings={[]} onPressItem={handlePressItem} />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingScreen;
