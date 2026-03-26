import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home/HomeScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';

import {
  COLOR,
  ICON_NAME,
  ICON_TYPE,
  MESSAGE,
  NAVIGATION_NAME,
} from '../constants';
import { IconButton } from '../components/common';
import SettingScreen from '../screens/setting/SettingScreen';
import SettingStack from './SettingStack';

export type MainTabParamList = {
  [NAVIGATION_NAME.HOME_SCREEN]: undefined;
  [NAVIGATION_NAME.NOTIFICATION_SCREEN]: undefined;
  [NAVIGATION_NAME.SETTINGS_STACK]: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

type IconNameType = (typeof ICON_NAME)[keyof typeof ICON_NAME];

const createTabScreenOptions = (
  iconName: IconNameType,
): BottomTabNavigationOptions => ({
  tabBarIcon: ({ focused }) => (
    <IconButton
      iconType={
        iconName === ICON_NAME.FIRE
          ? ICON_TYPE.FONT_AWESOME5
          : ICON_TYPE.IONICONS
      }
      name={iconName}
      size={24}
      color={focused ? COLOR.PRIMARY : COLOR.GREY}
      disabled
    />
  ),
});

const MainTabs: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION_NAME.HOME_SCREEN}
      screenOptions={({ route }) => ({
        ...Platform.select({
          android: {
            headerStyle: { backgroundColor: COLOR.PRIMARY },
            headerTitleStyle: { color: COLOR.SECONDARY },
            headerTintColor: COLOR.SECONDARY,
            headerTitleAlign: 'center',
            tabBarLabel: route.name,
            tabBarActiveTintColor: COLOR.GREY_900,
            tabBarInactiveTintColor: COLOR.GREY,
            tabBarLabelStyle: {
              fontWeight: '600',
              fontSize: 12,
            },
            tabBarStyle: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderTopWidth: 1,
              borderTopColor: COLOR.GREY_100,
              paddingTop: 5,
            },
          },
          ios: {
            headerStyle: { backgroundColor: COLOR.PRIMARY },
            headerTitleStyle: { color: COLOR.SECONDARY },
            headerTintColor: COLOR.SECONDARY,
            headerTitleAlign: 'center',
            tabBarLabel: route.name,
            tabBarActiveTintColor: COLOR.GREY_900,
            tabBarInactiveTintColor: COLOR.GREY,
            tabBarStyle: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderTopWidth: 1,
              borderTopColor: COLOR.GREY_100,
              paddingTop: 5,
            },
          },
        }),
      })}
    >
      {/* Trang chủ */}
      <Tab.Screen
        name={NAVIGATION_NAME.HOME_SCREEN}
        component={HomeScreen}
        options={{
          ...createTabScreenOptions(ICON_NAME.HOME),
          headerShown: false,
          tabBarLabel: MESSAGE.MENU.HOME,
        }}
      />

      {/* Notification */}
      <Tab.Screen
        name={NAVIGATION_NAME.NOTIFICATION_SCREEN}
        component={NotificationScreen}
        options={{
          ...createTabScreenOptions(ICON_NAME.FIRE),
          headerShown: false,
          tabBarLabel: MESSAGE.MENU.NOTIFICATION,
        }}
      />
      <Tab.Screen
        name={NAVIGATION_NAME.SETTINGS_STACK}
        component={SettingStack}
        options={{
          ...createTabScreenOptions(ICON_NAME.SETTINGS),
          headerShown: false,
          tabBarLabel: MESSAGE.MENU.SETTINGS,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
