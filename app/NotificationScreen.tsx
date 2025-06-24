import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const notifications = [
  {
    id: '1',
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: 'Last Wednesday at 9:42 AM',
    read: false,
  },
  {
    id: '2',
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: 'Last Wednesday at 9:42 AM',
    read: false,
  },
  // Add more mock notifications here...
];

export default function NotificationScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      {!item.read && <View style={styles.dot} />}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      
      <View style={styles.tabs}>
        <TouchableOpacity><Text style={styles.activeTab}>All</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.tab}>Unread</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.tab}>Read</Text></TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  activeTab: {
    color: '#4CAF50',
    fontWeight: 'bold',
    marginRight: 15,
  },
  tab: {
    color: '#999',
    marginRight: 15,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    color: '#333',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
  },
});
