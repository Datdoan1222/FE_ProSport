export interface ShopsItemProps {
  id: string;
  image: string;
  name: string;
  avatar: string;
  status: string;
  openTime: string;
  closeTime: string;
  address: string;
}
export interface ShopsSectionsProps {
  data: ShopsItemProps[];
  onPressItemSection?: (item: ShopsItemProps) => void;
}