import { Ionicons } from "@expo/vector-icons"; // For checkmarks and circles
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window"); // Get screen width for responsive design

const ProgressBarStepper = () => {
  // Define your steps and their corresponding values and labels
  const steps = [
    { value: 1500, label: "10" },
    { value: 4800, label: "20" },
    { value: 9000, label: "30" },
    { value: 20000, label: "40" },
  ];

  // State to track the currently selected step (0-indexed)
  const [currentStep, setCurrentStep] = useState(2); // Initial state: 9000 (index 2)

  const renderStep = (step, index) => {
    const isCompleted = index < currentStep;
    const isCurrent = index === currentStep;
    const isFuture = index > currentStep;

    return (
      <React.Fragment key={index}>
        {/* Render the line connecting steps (before the current step) */}
        {index > 0 && (
          <View
            style={[
              styles.line,
              isCompleted || isCurrent
                ? styles.lineActive
                : styles.lineInactive,
            ]}
          />
        )}

        {/* Render the marker (circle or checkmark) */}
        <TouchableOpacity
          style={styles.markerContainer}
          onPress={() => setCurrentStep(index)} // Allow tapping to select step
        >
          {isCompleted ? (
            <View style={styles.markerCompleted}>
              <Ionicons name="checkmark" size={14} color="white" />
            </View>
          ) : isCurrent ? (
            <View style={styles.markerCurrent}>
              <View style={styles.innerCircle} />
            </View>
          ) : (
            <View style={styles.markerFuture} />
          )}
        </TouchableOpacity>

        {/* Render the line connecting steps (after the current step) */}
        {index < steps.length - 1 && (
          <View
            style={[
              styles.line,
              isCompleted || isCurrent
                ? styles.lineActive
                : styles.lineInactive,
            ]}
          />
        )}
      </React.Fragment>
    );
  };

  return (
    <View style={styles.card}>
      {/* Top row with values (1500, 4800, etc.) */}
      <View style={styles.topLabelsContainer}>
        {steps.map((step, index) => (
          <Text
            key={`top-${index}`}
            style={[
              styles.topLabel,
              index < currentStep ? styles.topLabelCompleted : null,
              index === currentStep ? styles.topLabelCurrent : null,
              index > currentStep ? styles.topLabelFuture : null,
            ]}
          >
            {step.value}
          </Text>
        ))}
      </View>

      {/* Progress Line with Markers */}
      <View style={styles.progressBarContainer}>
        {steps.map((step, index) => (
          <React.Fragment key={`progress-${index}`}>
            {/* Render the line connecting steps (before the current step) */}
            {index > 0 && (
              <View
                style={[
                  styles.line,
                  index <= currentStep
                    ? styles.lineActive
                    : styles.lineInactive,
                ]}
              />
            )}

            {/* Render the marker (circle or checkmark) */}
            <TouchableOpacity
              style={styles.markerContainer}
              onPress={() => setCurrentStep(index)} // Allow tapping to select step
            >
              {index < currentStep ? ( // Completed steps
                <View style={styles.markerCompleted}>
                  <Ionicons name="checkmark" size={14} color="white" />
                </View>
              ) : index === currentStep ? ( // Current step
                <View style={styles.markerCurrent}>
                  <View style={styles.innerCircle} />
                </View>
              ) : (
                // Future steps
                <View style={styles.markerFuture} />
              )}
            </TouchableOpacity>
          </React.Fragment>
        ))}
      </View>

      {/* Bottom row with labels (10, 20, etc.) */}
      <View style={styles.bottomLabelsContainer}>
        {steps.map((step, index) => (
          <Text
            key={`bottom-${index}`}
            style={[
              styles.bottomLabel,
              index <= currentStep
                ? styles.bottomLabelActive
                : styles.bottomLabelInactive,
            ]}
          >
            {step.label}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginHorizontal: 20, // Add some horizontal margin
    marginTop: 50, // Example margin from top
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
    alignItems: "center", // Center content horizontally
  },
  topLabelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%", // Occupy most of the card width
    marginBottom: 10,
  },
  topLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#888", // Default color for future steps
  },
  topLabelCompleted: {
    color: "#000", // Green for completed steps
  },
  topLabelCurrent: {
    color: "#000", // Blue for the current step
  },
  topLabelFuture: {
    color: "#000", // Grey for future steps
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%", // Occupy most of the card width
    marginBottom: 10,
  },
  line: {
    flex: 1, // Take up available space between markers
    height: 3,
    marginHorizontal: -2, // Overlap slightly to ensure continuous line
  },
  lineActive: {
    backgroundColor: "#00A859", // Green for active part of the line
  },
  lineInactive: {
    backgroundColor: "#D3D3D3", // Light grey for inactive part of the line
  },
  markerContainer: {
    width: 24, // Size of the marker circle
    height: 24,
    borderRadius: 12, // Half of width/height for a circle
    justifyContent: "center",
    alignItems: "center",
  },
  markerCompleted: {
    backgroundColor: "#00A859", // Green for completed markers
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  markerCurrent: {
    backgroundColor: "#fff", // White background for the current marker
    borderWidth: 2,
    borderColor: "#007AFF", // Blue border for the current marker
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#007AFF", // Blue inner circle
  },
  markerFuture: {
    backgroundColor: "#D3D3D3", // Light grey for future markers
    borderWidth: 2,
    borderColor: "#D3D3D3", // Light grey border
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomLabelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%", // Occupy most of the card width
    marginTop: 5,
  },
  bottomLabel: {
    fontSize: 14,
    color: "#888", // Default color for all labels
  },
  bottomLabelActive: {
    fontWeight: "bold", // Make active labels bold
  },
  bottomLabelInactive: {
    // No specific style needed, uses default
  },
});

export default ProgressBarStepper;
