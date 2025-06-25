import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Profile from "../assets/images/Profile.png";

export default function FormScreen() {
  const handleNext = () => {
    alert("Form submitted!");
  };
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={Profile} // Replace with actual image
          style={styles.avatar}
        />
        {/* <FontAwesome5 name="user-circle" size={84} color="black" /> */}
      </View>

      <Text style={styles.label}>AADHAR NO.</Text>
      <TextInput style={styles.input} placeholder="melpeters@gmail.com" />

      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} placeholder="hnnfuvnuniu" />

      <Text style={styles.label}>PAN CARD</Text>
      <TextInput style={styles.input} placeholder="melpeters@gmail.com" />

      <Text style={styles.label}>IFSC CODE</Text>
      <TextInput style={styles.input} placeholder="melpeters@gmail.com" />

      <Text style={styles.label}>ACCOUNT NO</Text>
      <TextInput style={styles.input} placeholder="melpeters@gmail.com" />

      <Text style={styles.label}>NOMINEE</Text>
      <TextInput style={styles.input} placeholder="melpeters@gmail.com" />

      <Text style={styles.label}>NOMINEE NO.</Text>
      <TextInput style={styles.input} placeholder="melpeters@gmail.com" />

      <Text style={styles.agreeText}>
        By signing up you agree to our{" "}
        <Text style={styles.link}>Terms and conditions</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          router.push("/UploadScreen");
        }}
      >
        <Text style={styles.nextText}>NEXT →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#fff",
    // height:900,
    // height: Dimensions.get('window').height+1200,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    marginTop: 4,
  },
  agreeText: {
    fontSize: 12,
    color: "#555",
    marginTop: 10,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  nextButton: {
    backgroundColor: "#91b49c",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  nextText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
