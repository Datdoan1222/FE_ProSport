import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import MainTabs, { MainTabParamList } from './MainTabs';

import { NAVIGATION_NAME } from '../constants';

export type RootStackParamList = {
  [NAVIGATION_NAME.MAIN_TABS]: undefined;
  [NAVIGATION_NAME.LOGIN_SCREEN]: undefined;
  [NAVIGATION_NAME.REGISTER_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NAVIGATION_NAME.MAIN_TABS}
          component={MainTabs}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name={NAVIGATION_NAME.LOGIN_SCREEN}
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={NAVIGATION_NAME.REGISTER_SCREEN}
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
