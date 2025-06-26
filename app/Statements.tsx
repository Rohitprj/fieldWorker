import { Ionicons } from "@expo/vector-icons"; // For the back arrow and wallet icon
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const StatementScreen = () => {
  return (
    // <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("Back pressed")}>
          <Ionicons name="chevron-back" size={28} color="black" />
        </TouchableOpacity>
        <Ionicons
          name="wallet-outline"
          size={28}
          color="black"
          style={styles.walletIcon}
        />
        <Text style={styles.headerTitle}>Statement</Text>
      </View>

      {/* Content Area */}
      <View style={styles.contentArea}>
        {Array.from({ length: 8 }).map((_, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.placeholderText}>############</Text>
          </View>
        ))}
      </View>
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ADCBAD", // The background color of the overall screen
  },
  container: {
    flex: 1,
    backgroundColor: "#fff", // Ensure this matches the overall background
    paddingTop: 30, // Adjust as needed to align with the design
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff", // Header background color
  },
  walletIcon: {
    marginLeft: 10, // Space between back arrow and wallet icon
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15, // Space between wallet icon and title
  },
  contentArea: {
    flex: 1,
    backgroundColor: "#fff", // The light background color of the statement area
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 10, // Slight rounded corners for the content box
    paddingVertical: 20, // Vertical padding inside the content box
    paddingHorizontal: 15, // Horizontal padding inside the content box
  },
  row: {
    borderBottomWidth: 2,
    borderBottomColor: "#000", // Light grey line
    paddingVertical: 15, // Padding for each row
    alignItems: "center", // Center the placeholder text
  },
  // Remove the border for the last row
  //   row: {
  //     borderBottomWidth: 1,
  //     borderBottomColor: "#D3D3D3", // Light grey line
  //     paddingVertical: 15, // Padding for each row
  //     alignItems: "center", // Center the placeholder text
  //   },
  // Specific style for the last row to remove the bottom border
  lastRow: {
    borderBottomWidth: 0,
  },
  placeholderText: {
    fontSize: 18,
    color: "#555", // Slightly darker grey for visibility
    fontWeight: "600", // To make it bolder like in the image
  },
});

export default StatementScreen;
