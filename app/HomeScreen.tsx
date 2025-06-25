import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import cameraButton from "../assets/images/cameraButton.png";
import unrootAccess from "../assets/images/unrootAccess.png";
export default function HomeScreen() {
  const [callModalVisible, setCallModalVisible] = useState(false);
  const router = useRouter();
  const callData = Array(8).fill({
    name: "Devashish Nayak (2)",
    phone: "+99897 565 71 73",
    image: "https://i.pravatar.cc/100",
  });
  return (
    <View style={styles.container}>
      {/* Coupon Code */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TouchableOpacity onPress={() => router.push("/Settings")}>
          <Entypo
            name="menu"
            size={34}
            color="black"
            style={{
              alignSelf: "flex-start",
              padding: 4,
              backgroundColor: "lightgrey",
              borderRadius: 30,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/FaceSelfieScreen")}>
          <Image
            source={cameraButton}
            style={{
              alignSelf: "flex-end",
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Today's Coupon Code</Text>
      <View style={styles.couponContainer}>
        <Text style={styles.couponCode}>G89HG56</Text>
      </View>
      <Text style={styles.validity}>
        Valid from <Text style={styles.bold}>14-06-25</Text> to{" "}
        <Text style={styles.bold}>24-06-25</Text>
      </Text>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.step}>
          <Text style={styles.stepLabel}>1500</Text>
          <View style={[styles.circle, styles.completedCircle]} />
          <Text style={styles.stepSub}>10</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.step}>
          <Text style={styles.stepLabel}>4800</Text>
          <View style={[styles.circle, styles.completedCircle]} />
          <Text style={styles.stepSub}>20</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.step}>
          <Text style={styles.stepLabel}>9000</Text>
          <View style={[styles.circle, styles.currentCircle]} />
          <Text style={styles.stepSub}>30</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.step}>
          <Text style={styles.stepLabel}>20000</Text>
          <View style={[styles.circle, styles.pendingCircle]} />
          <Text style={styles.stepSub}>40</Text>
        </View>
      </View>

      {/* Unrooted Accounts */}
      <TouchableOpacity
        style={styles.unrootedContainer}
        // onPress={() => router.push("/NotificationScreen")}
        onPress={() => setCallModalVisible(true)}
      >
        <Text style={styles.unrootedText}>Tap to see</Text>

        <Image
          source={unrootAccess}
          style={{
            alignSelf: "center",
          }}
        />
        <View style={styles.unrootedBox}>
          <Text style={{ color: "#000", fontSize: 18, fontWeight: "700" }}>
            Unrooted Accounts
          </Text>
          {/* You can replace with actual icon */}
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={{
          backgroundColor: "#91b49c",
          padding: 15,
          borderRadius: 8,
          alignItems: "center",
          width: "100%",
          marginTop: 20,
        }}
        onPress={() => {
          router.push("/NotificationScreen");
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Next
        </Text>
      </TouchableOpacity> */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 40,
  },
  couponContainer: {
    backgroundColor: "#d4edda",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  couponCode: {
    fontSize: 18,
    color: "#155724",
  },
  validity: {
    marginTop: 5,
    marginBottom: 30,
  },
  bold: {
    fontWeight: "bold",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 80,
  },
  step: {
    alignItems: "center",
  },
  stepLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  stepSub: {
    fontSize: 12,
    marginTop: 4,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  completedCircle: {
    backgroundColor: "green",
    borderColor: "green",
  },
  currentCircle: {
    backgroundColor: "#fff",
    borderColor: "blue",
  },
  pendingCircle: {
    backgroundColor: "#fff",
    borderColor: "grey",
  },
  line: {
    width: 30,
    height: 2,
    backgroundColor: "#ccc",
  },
  unrootedContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  unrootedText: {
    marginBottom: 5,
  },
  unrootedBox: {
    // backgroundColor: "#000",
    padding: 10,
    borderRadius: 8,
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
});
