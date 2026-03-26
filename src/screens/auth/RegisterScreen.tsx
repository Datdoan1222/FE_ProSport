import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import AuthForm from '../../components/form/AuthForm';

interface RegisterScreenProps {}

const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  return (
      <ImageBackground
      source={require('../../assets/images/splash-screen.png')}
      style={styles.imageBackground}
      imageStyle={{ flex: 1 }}
    >
      <AuthForm type="register" />
    </ImageBackground>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
    
  },
});