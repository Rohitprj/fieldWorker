// import { Entypo } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import React from "react";
// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Profile from "../assets/images/Profile.png";
// import RectangleBackgoround from "../assets/images/RectangleBackgoround.png";

// export default function UploadScreen() {
//   const handleVerify = () => {
//     alert("Documents submitted!");
//   };

//   // const handleUpload = (type) => {
//   //   alert(`Upload ${type} clicked`);
//   // };
//   const router = useRouter();
//   return (
//     <View style={styles.container}>
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
//       <View style={styles.avatarContainer}>
//         <Image
//           source={Profile} // Replace with actual image
//           style={styles.avatar}
//         />
//         {/* <FontAwesome5
//           name="user-circle"
//           size={84}
//           color="black"
//           style={styles.avatar}
//         /> */}
//       </View>

//       <Text style={styles.sectionTitle}>UPLOAD AADHAR CARD</Text>
//       <View style={styles.row}>
//         <TouchableOpacity
//           style={styles.uploadBox}
//           // onPress={() => handleUpload("Aadhar Front")}
//         >
//           {/* <Image
//             source={{ uri: "https://via.placeholder.com/50" }}
//             style={styles.icon}
//           /> */}
//           <Entypo name="camera" size={64} color="#b3b3b3" />
//           <Text>Front</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.uploadBox}
//           // onPress={() => handleUpload("Aadhar Back")}
//         >
//           {/* <Image
//             source={{ uri: "https://via.placeholder.com/50" }}
//             style={styles.icon}
//           /> */}
//           <Entypo name="camera" size={64} color="#b3b3b3" />
//           <Text>Back</Text>
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.sectionTitle}>UPLOAD PAN CARD</Text>
//       <View style={styles.row}>
//         <TouchableOpacity
//           style={styles.uploadBox}
//           // onPress={() => handleUpload("PAN Front")}
//         >
//           {/* <Image
//             source={{ uri: "https://via.placeholder.com/50" }}
//             style={styles.icon}
//           /> */}
//           <Entypo name="camera" size={64} color="#b3b3b3" />
//           <Text>Front</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.uploadBox}
//           // onPress={() => handleUpload("PAN Back")}
//         >
//           {/* <Image
//             source={{ uri: "https://via.placeholder.com/50" }}
//             style={styles.icon}
//           /> */}
//           <Entypo name="camera" size={64} color="#b3b3b3" />
//           <Text>Back</Text>
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.warning}>
//         The details on the document should be clearly visible while uploading
//         the picture.
//       </Text>

//       <TouchableOpacity
//         style={styles.verifyButton}
//         onPress={() => {
//           router.push("/VerificationScreen");
//         }}
//       >
//         <Text style={styles.verifyText}>VERIFY →</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // padding: 20,
//     // paddingTop: 40,
//     backgroundColor: "#fff",
//   },
//   avatarContainer: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   avatar: {
//     width: 120,
//     height: 120,
//     borderRadius: 50,
//     marginTop: 20,
//   },
//   sectionTitle: {
//     fontWeight: "bold",
//     fontSize: 24,
//     marginTop: 20,
//     marginBottom: 10,
//     alignSelf: "center",
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
//   uploadBox: {
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ddd",
//     padding: 10,
//     borderRadius: 8,
//     width: 100,
//     height: 100,
//     justifyContent: "center",
//   },
//   icon: {
//     width: 40,
//     height: 40,
//     marginBottom: 5,
//   },
//   warning: {
//     color: "red",
//     fontSize: 12,
//     marginTop: 20,
//     textAlign: "center",
//   },
//   verifyButton: {
//     backgroundColor: "#91b49c",
//     padding: 15,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 160,
//     // alignSelf: "flex-end",
//   },
//   verifyText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });

import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"; // Import Dimensions

import Profile from "../assets/images/Profile.png";
import RectangleBackgoround from "../assets/images/RectangleBackgoround.png";

const { height } = Dimensions.get("window"); // Get screen height

export default function UploadScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Background Image positioned absolutely at the top */}
      <Image
        source={RectangleBackgoround}
        style={{
          width: "100%",
          height: height * 0.2, // Adjust height as a percentage of screen height
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
        {/* Add an edit icon if needed. Example below using Entypo: */}
        {/* <View style={styles.editIconContainer}>
          <Entypo name="pencil" size={20} color="#555" />
        </View> */}
      </View>

      {/* Main Content Area - no ScrollView */}
      <View style={styles.contentArea}>
        <Text style={styles.sectionTitle}>UPLOAD AADHAR CARD</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.uploadBox}
            // onPress={() => handleUpload("Aadhar Front")}
          >
            <Entypo name="camera" size={40} color="#b3b3b3" />
            {/* Reduced icon size */}
            <Text style={styles.uploadBoxText}>Front</Text> {/* Added style */}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.uploadBox}
            // onPress={() => handleUpload("Aadhar Back")}
          >
            <Entypo name="camera" size={40} color="#b3b3b3" />
            {/* Reduced icon size */}
            <Text style={styles.uploadBoxText}>Back</Text> {/* Added style */}
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>UPLOAD PAN CARD</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.uploadBox}
            // onPress={() => handleUpload("PAN Front")}
          >
            <Entypo name="camera" size={40} color="#b3b3b3" />
            {/* Reduced icon size */}
            <Text style={styles.uploadBoxText}>Front</Text> {/* Added style */}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.uploadBox}
            // onPress={() => handleUpload("PAN Back")}
          >
            <Entypo name="camera" size={40} color="#b3b3b3" />
            {/* Reduced icon size */}
            <Text style={styles.uploadBoxText}>Back</Text> {/* Added style */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: height * 0.12, // Adjusted based on percentage of screen height
    marginBottom: 0, // Reduced margin
    zIndex: 1, // Ensure avatar is above the background image
  },
  avatar: {
    width: 110, // Slightly reduced avatar size
    height: 110, // Slightly reduced avatar size
    borderRadius: 55, // Half of width/height for a perfect circle
    borderColor: "#fff", // White border around the profile image
    borderWidth: 4,
  },
  contentArea: {
    flex: 1, // Allows content to take remaining space
    paddingHorizontal: 20, // Apply consistent horizontal padding
    justifyContent: "space-between", // Distribute content vertically
    paddingBottom: 20, // Padding at the bottom for the button
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16, // Reduced font size
    marginTop: 15, // Reduced margin
    marginBottom: 8, // Reduced margin
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around", // Use space-around for even distribution
    marginBottom: 10, // Reduced margin
  },
  uploadBox: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    width: "45%", // Percentage width for two columns with space
    aspectRatio: 1, // Keep it square
    backgroundColor: "#f9f9f9",
    padding: 5, // Reduced padding
  },
  uploadBoxText: {
    fontSize: 12, // Smaller text for the "Front/Back" labels
    marginTop: 5,
  },
  warning: {
    color: "red",
    fontSize: 11, // Smaller font size for warning
    marginTop: 15, // Reduced margin
    textAlign: "center",
    paddingHorizontal: 5, // Reduced padding
  },
  verifyButton: {
    backgroundColor: "#91b49c",
    padding: 12, // Reduced padding
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20, // Reduced margin
    marginHorizontal: 0, // No horizontal margin needed here, handled by contentArea padding
  },
  verifyText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15, // Slightly reduced font size
  },
});
