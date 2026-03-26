import { ImageSourcePropType } from 'react-native';

export interface CategoryItemProps {
  id: string;
  logo: ImageSourcePropType;
  name: string;
  colorBackground: string;
  colorBorder: string;
}
export interface CategoriesSectionProps {
  data: CategoryItemProps[];
  isSelected?: boolean;
  onPressItemSection?: (item: CategoryItemProps) => void;
}
