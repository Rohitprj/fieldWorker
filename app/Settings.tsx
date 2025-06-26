// // import {
// //     AntDesign,
// //     Entypo,
// //     Feather,
// //     Ionicons,
// //     MaterialIcons,
// // } from "@expo/vector-icons";
// // import { router } from "expo-router";
// // import React, { useState } from "react";
// // import {
// //     Image,
// //     Modal,
// //     Pressable,
// //     ScrollView,
// //     StyleSheet,
// //     Switch,
// //     Text,
// //     TouchableOpacity,
// //     View,
// // } from "react-native";

// // export default function SettingsScreen() {
// //   const [isDarkTheme, setIsDarkTheme] = useState(true);
// //   const [languageModalVisible, setLanguageModalVisible] = useState(false);
// //   const [logoutModalVisible, setLogoutModalVisible] = useState(false);
// //   const [selectedLanguage, setSelectedLanguage] = useState("English");

// //   const toggleSwitch = () => setIsDarkTheme((previousState) => !previousState);

// //   const handleLanguageChange = (lang) => {
// //     setSelectedLanguage(lang);
// //     setLanguageModalVisible(false);
// //   };

// //   const handleLogout = () => {
// //     setLogoutModalVisible(false);
// //     router.push("/Login"); // Navigate to Login screen after logout
// //     console.log("Logged out"); // replace this with your logout logic
// //   };

// //   return (
// //     <ScrollView style={styles.container}>
// //       <Text style={styles.header}>Settings</Text>

// //       <View style={styles.profileContainer}>
// //         <Image
// //           source={{ uri: "https://i.pravatar.cc/100" }}
// //           style={styles.avatar}
// //         />
// //         <View>
// //           <Text style={styles.name}>Devashish Nayak</Text>
// //           <Text style={styles.email}>dev@gmail.com • 201301</Text>
// //         </View>
// //       </View>

// //       {menuItems.map((item, index) => {
// //         if (item.label === "Language") {
// //           return (
// //             <TouchableOpacity
// //               style={styles.menuItem}
// //               key={index}
// //               onPress={() => setLanguageModalVisible(true)}
// //             >
// //               <View style={[styles.iconWrapper, { backgroundColor: item.bg }]}>
// //                 <item.icon name={item.iconName} size={20} color={"white"} />
// //               </View>
// //               <Text style={styles.menuLabel}>{item.label}</Text>
// //               <Text style={styles.rightText}>{selectedLanguage.slice(0, 3).toUpperCase()}</Text>
// //               <Ionicons name="chevron-forward" size={20} color="#888" />
// //             </TouchableOpacity>
// //           );
// //         }

// //         if (item.label === "Log-out") {
// //           return (
// //             <TouchableOpacity
// //               style={styles.menuItem}
// //               key={index}
// //               onPress={() => setLogoutModalVisible(true)}
// //             >
// //               <View style={[styles.iconWrapper, { backgroundColor: item.bg }]}>
// //                 <item.icon name={item.iconName} size={20} color={"white"} />
// //               </View>
// //               <Text style={styles.menuLabel}>{item.label}</Text>
// //               <Ionicons name="chevron-forward" size={20} color="#888" />
// //             </TouchableOpacity>
// //           );
// //         }

// //         return (
// //           <TouchableOpacity style={styles.menuItem} key={index}>
// //             <View style={[styles.iconWrapper, { backgroundColor: item.bg }]}>
// //               <item.icon name={item.iconName} size={20} color={"white"} />
// //             </View>
// //             <Text style={styles.menuLabel}>{item.label}</Text>
// //             {item.rightText && <Text style={styles.rightText}>{item.rightText}</Text>}
// //             {item.isSwitch ? (
// //               <Switch
// //                 value={isDarkTheme}
// //                 onValueChange={toggleSwitch}
// //                 thumbColor={"#fff"}
// //                 trackColor={{ true: "#4f9efd", false: "#ccc" }}
// //               />
// //             ) : (
// //               <Ionicons name="chevron-forward" size={20} color="#888" />
// //             )}
// //           </TouchableOpacity>
// //         );
// //       })}

// //       <TouchableOpacity style={styles.deactivateButton}>
// //         <Text style={styles.deactivateText}>Deactivate Account</Text>
// //       </TouchableOpacity>

// //       {/* Language Modal */}
// //       <Modal
// //         animationType="slide"
// //         transparent={true}
// //         visible={languageModalVisible}
// //         onRequestClose={() => setLanguageModalVisible(false)}
// //       >
// //         <View style={styles.modalOverlay}>
// //           <View style={styles.modalContent}>
// //             {languages.map((lang, index) => (
// //               <Pressable
// //                 key={index}
// //                 onPress={() => handleLanguageChange(lang.name)}
// //                 style={styles.languageOption}
// //               >
// //                 <View>
// //                   <Text style={{ fontSize: 16 }}>{lang.native}</Text>
// //                   <Text style={{ color: '#777' }}>{lang.name}</Text>
// //                 </View>
// //                 {selectedLanguage === lang.name && (
// //                   <AntDesign name="checkcircle" size={20} color="#4f9efd" />
// //                 )}
// //               </Pressable>
// //             ))}
// //           </View>
// //         </View>
// //       </Modal>

// //       {/* Logout Confirmation Modal */}
// //       <Modal
// //         transparent={true}
// //         animationType="fade"
// //         visible={logoutModalVisible}
// //         onRequestClose={() => setLogoutModalVisible(false)}
// //       >
// //         <View style={styles.modalOverlay}>
// //           <View style={[styles.modalContent, { alignItems: 'center' }]}>
// //             <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold' }}>Logout</Text>
// //             <Text style={{ marginVertical: 15, color: '#444' }}>
// //               Are you sure you want to logout?
// //             </Text>
// //             <View style={{ flexDirection: 'row', gap: 10 }}>
// //               <TouchableOpacity
// //                 onPress={() => setLogoutModalVisible(false)}
// //                 style={{ backgroundColor: '#f0f0f0', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20 }}
// //               >
// //                 <Text>Cancel</Text>
// //               </TouchableOpacity>
// //               <TouchableOpacity
// //                 onPress={handleLogout}
// //                 style={{ backgroundColor: '#e53935', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20 }}
// //               >
// //                 <Text style={{ color: 'white' }}>Logout</Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         </View>
// //       </Modal>
// //     </ScrollView>
// //   );
// // }

// // const menuItems = [
// //   { label: "Account", icon: MaterialIcons, iconName: "person", bg: "#f78c2a" },
// //   { label: "Notifications", icon: Ionicons, iconName: "notifications", bg: "#ef4f91" },
// //   { label: "Statement", icon: Ionicons, iconName: "document-text", bg: "#9c5aff", rightText: "123" },
// //   { label: "Language", icon: Entypo, iconName: "language", bg: "#f7c942" },
// //   { label: "Refer & Earn", icon: Entypo, iconName: "megaphone", bg: "#ff9051" },
// //   { label: "Theme", icon: Ionicons, iconName: "moon", bg: "#a663f7", isSwitch: true },
// //   { label: "Videos for you", icon: MaterialIcons, iconName: "video-library", bg: "#fcbf49" },
// //   { label: "Support Ticket", icon: Ionicons, iconName: "help-buoy", bg: "#e94a66" },
// //   { label: "Help", icon: Feather, iconName: "help-circle", bg: "#ffbd00" },
// //   { label: "Log-out", icon: MaterialIcons, iconName: "logout", bg: "#f25c54" },
// // ];

// // const languages = [
// //   { name: "English", native: "English" },
// //   { name: "Hindi", native: "हिंदी" },
// //   { name: "Telugu", native: "తెలుగు" },
// //   { name: "Kannada", native: "ಕನ್ನಡ" },
// //   { name: "Tamil", native: "தமிழ்" },
// //   { name: "Bengali", native: "বাংলা" },
// // ];

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     paddingHorizontal: 20,
// //     paddingTop: 60,
// //   },
// //   header: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     textAlign: "center",
// //     marginBottom: 20,
// //   },
// //   profileContainer: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginBottom: 30,
// //   },
// //   avatar: {
// //     width: 60,
// //     height: 60,
// //     borderRadius: 30,
// //     marginRight: 15,
// //   },
// //   name: {
// //     fontSize: 16,
// //     fontWeight: "600",
// //   },
// //   email: {
// //     fontSize: 14,
// //     color: "#888",
// //   },
// //   menuItem: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     paddingVertical: 14,
// //     borderBottomWidth: 1,
// //     borderBottomColor: "#f0f0f0",
// //   },
// //   iconWrapper: {
// //     width: 36,
// //     height: 36,
// //     borderRadius: 10,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginRight: 15,
// //   },
// //   menuLabel: {
// //     flex: 1,
// //     fontSize: 16,
// //   },
// //   rightText: {
// //     marginRight: 10,
// //     color: "#4f9efd",
// //     fontWeight: "600",
// //   },
// //   deactivateButton: {
// //     backgroundColor: "#fce4e4",
// //     padding: 15,
// //     borderRadius: 20,
// //     alignItems: "center",
// //     marginVertical: 30,
// //     marginBottom: 120,
// //   },
// //   deactivateText: {
// //     color: "#d32f2f",
// //     fontWeight: "600",
// //   },
// //   modalOverlay: {
// //     flex: 1,
// //     backgroundColor: "rgba(0,0,0,0.4)",
// //     justifyContent: "flex-end",
// //     padding: 20,
// //   },
// //   modalContent: {
// //     backgroundColor: "#fff",
// //     padding: 20,
// //     borderRadius: 20,
// //   },
// //   languageOption: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     paddingVertical: 15,
// //     borderBottomWidth: 1,
// //     borderBottomColor: "#f0f0f0",
// //   },
// // });

// import {
//   AntDesign,
//   Entypo,
//   Feather,
//   FontAwesome,
//   Ionicons,
//   MaterialIcons,
// } from "@expo/vector-icons";
// import { router } from "expo-router";
// import React, { useState } from "react";
// import {
//   FlatList,
//   Image,
//   Modal,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Switch,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// export default function SettingsScreen() {
//   const [isDarkTheme, setIsDarkTheme] = useState(true);
//   const [languageModalVisible, setLanguageModalVisible] = useState(false);
//   const [logoutModalVisible, setLogoutModalVisible] = useState(false);
//   const [callModalVisible, setCallModalVisible] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("English");

//   const toggleSwitch = () => setIsDarkTheme((previousState) => !previousState);

//   const handleLanguageChange = (lang) => {
//     setSelectedLanguage(lang);
//     setLanguageModalVisible(false);
//   };

//   const handleLogout = () => {
//     setLogoutModalVisible(false);
//     router.push("/FirstPage");
//     console.log("Logged out");
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.header}>Settings</Text>

//       <View style={styles.profileContainer}>
//         <Image
//           source={{ uri: "https://i.pravatar.cc/100" }}
//           style={styles.avatar}
//         />
//         <View>
//           <Text style={styles.name}>Devashish Nayak</Text>
//           <Text style={styles.email}>dev@gmail.com • 201301</Text>
//         </View>
//       </View>

//       {menuItems.map((item, index) => {
//         if (item.label === "Language") {
//           return (
//             <TouchableOpacity
//               style={styles.menuItem}
//               key={index}
//               onPress={() => setLanguageModalVisible(true)}
//             >
//               <View style={[styles.iconWrapper, { backgroundColor: item.bg }]}>
//                 <item.icon name={item.iconName} size={20} color={"white"} />
//               </View>
//               <Text style={styles.menuLabel}>{item.label}</Text>
//               <Text style={styles.rightText}>
//                 {selectedLanguage.slice(0, 3).toUpperCase()}
//               </Text>
//               <Ionicons name="chevron-forward" size={20} color="#888" />
//             </TouchableOpacity>
//           );
//         }

//         if (item.label === "Log-out") {
//           return (
//             <TouchableOpacity
//               style={styles.menuItem}
//               key={index}
//               onPress={() => setLogoutModalVisible(true)}
//             >
//               <View style={[styles.iconWrapper, { backgroundColor: item.bg }]}>
//                 <item.icon name={item.iconName} size={20} color={"white"} />
//               </View>
//               <Text style={styles.menuLabel}>{item.label}</Text>
//               <Ionicons name="chevron-forward" size={20} color="#888" />
//             </TouchableOpacity>
//           );
//         }

//         if (item.label === "Call") {
//           return (
//             <TouchableOpacity
//               style={styles.menuItem}
//               key={index}
//               onPress={() => setCallModalVisible(true)}
//             >
//               <View style={[styles.iconWrapper, { backgroundColor: item.bg }]}>
//                 <item.icon name={item.iconName} size={20} color={"white"} />
//               </View>
//               <Text style={styles.menuLabel}>{item.label}</Text>
//               <Ionicons name="chevron-forward" size={20} color="#888" />
//             </TouchableOpacity>
//           );
//         }

//         return (
//           <TouchableOpacity style={styles.menuItem} key={index}>
//             <View style={[styles.iconWrapper, { backgroundColor: item.bg }]}>
//               <item.icon name={item.iconName} size={20} color={"white"} />
//             </View>
//             <Text style={styles.menuLabel}>{item.label}</Text>
//             {item.rightText && (
//               <Text style={styles.rightText}>{item.rightText}</Text>
//             )}
//             {item.isSwitch ? (
//               <Switch
//                 value={isDarkTheme}
//                 onValueChange={toggleSwitch}
//                 thumbColor={"#fff"}
//                 trackColor={{ true: "#4f9efd", false: "#ccc" }}
//               />
//             ) : (
//               <Ionicons name="chevron-forward" size={20} color="#888" />
//             )}
//           </TouchableOpacity>
//         );
//       })}

//       <TouchableOpacity style={styles.deactivateButton}>
//         <Text style={styles.deactivateText}>Deactivate Account</Text>
//       </TouchableOpacity>

//       {/* Language Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={languageModalVisible}
//         onRequestClose={() => setLanguageModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             {languages.map((lang, index) => (
//               <Pressable
//                 key={index}
//                 onPress={() => handleLanguageChange(lang.name)}
//                 style={styles.languageOption}
//               >
//                 <View>
//                   <Text style={{ fontSize: 16 }}>{lang.native}</Text>
//                   <Text style={{ color: "#777" }}>{lang.name}</Text>
//                 </View>
//                 {selectedLanguage === lang.name && (
//                   <AntDesign name="checkcircle" size={20} color="#4f9efd" />
//                 )}
//               </Pressable>
//             ))}
//           </View>
//         </View>
//       </Modal>

//       {/* Logout Modal */}
//       <Modal
//         transparent={true}
//         animationType="fade"
//         visible={logoutModalVisible}
//         onRequestClose={() => setLogoutModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, { alignItems: "center" }]}>
//             <Text style={{ fontSize: 18, color: "red", fontWeight: "bold" }}>
//               Logout
//             </Text>
//             <Text style={{ marginVertical: 15, color: "#444" }}>
//               Are you sure you want to logout?
//             </Text>
//             <View style={{ flexDirection: "row", gap: 10 }}>
//               <TouchableOpacity
//                 onPress={() => setLogoutModalVisible(false)}
//                 style={{
//                   backgroundColor: "#f0f0f0",
//                   paddingHorizontal: 20,
//                   paddingVertical: 10,
//                   borderRadius: 20,
//                 }}
//               >
//                 <Text>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={handleLogout}
//                 style={{
//                   backgroundColor: "#e53935",
//                   paddingHorizontal: 20,
//                   paddingVertical: 10,
//                   borderRadius: 20,
//                 }}
//               >
//                 <Text style={{ color: "white" }}>Logout</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>

//       {/* Call Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={callModalVisible}
//         onRequestClose={() => setCallModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, { maxHeight: "80%" }]}>
//             <FlatList
//               data={callData}
//               keyExtractor={(item, index) => index.toString()}
//               renderItem={({ item }) => (
//                 <View
//                   style={{
//                     flexDirection: "row",
//                     alignItems: "center",
//                     marginBottom: 15,
//                   }}
//                 >
//                   <Image
//                     source={{ uri: item.image }}
//                     style={{
//                       width: 40,
//                       height: 40,
//                       borderRadius: 20,
//                       marginRight: 10,
//                     }}
//                   />
//                   <View style={{ flex: 1 }}>
//                     <Text style={{ fontWeight: "600" }}>{item.name}</Text>
//                     <Text style={{ color: "#777" }}>{item.phone}</Text>
//                   </View>
//                   <FontAwesome name="phone" size={22} color="green" />
//                 </View>
//               )}
//             />
//           </View>
//         </View>
//       </Modal>
//     </ScrollView>
//   );
// }

// const menuItems = [
//   { label: "Account", icon: MaterialIcons, iconName: "person", bg: "#f78c2a" },
//   {
//     label: "Notifications",
//     icon: Ionicons,
//     iconName: "notifications",
//     bg: "#ef4f91",
//   },
//   {
//     label: "Statement",
//     icon: Ionicons,
//     iconName: "document-text",
//     bg: "#9c5aff",
//     rightText: "123",
//   },
//   { label: "Language", icon: Entypo, iconName: "language", bg: "#f7c942" },
//   { label: "Refer & Earn", icon: Entypo, iconName: "megaphone", bg: "#ff9051" },
//   {
//     label: "Theme",
//     icon: Ionicons,
//     iconName: "moon",
//     bg: "#a663f7",
//     isSwitch: true,
//   },
//   {
//     label: "Videos for you",
//     icon: MaterialIcons,
//     iconName: "video-library",
//     bg: "#fcbf49",
//   },
//   {
//     label: "Support Ticket",
//     icon: Ionicons,
//     iconName: "help-buoy",
//     bg: "#e94a66",
//   },
//   { label: "Help", icon: Feather, iconName: "help-circle", bg: "#ffbd00" },
//   // { label: "Call", icon: Ionicons, iconName: "call", bg: "#5cb85c" },
//   { label: "Log-out", icon: MaterialIcons, iconName: "logout", bg: "#f25c54" },
// ];

// const languages = [
//   { name: "English", native: "English" },
//   { name: "Hindi", native: "हिंदी" },
//   { name: "Telugu", native: "తెలుగు" },
//   { name: "Kannada", native: "ಕನ್ನಡ" },
//   { name: "Tamil", native: "தமிழ்" },
//   { name: "Bengali", native: "বাংলা" },
// ];

// const callData = Array(8).fill({
//   name: "Devashish Nayak (2)",
//   phone: "+99897 565 71 73",
//   image: "https://i.pravatar.cc/100",
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 20,
//     paddingTop: 60,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   profileContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 15,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   email: {
//     fontSize: 14,
//     color: "#888",
//   },
//   menuItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 14,
//     borderBottomWidth: 1,
//     borderBottomColor: "#f0f0f0",
//   },
//   iconWrapper: {
//     width: 36,
//     height: 36,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 15,
//   },
//   menuLabel: {
//     flex: 1,
//     fontSize: 16,
//   },
//   rightText: {
//     marginRight: 10,
//     color: "#4f9efd",
//     fontWeight: "600",
//   },
//   deactivateButton: {
//     backgroundColor: "#fce4e4",
//     padding: 15,
//     borderRadius: 20,
//     alignItems: "center",
//     marginVertical: 30,
//     marginBottom: 120,
//   },
//   deactivateText: {
//     color: "#d32f2f",
//     fontWeight: "600",
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.4)",
//     justifyContent: "flex-end",
//     padding: 20,
//   },
//   modalContent: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 20,
//   },
//   languageOption: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: "#f0f0f0",
//   },
// });

import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router"; // Ensure router is imported
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SettingsScreen() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [callModalVisible, setCallModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleSwitch = () => setIsDarkTheme((previousState) => !previousState);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setLanguageModalVisible(false);
  };

  const handleLogout = () => {
    setLogoutModalVisible(false);
    router.push("/FirstPage");
    console.log("Logged out");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Devashish Nayak</Text>
          <Text style={styles.email}>dev@gmail.com • 201301</Text>
        </View>
      </View>

      {menuItems.map((item, index) => {
        // Determine the onPress handler based on the item's label or a new 'route' property
        const onPressHandler = () => {
          if (item.label === "Language") {
            setLanguageModalVisible(true);
          } else if (item.label === "Log-out") {
            setLogoutModalVisible(true);
          } else if (item.label === "Call") {
            setCallModalVisible(true);
          } else if (item.route) {
            router.push(item.route); // Use the specified route for navigation
          }
          // No action for items without a specific route or modal
        };

        return (
          <TouchableOpacity
            style={styles.menuItem}
            key={index}
            onPress={onPressHandler} // Use the consolidated onPressHandler
          >
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
              // Only show chevron for items that lead to a new screen or modal
              (item.route ||
                item.label === "Language" ||
                item.label === "Log-out" ||
                item.label === "Call") && (
                <Ionicons name="chevron-forward" size={20} color="#888" />
              )
            )}
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity style={styles.deactivateButton}>
        <Text style={styles.deactivateText}>Deactivate Account</Text>
      </TouchableOpacity>

      {/* Language Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={languageModalVisible}
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {languages.map((lang, index) => (
              <Pressable
                key={index}
                onPress={() => handleLanguageChange(lang.name)}
                style={styles.languageOption}
              >
                <View>
                  <Text style={{ fontSize: 16 }}>{lang.native}</Text>
                  <Text style={{ color: "#777" }}>{lang.name}</Text>
                </View>
                {selectedLanguage === lang.name && (
                  <AntDesign name="checkcircle" size={20} color="#4f9efd" />
                )}
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>

      {/* Logout Modal */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { alignItems: "center" }]}>
            <Text style={{ fontSize: 18, color: "red", fontWeight: "bold" }}>
              Logout
            </Text>
            <Text style={{ marginVertical: 15, color: "#444" }}>
              Are you sure you want to logout?
            </Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity
                onPress={() => setLogoutModalVisible(false)}
                style={{
                  backgroundColor: "#f0f0f0",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 20,
                }}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleLogout}
                style={{
                  backgroundColor: "#e53935",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: "white" }}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Call Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={callModalVisible}
        onRequestClose={() => setCallModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { maxHeight: "80%" }]}>
            <FlatList
              data={callData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 15,
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      marginRight: 10,
                    }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: "600" }}>{item.name}</Text>
                    <Text style={{ color: "#777" }}>{item.phone}</Text>
                  </View>
                  <FontAwesome name="phone" size={22} color="green" />
                </View>
              )}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const menuItems = [
  {
    label: "Account",
    icon: MaterialIcons,
    iconName: "person",
    bg: "#f78c2a",
    route: "/FormScreen",
  }, // Added route
  {
    label: "Notifications",
    icon: Ionicons,
    iconName: "notifications",
    bg: "#ef4f91",
    route: "/NotificationScreen", // Added route
  },
  {
    label: "Statement",
    icon: Ionicons,
    iconName: "document-text",
    bg: "#9c5aff",
    rightText: "123",
    route: "/Statements", // Added route
  },
  { label: "Language", icon: Entypo, iconName: "language", bg: "#f7c942" },
  { label: "Refer & Earn", icon: Entypo, iconName: "megaphone", bg: "#ff9051" },
  {
    label: "Theme",
    icon: Ionicons,
    iconName: "moon",
    bg: "#a663f7",
    isSwitch: true,
  },
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
    route: "/SupportTicket",
  },
  {
    label: "Help",
    icon: Feather,
    iconName: "help-circle",
    bg: "#ffbd00",
    route: "/HelpScreen",
  }, // Added route
  // { label: "Call", icon: Ionicons, iconName: "call", bg: "#5cb85c" }, // Uncomment if needed later
  { label: "Log-out", icon: MaterialIcons, iconName: "logout", bg: "#f25c54" },
];

const languages = [
  { name: "English", native: "English" },
  { name: "Hindi", native: "हिंदी" },
  { name: "Telugu", native: "తెలుగు" },
  { name: "Kannada", native: "ಕನ್ನಡ" },
  { name: "Tamil", native: "தமிழ்" },
  { name: "Bengali", native: "বাংলা" },
];

const callData = Array(8).fill({
  name: "Devashish Nayak (2)",
  phone: "+99897 565 71 73",
  image: "https://i.pravatar.cc/100",
});

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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
  },
  languageOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
});
