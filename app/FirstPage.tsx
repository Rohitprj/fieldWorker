// import React, { useState } from "react";
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// // Import Feather and MaterialIcons from @expo/vector-icons
// import { Feather, MaterialIcons } from "@expo/vector-icons";
// import { router } from "expo-router";

// const steps = [
//   { label: "User Id Access", completed: false, route: "Login" },
//   { label: "Profile photo upload", completed: true, route: "profile-upload" },
//   { label: "Details fillup", completed: true, route: "details-fillup" },
//   { label: "Documents upload", completed: true, route: "documents-upload" },
//   { label: "Onboarding fee", completed: false, route: "login" }, // 'login' route for navigation
// ];

// export default function App() {
//   // State to manage the current active route/screen
//   const [currentRoute, setCurrentRoute] = useState("onboarding");

//   // Conditional rendering for the Login page
//   if (currentRoute === "login") {
//     return (
//       <View style={styles.loginContainer}>
//         <Text style={styles.loginTitle}>Welcome to the Login Page!</Text>
//         <Text style={styles.loginText}>
//           This is a placeholder for your login functionality.
//         </Text>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => setCurrentRoute("onboarding")} // Navigate back to onboarding
//         >
//           <Text style={styles.backButtonText}>Back to Onboarding</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   // Render the Onboarding screen
//   return (
//     // ScrollView allows content to be scrollable if it overflows the screen
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Top Note Section: Important messages for the user */}
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

//       {/* Steps Section: Visual representation of onboarding progress */}
//       <View style={styles.stepsWrapper}>
//         {/* The main vertical timeline line, absolutely positioned to connect circles */}
//         <View style={styles.verticalTimelineLine} />

//         {/* Container for individual step content, offset from the timeline line */}
//         <View style={styles.stepsContentContainer}>
//           {steps.map((step, index) => (
//             <View key={index} style={styles.stepWrapper}>
//               {/* Circle representing the step's status (completed/incomplete) */}
//               <View
//                 style={[
//                   styles.circle,
//                   step.completed && styles.completedCircle,
//                 ]}
//               >
//                 {/* Display a check icon for completed steps */}
//                 {step.completed ? (
//                   <Feather name="check" size={14} color="#fff" />
//                 ) : (
//                   // For incomplete steps, display the step number
//                   <Text style={styles.stepNumberText}>{index + 1}</Text>
//                 )}
//               </View>
//               {/* Touchable step box for navigation or action */}
//               <TouchableOpacity
//                 style={styles.stepBox}
//                 onPress={() => router.push("/Login")} // Navigate on press
//               >
//                 <Text style={styles.stepText}>{step.label}</Text>
//                 <MaterialIcons
//                   name="keyboard-arrow-right"
//                   size={24}
//                   color="#000"
//                 />
//               </TouchableOpacity>
//             </View>
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: "#f0f2f5",
//     minHeight: "100%",
//     alignItems: "center",
//   },
//   noteContainer: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     padding: 16,
//     marginBottom: 24,
//     marginTop: 50,
//     width: "90%",
//     maxWidth: 600,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.08,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   fireText: {
//     fontWeight: "bold",
//     color: "#FF5A1F",
//     fontSize: 18,
//     marginBottom: 8,
//   },
//   boldText: {
//     fontWeight: "600",
//     fontSize: 16,
//     marginBottom: 6,
//     color: "#555",
//   },
//   point: {
//     fontSize: 15,
//     marginVertical: 4,
//     color: "#333",
//   },
//   warning: {
//     fontSize: 15,
//     color: "#d9534f", // Red for warning messages
//     marginTop: 8,
//     lineHeight: 20,
//   },
//   stepsWrapper: {
//     position: "relative",
//     width: "90%",
//     maxWidth: 600,
//     paddingBottom: 20, // Adds space at the bottom of the steps list
//   },
//   verticalTimelineLine: {
//     position: "absolute",
//     left: 20, // Position of the timeline line relative to stepsWrapper's left edge
//     top: 0,
//     bottom: 0,
//     width: 2,
//     backgroundColor: "#0f0", // Green color for the line
//   },
//   stepsContentContainer: {
//     marginLeft: 40, // Offsets the step content to the right, making space for the line and circles
//   },
//   stepWrapper: {
//     flexDirection: "row",
//     alignItems: "center", // Vertically aligns items in the row
//     marginBottom: 50, // Space between each step item
//     position: "relative", // Needed for absolute positioning of the circle within it
//   },
//   circle: {
//     position: "absolute",
//     left: -29, // Adjusted position to center circle on the timeline line (20px line left - 10px half circle width - 19px for container offset)
//     width: 20,
//     height: 20,
//     borderRadius: 10, // Creates a perfect circle
//     backgroundColor: "#fff",
//     borderWidth: 2,
//     borderColor: "#0f0",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 1, // Ensures the circle appears above the timeline line
//   },
//   completedCircle: {
//     backgroundColor: "#0f0", // Green background for completed circles
//   },
//   stepNumberText: {
//     fontSize: 10,
//     color: "#0f0",
//     fontWeight: "bold",
//   },
//   stepBox: {
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 10,
//     flex: 1, // Allows the box to expand and fill available space
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     shadowColor: "#000", // Shadow properties for Android and iOS
//     shadowOffset: { width: 0, height: 4 }, // Shadow offset for iOS
//     shadowOpacity: 0.08, // Shadow opacity for iOS
//     shadowRadius: 10, // Shadow radius for iOS
//     elevation: 5, // Elevation for Android
//   },
//   stepText: {
//     fontSize: 17,
//     fontWeight: "500",
//     color: "#333",
//   },
//   // Styles for the simulated Login page in React Native
//   loginContainer: {
//     flex: 1, // Takes up full available space
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#e0f7fa", // Light blue background
//     padding: 20,
//   },
//   loginTitle: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#00796b",
//     marginBottom: 15,
//     textAlign: "center",
//   },
//   loginText: {
//     fontSize: 18,
//     color: "#333",
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   backButton: {
//     backgroundColor: "#00796b",
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   backButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
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
  { label: "User Id Access", status: "active", route: "Login" }, // Changed to 'active'
  {
    label: "Profile photo upload",
    status: "completed",
    route: "SelfieScreen",
  },
  { label: "Details fillup", status: "completed", route: "FormScreen" },
  { label: "Documents upload", status: "completed", route: "UploadScreen" },
  { label: "Onboarding fee", status: "incomplete", route: "HomeScreen" }, // Changed to 'incomplete'
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
          🔺 Once the limit is reached, onboarding access will be closed.{"\n"}
          Don’t miss out – act fast before it’s too late!
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
                  step.status === "completed" && styles.completedCircle,
                  step.status === "active" && styles.activeCircle, // Style for active radio button
                  step.status === "incomplete" && styles.incompleteCircle, // Style for incomplete radio button
                ]}
              >
                {/* Display a check icon for completed steps */}
                {step.status === "completed" ? (
                  <Feather name="check" size={14} color="#fff" />
                ) : step.status === "active" ? (
                  <View style={styles.activeRadioButtonInner} />
                ) : (
                  <View style={styles.incompleteRadioButtonInner} />
                )}
              </View>
              {/* Touchable step box for navigation or action */}
              <TouchableOpacity
                style={styles.stepBox}
                onPress={() => router.push(step.route)} // Navigate on press
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

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    backgroundColor: "#ffffff",
    minHeight: "100%",
    alignItems: "center",
  },
  noteContainer: {
    // backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
    marginTop: 50,
    width: "90%",
    maxWidth: 600,
  },
  fireText: {
    fontWeight: "bold",
    color: "#FF5A1F",
    fontSize: 18,
    marginBottom: 8,
  },
  boldText: {
    fontWeight: "600",
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
    paddingBottom: 20,
    right: 25,
  },
  verticalTimelineLine: {
    position: "absolute",
    left: 60, // Position of the timeline line relative to stepsWrapper's left edge
    top: 10, // Adjusted top to align with the center of the first circle
    bottom: 60, // Adjusted bottom to stop before the last circle
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
    left: 12, // Adjusted position to center circle on the timeline line (20px line left - 10px half circle width - 19px for container offset)
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
  activeCircle: {
    borderColor: "#0f0", // Green border for active (radio)
    backgroundColor: "#fff", // White background for active radio button
  },
  activeRadioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#0f0", // Green inner circle for active radio button
  },
  incompleteCircle: {
    borderColor: "#ccc", // Grey border for incomplete (radio)
    backgroundColor: "#fff", // White background for incomplete radio button
  },
  incompleteRadioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc", // Grey inner circle for incomplete radio button
  },
  stepNumberText: {
    fontSize: 10,
    color: "#0f0",
    fontWeight: "bold",
  },
  stepBox: {
    // backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    flex: 1, // Allows the box to expand and fill available space
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  stepText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#333",
    left: 30,
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
