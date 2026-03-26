import React, { useRef, useState } from 'react';
import { Animated } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import { HEADER_MAX_HEIGHT } from '../../components/common/Header';
import { BANNER_DATA } from '../../data/bannerData';
import { CATEGORIES_DATA } from '../../data/categoriesData';
import { SHOPS_DATA } from '../../data/shopsData';
import {
  BannerItemProps,
  CategoryItemProps,
  ShopsItemProps,
} from '../../types';
import ShopsItem from '../../components/shops/ShopsItem';
import CategoriesSection from '../../components/Categories/CategoriesSection';
import { Banner } from '../../components/common';
interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [bannerData, setBannerData] = useState<BannerItemProps[]>(BANNER_DATA);
  const [categoriesData, setCategoriesData] =
    useState<CategoryItemProps[]>(CATEGORIES_DATA);
  const [shopsData, setShopsData] = useState<ShopsItemProps[]>(SHOPS_DATA);
  const renderItem = ({ item }: { item: ShopsItemProps }) => (
    <ShopsItem data={item} onPressItemSection={() => {}} />
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('1');
  const handleItemSection = (item: CategoryItemProps) => {
    setSelectedCategory(item.id);
    // You can perform additional actions here, such as navigating to a new screen or filtering content based on the selected category.
  };
  return (
    <ScreenWrapper
      isHeader={true}
      idBackgroundHeader={selectedCategory}
      scrollY={scrollY}
    >
      <Animated.FlatList
        data={shopsData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        ListHeaderComponent={
          <>
            <Banner data={bannerData} />
            <CategoriesSection
              data={categoriesData}
              onPressItemSection={handleItemSection}
            />
          </>
        }
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT + 30 }}
      />
    </ScreenWrapper>
  );
};

export default HomeScreen;
