export interface NotificationItemProps {
  id: string;
  image: string;
  name: string;
  avatar: string;
  status: string;
  openTime: string;
  closeTime: string;
  address: string;
}
export interface NotificationSectionsProps {
  data: NotificationItemProps;
  onPressItemSection?: (item: NotificationItemProps) => void;
}
