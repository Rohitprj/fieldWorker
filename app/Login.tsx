// import { useRouter } from "expo-router";
// import React, { useState } from "react";
// import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
// import Profile from "../assets/images/Profile.png";
// import RectangleBackgoround from "../assets/images/RectangleBackgoround.png";

// export default function Login() {
//   const [id, setId] = useState("");
//   const [phone, setPhone] = useState("");
//   const router = useRouter();

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "#fff",
//         justifyContent: "flex-start",
//       }}
//     >
//       <Image
//         source={RectangleBackgoround}
//         style={{ width: "100%", height: "20%" }}
//       />
//       <View
//         style={{
//           alignItems: "center",
//           marginTop: 50,
//           marginBottom: 30,
//         }}
//       >
//         <Image
//           source={Profile} // Replace with your actual image URL
//           style={{
//             width: 130,
//             height: 130,
//             borderRadius: 50,
//           }}
//         />
//       </View>

//       <View style={{ padding: 20 }}>
//         <Text
//           style={{
//             fontWeight: "bold",
//             marginBottom: 4,
//           }}
//         >
//           ID
//         </Text>
//         <TextInput
//           value={id}
//           onChangeText={setId}
//           style={{
//             borderWidth: 1,
//             borderColor: "#ccc",
//             borderRadius: 8,
//             padding: 10,
//             marginBottom: 16,
//           }}
//           placeholder="Enter ID"
//         />

//         <Text
//           style={{
//             fontWeight: "bold",
//             marginBottom: 4,
//           }}
//         >
//           Phone No.
//         </Text>
//         <TextInput
//           value={phone}
//           onChangeText={setPhone}
//           style={{
//             borderWidth: 1,
//             borderColor: "#ccc",
//             borderRadius: 8,
//             padding: 10,
//             marginBottom: 16,
//           }}
//           placeholder="Enter phone number"
//           keyboardType="phone-pad"
//         />
//       </View>
//       <TouchableOpacity
//         style={{
//           backgroundColor: "#91b49c",
//           padding: 15,
//           borderRadius: 8,
//           alignItems: "center",
//         }}
//         onPress={() => {
//           router.push("/SelfieScreen");
//         }}
//       >
//         <Text
//           style={{
//             color: "#fff",
//             fontWeight: "bold",
//           }}
//         >
//           VERIFY →
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Profile from "../assets/images/Profile.png";
import RectangleBackgoround from "../assets/images/RectangleBackgoround.png"; // Corrected typo in variable name if it was `RectangleBackgoround`

export default function Login() {
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
      }}
    >
      {/* Background Image positioned absolutely at the top */}
      <Image
        source={RectangleBackgoround}
        style={{
          width: "100%",
          height: 150, // Adjust height as needed to cover the profile image appropriately
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          resizeMode: "stretch", // Ensures the image stretches to fill the area without distortion
        }}
      />

      <View
        style={{
          alignItems: "center",
          marginTop: 80, // Adjust this value to control how far down the profile image is placed
          marginBottom: 30,
          zIndex: 1, // Ensure the profile image appears above the background image
        }}
      >
        <Image
          source={Profile} // Replace with your actual image URL
          style={{
            width: 130,
            height: 130,
          }}
        />
      </View>

      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        {/* Added padding to this view for consistent margins */}
        <Text
          style={{
            fontWeight: "bold",
            marginBottom: 4,
          }}
        >
          ID
        </Text>
        <TextInput
          value={id}
          onChangeText={setId}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
            marginBottom: 16,
          }}
          placeholder="Enter ID"
        />
        <Text
          style={{
            fontWeight: "bold",
            marginBottom: 4,
          }}
        >
          Phone No.
        </Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
            marginBottom: 16,
          }}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#91b49c",
          padding: 15,
          borderRadius: 8,
          alignItems: "center",
          marginHorizontal: 20, // Added horizontal margin for alignment
          marginBottom: 20, // Added bottom margin for spacing
        }}
        onPress={() => {
          router.push("/SelfieScreen");
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          VERIFY →
        </Text>
      </TouchableOpacity>
    </View>
  );
}
