// import { Feather, MaterialIcons } from "@expo/vector-icons";
// import React from "react";
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const steps = [
//   { label: "User Id Access", completed: false },
//   { label: "Profile photo upload", completed: true },
//   { label: "Details fillup", completed: true },
//   { label: "Documents upload", completed: true },
//   { label: "Onboarding fee", completed: false },
// ];

// export default function OnboardingScreen() {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Top Note Section */}
//       <View style={styles.noteContainer}>
//         <Text style={styles.fireText}>
//           🔥 Start Earning Now – Limited Seats Only!
//         </Text>
//         <Text style={styles.boldText}>
//           (Jobs are limited and given on a first-come, first-served basis.)
//         </Text>
//         <Text style={styles.point}>
//           👉 Be among the first to secure your spot and start getting job
//           details!
//         </Text>
//         <Text style={styles.warning}>
//           🔺 Once the limit is reached, onboarding access will be closed.
//           {"\n"}Don’t miss out – act fast before it’s too late!
//         </Text>
//       </View>

//       {/* Steps */}
//       <View style={styles.stepsContainer}>
//         {steps.map((step, index) => (
//           <View key={index} style={styles.stepWrapper}>
//             {/* Connector Line */}
//             {index !== 0 && <View style={styles.verticalLine} />}
//             {/* Icon */}
//             <View
//               style={[styles.circle, step.completed && styles.completedCircle]}
//             >
//               {step.completed && (
//                 <Feather name="check" size={14} color="#fff" />
//               )}
//             </View>
//             {/* Step Content */}
//             <TouchableOpacity style={styles.stepBox}>
//               <Text style={styles.stepText}>{step.label}</Text>
//               <MaterialIcons
//                 name="keyboard-arrow-right"
//                 size={24}
//                 color="#000"
//               />
//             </TouchableOpacity>
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: "#fff",
//     height: "100%",
//   },
//   noteContainer: {
//     // backgroundColor: "red",
//     marginBottom: 24,
//     marginTop: 50,
//   },
//   fireText: {
//     fontWeight: "bold",
//     color: "#FF5A1F",
//   },
//   boldText: {
//     fontWeight: "600",
//     marginVertical: 6,
//   },
//   point: {
//     fontSize: 14,
//     marginVertical: 4,
//   },
//   warning: {
//     fontSize: 14,
//     color: "#d9534f",
//     marginTop: 4,
//   },
//   stepsContainer: {
//     marginTop: 10,
//     paddingLeft: 16,
//     borderLeftWidth: 2,
//     borderLeftColor: "#0f0", // Green line
//     // left: 10,
//   },
//   stepWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 50,
//     position: "relative",
//   },
//   verticalLine: {
//     position: "absolute",
//     top: -24,
//     left: -17,
//     height: 24,
//     width: 2,
//     backgroundColor: "#0f0",
//   },
//   circle: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: "#fff",
//     borderWidth: 2,
//     borderColor: "#0f0",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 12,
//   },
//   completedCircle: {
//     backgroundColor: "#0f0",
//   },
//   stepBox: {
//     backgroundColor: "#f9f9f9",
//     padding: 14,
//     borderRadius: 10,
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//   },
//   stepText: {
//     fontSize: 15,
//     fontWeight: "500",
//   },
// });

import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// Import Feather and MaterialIcons from @expo/vector-icons
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const steps = [
  { label: "User Id Access", completed: false, route: "Login" },
  { label: "Profile photo upload", completed: true, route: "profile-upload" },
  { label: "Details fillup", completed: true, route: "details-fillup" },
  { label: "Documents upload", completed: true, route: "documents-upload" },
  { label: "Onboarding fee", completed: false, route: "login" }, // 'login' route for navigation
];

export default function App() {
  // State to manage the current active route/screen
  const [currentRoute, setCurrentRoute] = useState("onboarding");

  // Conditional rendering for the Login page
  if (currentRoute === "login") {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Welcome to the Login Page!</Text>
        <Text style={styles.loginText}>
          This is a placeholder for your login functionality.
        </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setCurrentRoute("onboarding")} // Navigate back to onboarding
        >
          <Text style={styles.backButtonText}>Back to Onboarding</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Render the Onboarding screen
  return (
    // ScrollView allows content to be scrollable if it overflows the screen
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Note Section: Important messages for the user */}
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

      {/* Steps Section: Visual representation of onboarding progress */}
      <View style={styles.stepsWrapper}>
        {/* The main vertical timeline line, absolutely positioned to connect circles */}
        <View style={styles.verticalTimelineLine} />

        {/* Container for individual step content, offset from the timeline line */}
        <View style={styles.stepsContentContainer}>
          {steps.map((step, index) => (
            <View key={index} style={styles.stepWrapper}>
              {/* Circle representing the step's status (completed/incomplete) */}
              <View
                style={[
                  styles.circle,
                  step.completed && styles.completedCircle,
                ]}
              >
                {/* Display a check icon for completed steps */}
                {step.completed ? (
                  <Feather name="check" size={14} color="#fff" />
                ) : (
                  // For incomplete steps, display the step number
                  <Text style={styles.stepNumberText}>{index + 1}</Text>
                )}
              </View>
              {/* Touchable step box for navigation or action */}
              <TouchableOpacity
                style={styles.stepBox}
                onPress={() => router.push("/Login")} // Navigate on press
              >
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
      </View>
    </ScrollView>
  );
}

// Stylesheet for the React Native components
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f0f2f5", // Light grey background for a clean look
    minHeight: "100%", // Ensures the container takes up the full viewport height
    alignItems: "center", // Centers content horizontally
  },
  noteContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
    marginTop: 50,
    width: "90%", // Responsive width
    maxWidth: 600, // Maximum width for readability on large screens
    shadowColor: "#000", // Shadow properties for Android and iOS
    shadowOffset: { width: 0, height: 4 }, // Shadow offset for iOS
    shadowOpacity: 0.08, // Shadow opacity for iOS
    shadowRadius: 10, // Shadow radius for iOS
    elevation: 5, // Elevation for Android
  },
  fireText: {
    fontWeight: "bold",
    color: "#FF5A1F", // Vibrant orange color
    fontSize: 18, // Font size for React Native Text
    marginBottom: 8,
  },
  boldText: {
    fontWeight: "600", // Using string for fontWeight
    fontSize: 16,
    marginBottom: 6,
    color: "#555",
  },
  point: {
    fontSize: 15,
    marginVertical: 4,
    color: "#333",
  },
  warning: {
    fontSize: 15,
    color: "#d9534f", // Red for warning messages
    marginTop: 8,
    lineHeight: 20,
  },
  stepsWrapper: {
    position: "relative",
    width: "90%",
    maxWidth: 600,
    paddingBottom: 20, // Adds space at the bottom of the steps list
  },
  verticalTimelineLine: {
    position: "absolute",
    left: 20, // Position of the timeline line relative to stepsWrapper's left edge
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: "#0f0", // Green color for the line
  },
  stepsContentContainer: {
    marginLeft: 40, // Offsets the step content to the right, making space for the line and circles
  },
  stepWrapper: {
    flexDirection: "row",
    alignItems: "center", // Vertically aligns items in the row
    marginBottom: 50, // Space between each step item
    position: "relative", // Needed for absolute positioning of the circle within it
  },
  circle: {
    position: "absolute",
    left: -29, // Adjusted position to center circle on the timeline line (20px line left - 10px half circle width - 19px for container offset)
    width: 20,
    height: 20,
    borderRadius: 10, // Creates a perfect circle
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#0f0",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1, // Ensures the circle appears above the timeline line
  },
  completedCircle: {
    backgroundColor: "#0f0", // Green background for completed circles
  },
  stepNumberText: {
    fontSize: 10,
    color: "#0f0",
    fontWeight: "bold",
  },
  stepBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    flex: 1, // Allows the box to expand and fill available space
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000", // Shadow properties for Android and iOS
    shadowOffset: { width: 0, height: 4 }, // Shadow offset for iOS
    shadowOpacity: 0.08, // Shadow opacity for iOS
    shadowRadius: 10, // Shadow radius for iOS
    elevation: 5, // Elevation for Android
  },
  stepText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#333",
  },
  // Styles for the simulated Login page in React Native
  loginContainer: {
    flex: 1, // Takes up full available space
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0f7fa", // Light blue background
    padding: 20,
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00796b",
    marginBottom: 15,
    textAlign: "center",
  },
  loginText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  backButton: {
    backgroundColor: "#00796b",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
