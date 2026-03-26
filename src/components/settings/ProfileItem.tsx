import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ProfileItemProps } from '../../types/Setting';
import { IonIcons } from '../common';
import { COLOR, ICON_NAME, ICON_TYPE } from '../../constants';

const ProfileItem: React.FC<ProfileItemProps> = ({
  id,
  avatar,
  name,
  email,
  address,
}) => {
  return (
    <View style={styles.profileCard}>
      {/* Decorative background blob */}
      <View style={styles.blobTopRight} />

      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://i.pravatar.cc/150?img=47',
          }}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.name}>Hadi Jafrai</Text>
      <Text style={styles.email}>hadijafari.official@gmail.com</Text>

      <View style={styles.locationRow}>
        <IonIcons name={ICON_NAME.LOCATION} size={25} color={COLOR.PRIMARY} />
        <Text style={styles.locationText}>
          Product designer · Madrid, Spain
        </Text>
      </View>

      <TouchableOpacity style={styles.editButton} activeOpacity={0.85}>
        <IonIcons
          iconSet={ICON_TYPE.ANT_DESIGN}
          name={ICON_NAME.EDIT}
          size={16}
          color={COLOR.BLACK}
        />
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileItem;
const ORANGE = '#F97316';
const ORANGE_LIGHT = '#FFF4ED';
const TEXT_PRIMARY = '#1A1A2E';
const TEXT_SECONDARY = '#8A8A9A';
const CARD_BG = '#FFFFFF';
const styles = StyleSheet.create({
  profileCard: {
    backgroundColor: CARD_BG,
    borderRadius: 24,
    paddingVertical: 28,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 3,
  },
  blobTopRight: {
    position: 'absolute',
    top: -30,
    right: -30,
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: ORANGE_LIGHT,
    opacity: 0.6,
  },
  avatarContainer: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 3,
    borderColor: ORANGE_LIGHT,
    shadowColor: ORANGE,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 14,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 19,
    fontWeight: '700',
    color: TEXT_PRIMARY,
    letterSpacing: -0.2,
    marginBottom: 4,
  },
  email: {
    fontSize: 13,
    color: TEXT_SECONDARY,
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 20,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ORANGE,
    paddingHorizontal: 28,
    paddingVertical: 11,
    borderRadius: 50,
    gap: 8,
    shadowColor: ORANGE,
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  locationText: {
    fontSize: 12,
    color: TEXT_SECONDARY,
  },
});
