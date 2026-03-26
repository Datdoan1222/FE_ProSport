import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NAVIGATION_NAME } from '../constants';
import InforVersionScreen from '../screens/setting/InforVersionScreen';
import SettingScreen from '../screens/setting/SettingScreen';

export type SetiingStackParamList = {
  [NAVIGATION_NAME.SETTINGS_SCREEN]: undefined;
  [NAVIGATION_NAME.INFO_VERSION_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<SetiingStackParamList>();

const SettingStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION_NAME.SETTINGS_SCREEN}
        component={SettingScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <Stack.Screen
        name={NAVIGATION_NAME.INFO_VERSION_SCREEN}
        component={InforVersionScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
