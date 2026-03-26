import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar, Button, Space, TextComponent } from '../common';
import { FONT_SIZE, ICON_NAME, ICON_TYPE } from '../../constants';
import { IconSetType } from '../common/IonIcons';

interface ShopsItemProps {
  id: string;
  image: string;
  name: string;
  avatar: string;
  status: string;
  openTime: string;
  closeTime: string;
  address: string;
}
interface ShopsSectionsProps {
  data: ShopsItemProps;
  onPressItemSection?: (item: ShopsItemProps) => void;
}
const ShopsItem: React.FC<ShopsSectionsProps> = ({
  data,
  onPressItemSection,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPressItemSection}
      style={styles.container}
    >
      <Image
        source={{ uri: data.image }}
        style={{
          height: 100,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      <View style={styles.content}>
        <View style={styles.info}>
          <Avatar uri={data.avatar} size={50} />
          <Space width={10} />
          <View>
            <TextComponent numberLine={1} size={FONT_SIZE.BODY_1}>
              {data.name}
            </TextComponent>
            <TextComponent
              numberLine={1}
              iconName={ICON_NAME.LOCATION}
              size={FONT_SIZE.BODY_2}
            >
              {data.address}
            </TextComponent>
            <TextComponent
              iconSet={ICON_TYPE.FEATHER as IconSetType}
              iconName={ICON_NAME.CLOCK}
              size={FONT_SIZE.BODY_2}
            >
              {data.openTime} - {data.closeTime}
            </TextComponent>
          </View>
        </View>
        <Button>Đặt sân</Button>
      </View>
    </TouchableOpacity>
  );
};

export default ShopsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 5,
    marginVertical: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
});
