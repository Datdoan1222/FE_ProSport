import { Platform } from 'react-native';

const getBaseUrl = () => {
  if (__DEV__) {
    return Platform.OS === 'android'
      ? 'http://10.0.2.2:3000' // Android emulator
      : 'http://localhost:3000'; // iOS simulator
  }
  return 'https://api.yourapp.com'; // production
};

export const API = {
  BASE_URL: `${getBaseUrl()}/api`,
  ENDPOINTS: {
    FACILITIES: '/facilities',
  },
  VERSION: '/v1',
};

export const ENDPOINTS = {
  FACILITIES: `${API.BASE_URL}${API.VERSION}${API.ENDPOINTS.FACILITIES}`,
};
