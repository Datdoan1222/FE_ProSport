export interface ProfileItem {
  id: string;
  avatar: String;
  name: string;
  email: string;
  address: string;
}
export interface SettingItem {
  id: string;
  icon: string;
  label: string;
}

export interface SettingSectionProps {
  settings: SettingItem[];
  onPressItem?: (item: SettingItem) => void;
}
export interface ProfileSectionProps {
  profile: ProfileItem;
  onPressProfileItemSection?: (item: ProfileItem) => void;
}
