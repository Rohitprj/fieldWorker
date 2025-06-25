import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FaceSelfieScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>Face should be centered</Text>

      <View style={styles.faceContainer}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/100/000000/face-id.png",
          }}
          style={styles.faceIcon}
        />
      </View>

      {/* <TouchableOpacity
        style={styles.selfieButton}
        onPress={() => router.push("/HelpScreen")}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/50/000000/camera--v1.png",
          }}
          style={styles.cameraIcon}
        />
        <Text style={styles.selfieText}>Click Selfie</Text>
      </TouchableOpacity> */}
      <View style={{ marginTop: 80 }}>
        <TouchableOpacity
          style={styles.selfieButton}
          onPress={() => router.push("/HelpScreen")}
        >
          <Ionicons name="camera" size={60} color="#333" />
        </TouchableOpacity>
        <Text style={styles.selfieText}>Click Selfie</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    alignItems: "center",
  },
  instruction: {
    color: "#00aaff",
    fontSize: 16,
    marginBottom: 20,
    marginTop: 40,
  },
  faceContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 40,
  },
  faceIcon: {
    width: 100,
    height: 100,
    tintColor: "#555",
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
  cameraIcon: {
    width: 100,
    height: 100,
    tintColor: "#555",
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 60,
    padding: 0,
  },
  selfieText: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "600",
    left: 15,
  },
});
