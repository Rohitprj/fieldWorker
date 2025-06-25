import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Profile from "../assets/images/Profile.png";

export default function UploadScreen() {
  const handleVerify = () => {
    alert("Documents submitted!");
  };

  // const handleUpload = (type) => {
  //   alert(`Upload ${type} clicked`);
  // };
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={Profile} // Replace with actual image
          style={styles.avatar}
        />
        {/* <FontAwesome5
          name="user-circle"
          size={84}
          color="black"
          style={styles.avatar}
        /> */}
      </View>

      <Text style={styles.sectionTitle}>UPLOAD AADHAR CARD</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.uploadBox}
          // onPress={() => handleUpload("Aadhar Front")}
        >
          {/* <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={styles.icon}
          /> */}
          <Entypo name="camera" size={64} color="#b3b3b3" />
          <Text>Front</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.uploadBox}
          // onPress={() => handleUpload("Aadhar Back")}
        >
          {/* <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={styles.icon}
          /> */}
          <Entypo name="camera" size={64} color="#b3b3b3" />
          <Text>Back</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>UPLOAD PAN CARD</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.uploadBox}
          // onPress={() => handleUpload("PAN Front")}
        >
          {/* <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={styles.icon}
          /> */}
          <Entypo name="camera" size={64} color="#b3b3b3" />
          <Text>Front</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.uploadBox}
          // onPress={() => handleUpload("PAN Back")}
        >
          {/* <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={styles.icon}
          /> */}
          <Entypo name="camera" size={64} color="#b3b3b3" />
          <Text>Back</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.warning}>
        The details on the document should be clearly visible while uploading
        the picture.
      </Text>

      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => {
          router.push("/VerificationScreen");
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
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 50,
    marginTop: 20,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  uploadBox: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    width: 100,
    height: 100,
    justifyContent: "center",
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  warning: {
    color: "red",
    fontSize: 12,
    marginTop: 20,
    textAlign: "center",
  },
  verifyButton: {
    backgroundColor: "#91b49c",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 160,
    // alignSelf: "flex-end",
  },
  verifyText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
