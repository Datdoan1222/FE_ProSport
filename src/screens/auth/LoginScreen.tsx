import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import AuthForm from '../../components/form/AuthForm';


interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/splash-screen.png')}
      style={styles.imageBackground}
      imageStyle={{ flex: 1 }}
    >
      <AuthForm type="login" />
    </ImageBackground>
  );
};``

export default LoginScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
    
  },
});
