import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Profile from "../assets/images/Profile.png";
import RectangleBackgoround from "../assets/images/RectangleBackgoround.png";

export default function SelfieScreen() {
  const handleSelfieClick = () => {
    // Add camera logic here
    alert("Open camera to take selfie!");
  };

  const handleVerify = () => {
    // Add verify logic here
    alert("Verification submitted!");
  };
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={RectangleBackgoround}
        style={{
          width: "100%",
          height: 150, // Adjust height as needed to cover the profile image appropriately
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          resizeMode: "stretch", // Ensures the image stretches to fill the area without distortion
        }}
      />
      <View style={styles.avatarContainer}>
        <Image
          source={Profile} // Replace with your actual image URL
          style={{
            width: 180,
            height: 180,
            borderRadius: 50,
          }}
        />
        {/* <FontAwesome name="user-circle-o" size={184} color="black" /> */}
      </View>
      <View style={{}}>
        <TouchableOpacity
          style={styles.selfieButton}
          onPress={handleSelfieClick}
        >
          <Ionicons name="camera" size={48} color="#333" />
        </TouchableOpacity>
        <Text style={styles.selfieText}>Click Selfie</Text>
      </View>

      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => {
          router.push("/FormScreen");
        }}
      >
        <Text style={styles.verifyText}>VERIFY →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: 20,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 130,
    zIndex: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  selfieButton: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 6,
    borderColor: "#ccc",
    borderRadius: 100,
    width: 120,
    height: 120,
    alignSelf: "center",
    backgroundColor: "#e6e6e6",
  },
  selfieText: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
  },
  verifyButton: {
    backgroundColor: "#91b49c",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 20,
  },
  verifyText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
