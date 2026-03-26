import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface InforVersionScreenProps {}

const InforVersionScreen: React.FC<InforVersionScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>InforVersionScreen Screen</Text>
    </View>
  );
};

export default InforVersionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
