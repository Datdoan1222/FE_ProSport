import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { TextComponent } from '../common';
import { FONT_SIZE } from '../../constants';

interface CategoryItem {
  id: string;
  logo: ImageSourcePropType;
  name: string;
  colorBackground: string;
  colorBorder: string;
}
interface CategoriesItemProps {
  item: CategoryItem;
  isSelected?: boolean;
  onPressItem?: (item: CategoryItem) => void;
}
const SIZE_CATEGORY_ITEM = 30;
const CategoriesItem: React.FC<CategoriesItemProps> = ({
  item,
  isSelected = false,
  onPressItem,
}) => {
  const styleCategoryItem = {
    backgroundColor: 'white',
    borderColor: 'white',
    // borderWidth: 1,
    elevation: 2,
  };
  const styleLogoSmall = {
    width: SIZE_CATEGORY_ITEM,
    height: SIZE_CATEGORY_ITEM,
  };
  const styleLogoBig = {
    width: SIZE_CATEGORY_ITEM + 5,
    height: SIZE_CATEGORY_ITEM + 5,
  };
  return (
    <TouchableOpacity
      key={item.id.toString()}
      onPress={() => onPressItem?.(item)}
      style={[styles.container, isSelected ? styleCategoryItem : null]}
    >
      <Image
        source={item.logo}
        style={{ ...styleLogoSmall, ...(isSelected ? styleLogoBig : {}) }}
      />
      <TextComponent size={FONT_SIZE.BODY_2}>{item.name}</TextComponent>
    </TouchableOpacity>
  );
};

export default CategoriesItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
  },
});
