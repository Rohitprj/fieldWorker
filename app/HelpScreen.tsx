import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const helpItems = [
  { id: '1', title: 'Account', icon: 'https://img.icons8.com/ios-filled/50/000000/user.png' },
  { id: '2', title: 'Notifications', icon: 'https://img.icons8.com/ios-filled/50/000000/appointment-reminders--v1.png' },
  { id: '3', title: 'Statement', icon: 'https://img.icons8.com/ios-filled/50/000000/document.png' },
  { id: '4', title: 'Language', icon: 'https://img.icons8.com/ios-filled/50/000000/language.png' },
  { id: '5', title: 'Refer & Earn', icon: 'https://img.icons8.com/ios-filled/50/000000/referral-codes.png' },
  { id: '6', title: 'Theme', icon: 'https://img.icons8.com/ios-filled/50/000000/paint-palette.png' },
  { id: '7', title: 'Videos for you', icon: 'https://img.icons8.com/ios-filled/50/000000/youtube-play.png' },
  { id: '8', title: 'Support Ticket', icon: 'https://img.icons8.com/ios-filled/50/000000/ticket.png' },
  { id: '9', title: 'Help', icon: 'https://img.icons8.com/ios-filled/50/000000/help.png' },
  { id: '10', title: 'Log-out', icon: 'https://img.icons8.com/ios-filled/50/000000/logout-rounded-left.png' },
];

export default function HelpScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.arrow}>{'>'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help</Text>
      <FlatList
        data={helpItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  arrow: {
    fontSize: 18,
    color: '#999',
  },
});
