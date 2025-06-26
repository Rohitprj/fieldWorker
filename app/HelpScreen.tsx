// import { router } from 'expo-router';
// import React from 'react';
// import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const helpItems = [
//   { id: '1', title: 'Account', icon: 'https://img.icons8.com/ios-filled/50/000000/user.png' },
//   { id: '2', title: 'Notifications', icon: 'https://img.icons8.com/ios-filled/50/000000/appointment-reminders--v1.png' },
//   { id: '3', title: 'Statement', icon: 'https://img.icons8.com/ios-filled/50/000000/document.png' },
//   { id: '4', title: 'Language', icon: 'https://img.icons8.com/ios-filled/50/000000/language.png' },
//   { id: '5', title: 'Refer & Earn', icon: 'https://img.icons8.com/ios-filled/50/000000/referral-codes.png' },
//   { id: '6', title: 'Theme', icon: 'https://img.icons8.com/ios-filled/50/000000/paint-palette.png' },
//   { id: '7', title: 'Videos for you', icon: 'https://img.icons8.com/ios-filled/50/000000/youtube-play.png' },
//   { id: '8', title: 'Support Ticket', icon: 'https://img.icons8.com/ios-filled/50/000000/ticket.png' },
//   { id: '9', title: 'Help', icon: 'https://img.icons8.com/ios-filled/50/000000/help.png' },
//   { id: '10', title: 'Log-out', icon: 'https://img.icons8.com/ios-filled/50/000000/logout-rounded-left.png' },
// ];

// export default function HelpScreen() {
//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.item}>
//       <Image source={{ uri: item.icon }} style={styles.icon} />
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.arrow}>{'>'}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Help</Text>
//       <FlatList
//         data={helpItems}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//       <View style={{ bottom: 30 }}>
//           <Button title="Go to Face Selfie Screen" onPress={() => router.push('/Settings')} />
//         </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 60,
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: '600',
//     marginBottom: 20,
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 0.5,
//     borderBottomColor: '#ccc',
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     marginRight: 15,
//   },
//   title: {
//     flex: 1,
//     fontSize: 16,
//   },
//   arrow: {
//     fontSize: 18,
//     color: '#999',
//   },
// });

import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SettingsScreen() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);

  const toggleSwitch = () => setIsDarkTheme((previousState) => !previousState);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Help</Text>

      {/* Profile Info */}
      {/* <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Devashish Nayak</Text>
          <Text style={styles.email}>dev@gmail.com • 201301</Text>
        </View>
      </View> */}

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <TouchableOpacity style={styles.menuItem} key={index}>
          <View style={[styles.iconWrapper, { backgroundColor: item.bg }]}>
            <item.icon name={item.iconName} size={20} color={"white"} />
          </View>
          <Text style={styles.menuLabel}>{item.label}</Text>
          {item.rightText && (
            <Text style={styles.rightText}>{item.rightText}</Text>
          )}
          {item.isSwitch ? (
            <Switch
              value={isDarkTheme}
              onValueChange={toggleSwitch}
              thumbColor={"#fff"}
              trackColor={{ true: "#4f9efd", false: "#ccc" }}
            />
          ) : (
            <Ionicons name="chevron-forward" size={20} color="#888" />
          )}
        </TouchableOpacity>
      ))}
      {/* <View style={{ marginBottom: 30 }}>
        <Button
          title="Go to Face Selfie Screen"
          onPress={() => router.push("/Settings")}
        />
      </View> */}
    </ScrollView>
  );
}

const menuItems = [
  { label: "Account", icon: MaterialIcons, iconName: "person", bg: "#f78c2a" },
  {
    label: "Notifications",
    icon: Ionicons,
    iconName: "notifications",
    bg: "#ef4f91",
  },
  {
    label: "Statement",
    icon: Ionicons,
    iconName: "document-text",
    bg: "#9c5aff",
  },
  { label: "Language", icon: Entypo, iconName: "language", bg: "#f7c942" },
  { label: "Refer & Earn", icon: Entypo, iconName: "megaphone", bg: "#ff9051" },
  // { label: "Theme", icon: Ionicons, iconName: "moon", bg: "#a663f7" },
  {
    label: "Videos for you",
    icon: MaterialIcons,
    iconName: "video-library",
    bg: "#fcbf49",
  },
  {
    label: "Support Ticket",
    icon: Ionicons,
    iconName: "help-buoy",
    bg: "#e94a66",
  },
  // { label: "Help", icon: Feather, iconName: "help-circle", bg: "#ffbd00" },
  // { label: "Log-out", icon: MaterialIcons, iconName: "logout", bg: "#f25c54" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  email: {
    fontSize: 14,
    color: "#888",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
  },
  rightText: {
    marginRight: 10,
    color: "#4f9efd",
    fontWeight: "600",
  },
  deactivateButton: {
    backgroundColor: "#fce4e4",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 30,
    marginBottom: 120,
  },
  deactivateText: {
    color: "#d32f2f",
    fontWeight: "600",
  },
});
