import React from 'react';
import { View, StyleSheet, StatusBar, Animated } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { COLOR } from '../../constants';
import { Header } from '../common';
type Props = {
  children: React.ReactNode;
  backgroundColor?: string;
  isHeader?: boolean;
  idBackgroundHeader: string;
  barStyle?: 'light-content' | 'dark-content';
  scrollY?: Animated.Value;
};

const ScreenWrapper = ({
  children,
  backgroundColor = COLOR.BACKGROUND,
  idBackgroundHeader,
  isHeader = false,
  barStyle = 'dark-content',
  scrollY = new Animated.Value(0),
}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor }]}
      edges={isHeader ? ['bottom'] : ['top', 'bottom']}
    >
      <StatusBar
        barStyle={barStyle}
        backgroundColor={backgroundColor}
        translucent={false}
      />
      {isHeader && (
        <Header
          scrollY={scrollY as any}
          idBackgroundHeader={idBackgroundHeader}
          styleHeader={{ paddingTop: insets.top }}
          sizeIconBtn={24}
          colorIconBtn={COLOR.BLACK}
        >
          Xin chào!
        </Header>
      )}

      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
