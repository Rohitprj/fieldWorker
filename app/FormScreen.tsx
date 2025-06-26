// import { useRouter } from "expo-router";
// import React from "react";
// import {
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import Profile from "../assets/images/Profile.png";
// import RectangleBackgoround from "../assets/images/RectangleBackgoround.png";

// export default function FormScreen() {
//   const router = useRouter();

//   return (
//     <ScrollView style={styles.container}>
//       {/* Background Image positioned absolutely at the top */}
//       <Image
//         source={RectangleBackgoround}
//         style={{
//           width: "100%",
//           height: 180, // Increased height to match the screenshot's background coverage
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           resizeMode: "stretch", // Ensures the image stretches to fill the area
//         }}
//       />

//       {/* Profile Image container */}
//       <View style={styles.avatarContainer}>
//         <Image
//           source={Profile} // Replace with actual image
//           style={styles.avatar}
//         />
//         {/* You can add an edit icon here using another Image or a library like FontAwesome5 */}
//         {/* For example:
//         <View style={styles.editIconContainer}>
//           <Image
//             source={require('../assets/images/edit-icon.png')} // Replace with your actual edit icon
//             style={styles.editIcon}
//           />
//         </View>
//         */}
//       </View>

//       {/* Form Fields */}
//       <View style={styles.formContent}>
//         <Text style={styles.label}>AADHAR NO.</Text>
//         <TextInput style={styles.input} placeholder="melpeters@gmail.com" />

//         <Text style={styles.label}>Name</Text>
//         <TextInput style={styles.input} placeholder="hnnfuvnuniu" />

//         <Text style={styles.label}>PAN CARD</Text>
//         <TextInput style={styles.input} placeholder="melpeters@gmail.com" />

//         <Text style={styles.label}>IFSC CODE</Text>
//         <TextInput style={styles.input} placeholder="melpeters@gmail.com" />

//         <Text style={styles.label}>ACCOUNT NO</Text>
//         <TextInput style={styles.input} placeholder="melpeters@gmail.com" />

//         <Text style={styles.label}>NOMINEE</Text>
//         <TextInput style={styles.input} placeholder="melpeters@gmail.com" />

//         <Text style={styles.label}>NOMINEE NO.</Text>
//         <TextInput style={styles.input} placeholder="melpeters@gmail.com" />

//         <Text style={styles.agreeText}>
//           By signing up you agree to our{" "}
//           <Text style={styles.link}>Terms and conditions</Text> and{" "}
//           <Text style={styles.link}>Privacy Policy</Text>.
//         </Text>

//         <TouchableOpacity
//           style={styles.nextButton}
//           onPress={() => {
//             router.push("/UploadScreen");
//           }}
//         >
//           <Text style={styles.nextText}>NEXT →</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   avatarContainer: {
//     alignItems: "center",
//     marginTop: 100, // Adjusted to place the profile image correctly over the background
//     marginBottom: 20,
//     zIndex: 1, // Ensure avatar is above the background image
//   },
//   avatar: {
//     width: 130, // Increased size to match the screenshot
//     height: 130, // Increased size to match the screenshot
//     borderRadius: 65, // Half of width/height for a perfect circle
//     borderColor: "#fff", // White border around the profile image
//     borderWidth: 4,
//   },
//   // If you want to add an edit icon on the profile image
//   // editIconContainer: {
//   //   position: 'absolute',
//   //   bottom: 0,
//   //   right: 0,
//   //   backgroundColor: '#EBF0F0', // Match background color for the circle behind the icon
//   //   borderRadius: 15, // Half of width/height for a circle
//   //   width: 30, // Size of the edit icon's background circle
//   //   height: 30,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   transform: [{ translateX: -10 }, { translateY: -10 }], // Adjust position
//   // },
//   // editIcon: {
//   //   width: 20, // Size of your edit icon image
//   //   height: 20,
//   //   tintColor: '#555', // Adjust color if your icon is a single color
//   // },
//   formContent: {
//     paddingHorizontal: 20, // Apply padding here to affect all form elements
//   },
//   label: {
//     fontWeight: "bold",
//     marginTop: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 6,
//     padding: 10,
//     marginTop: 4,
//   },
//   agreeText: {
//     fontSize: 12,
//     color: "#555",
//     marginTop: 20, // Increased top margin for spacing
//   },
//   link: {
//     color: "blue",
//     textDecorationLine: "underline",
//   },
//   nextButton: {
//     backgroundColor: "#91b49c",
//     padding: 15,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 30, // Increased top margin for spacing from the text
//     marginBottom: 20, // Add bottom margin for the scroll view
//   },
//   nextText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });

import Checkbox from "expo-checkbox"; // Import Checkbox
import { useRouter } from "expo-router";
import React, { useState } from "react"; // Import useState
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
import RectangleBackgoround from "../assets/images/RectangleBackgoround.png";

export default function FormScreen() {
  const router = useRouter();
  const [isChecked, setChecked] = useState(false); // State for the checkbox

  return (
    <ScrollView style={styles.container}>
      {/* Background Image positioned absolutely at the top */}
      <Image
        source={RectangleBackgoround}
        style={{
          width: "100%",
          height: 180, // Increased height to match the screenshot's background coverage
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          resizeMode: "stretch", // Ensures the image stretches to fill the area
        }}
      />

      {/* Profile Image container */}
      <View style={styles.avatarContainer}>
        <Image
          source={Profile} // Replace with actual image
          style={styles.avatar}
        />
        {/* You can add an edit icon here using another Image or a library like FontAwesome5 */}
        {/* For example:
        <View style={styles.editIconContainer}>
          <Image
            source={require('../assets/images/edit-icon.png')} // Replace with your actual edit icon
            style={styles.editIcon}
          />
        </View>
        */}
      </View>

      {/* Form Fields */}
      <View style={styles.formContent}>
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

        {/* Checkbox and Text */}
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#91b49c" : "#555"} // Change color when checked
          />
          <Text style={styles.agreeText}>
            By signing up you agree to our{" "}
            <Text style={styles.link}>Terms and conditions</Text> and{" "}
            <Text style={styles.link}>Privacy Policy</Text>.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            // Optional: Add logic to check if checkbox is checked before navigating
            if (isChecked) {
              router.push("/UploadScreen");
            } else {
              alert(
                "Please agree to the Terms and Conditions and Privacy Policy."
              );
            }
          }}
        >
          <Text style={styles.nextText}>NEXT →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 100, // Adjusted to place the profile image correctly over the background
    marginBottom: 20,
    zIndex: 1, // Ensure avatar is above the background image
  },
  avatar: {
    width: 130, // Increased size to match the screenshot
    height: 130, // Increased size to match the screenshot
    // borderRadius: 65, // Half of width/height for a perfect circle
    // borderColor: "#fff", // White border around the profile image
    // borderWidth: 4,
  },
  // If you want to add an edit icon on the profile image
  // editIconContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   right: 0,
  //   backgroundColor: '#EBF0F0', // Match background color for the circle behind the icon
  //   borderRadius: 15, // Half of width/height for a circle
  //   width: 30, // Size of the edit icon's background circle
  //   height: 30,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   transform: [{ translateX: -10 }, { translateY: -10 }], // Adjust position
  // },
  // editIcon: {
  //   width: 20, // Size of your edit icon image
  //   height: 20,
  //   tintColor: '#555', // Adjust color if your icon is a single color
  // },
  formContent: {
    paddingHorizontal: 20, // Apply padding here to affect all form elements
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
  checkboxContainer: {
    flexDirection: "row", // Arrange checkbox and text horizontally
    alignItems: "center", // Align them vertically in the center
    marginTop: 20, // Keep your existing top margin for spacing
  },
  checkbox: {
    marginRight: 8, // Space between checkbox and text
  },
  agreeText: {
    fontSize: 12,
    color: "#555",
    flexShrink: 1, // Allow text to wrap if it's too long
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
    marginTop: 30, // Increased top margin for spacing from the text
    marginBottom: 20, // Add bottom margin for the scroll view
  },
  nextText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
