import React from 'react';
import { StyleSheet } from 'react-native';
import ShopsItem from './ShopsItem';
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

const ShopsSections: React.FC<ShopsSectionsProps> = ({
  data,
  onPressItemSection,
}) => {
  return <ShopsItem data={data} onPressItemSection={onPressItemSection} />;
};

export default ShopsSections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
