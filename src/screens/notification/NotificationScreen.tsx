import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { NotificationItemProps } from '../../types/notification';
import { NOTIFICATION_DATA } from '../../data/notificationData';
import NotificationItem from '../../components/notification/NotificationItem';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
interface NotificationScreenProps {}

const NotificationScreen: React.FC<NotificationScreenProps> = () => {
  const [notificationsData, setNotificationsData] =
    useState<NotificationItemProps[]>(NOTIFICATION_DATA);
  const renderItem = ({ item }: { item: NotificationItemProps }) => (
    <NotificationItem data={item} onPressItemSection={() => {}} />
  );
  return (
    <ScreenWrapper idBackgroundHeader="notification">
      <FlatList
        data={notificationsData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        scrollEventThrottle={16}
      />
    </ScreenWrapper>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
