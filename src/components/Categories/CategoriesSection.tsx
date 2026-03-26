import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { CategoriesSectionProps, CategoryItemProps } from '../../types';
import CategoriesItem from './CategoriesItem';

const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  data,
  onPressItemSection,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const renderItem = ({ item }: { item: CategoryItemProps }) => (
    <CategoriesItem
      item={item}
      isSelected={item.id === selectedId}
      onPressItem={item => {
        setSelectedId(item.id);
        if (typeof onPressItemSection === 'function') {
          onPressItemSection(item);
        }
      }}
    />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ marginVertical: 16 }}
    />
  );
};

export default CategoriesSection;
