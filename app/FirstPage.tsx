import { Feather, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const steps = [
  { label: "User Id Access", completed: false },
  { label: "Profile photo upload", completed: true },
  { label: "Details fillup", completed: true },
  { label: "Documents upload", completed: true },
  { label: "Onboarding fee", completed: false },
];

export default function OnboardingScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Note Section */}
      <View style={styles.noteContainer}>
        <Text style={styles.fireText}>
          🔥 Start Earning Now – Limited Seats Only!
        </Text>
        <Text style={styles.boldText}>
          (Jobs are limited and given on a first-come, first-served basis.)
        </Text>
        <Text style={styles.point}>
          👉 Be among the first to secure your spot and start getting job
          details!
        </Text>
        <Text style={styles.warning}>
          🔺 Once the limit is reached, onboarding access will be closed.
          {"\n"}Don’t miss out – act fast before it’s too late!
        </Text>
      </View>

      {/* Steps */}
      <View style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepWrapper}>
            {/* Connector Line */}
            {index !== 0 && <View style={styles.verticalLine} />}
            {/* Icon */}
            <View
              style={[styles.circle, step.completed && styles.completedCircle]}
            >
              {step.completed && (
                <Feather name="check" size={14} color="#fff" />
              )}
            </View>
            {/* Step Content */}
            <TouchableOpacity style={styles.stepBox}>
              <Text style={styles.stepText}>{step.label}</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    height: "100%",
  },
  noteContainer: {
    // backgroundColor: "red",
    marginBottom: 24,
    marginTop: 50,
  },
  fireText: {
    fontWeight: "bold",
    color: "#FF5A1F",
  },
  boldText: {
    fontWeight: "600",
    marginVertical: 6,
  },
  point: {
    fontSize: 14,
    marginVertical: 4,
  },
  warning: {
    fontSize: 14,
    color: "#d9534f",
    marginTop: 4,
  },
  stepsContainer: {
    marginTop: 10,
    paddingLeft: 16,
    borderLeftWidth: 2,
    borderLeftColor: "#0f0", // Green line
  },
  stepWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
    position: "relative",
  },
  verticalLine: {
    position: "absolute",
    top: -24,
    left: -17,
    height: 24,
    width: 2,
    backgroundColor: "#0f0",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#0f0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  completedCircle: {
    backgroundColor: "#0f0",
  },
  stepBox: {
    backgroundColor: "#f9f9f9",
    padding: 14,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  stepText: {
    fontSize: 15,
    fontWeight: "500",
  },
});
