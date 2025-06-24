import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SelfieScreen() {
  const handleSelfieClick = () => {
    // Add camera logic here
    alert('Open camera to take selfie!');
  };

  const handleVerify = () => {
    // Add verify logic here
    alert('Verification submitted!');
  };
const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with your avatar URL
          style={styles.avatar}
        />
      </View>

      <TouchableOpacity style={styles.selfieButton} onPress={handleSelfieClick}>
        <Ionicons name="camera" size={48} color="#333" />
        <Text style={styles.selfieText}>Click Selfie</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.verifyButton} onPress={() => {router.push('/FormScreen');}} >
        <Text style={styles.verifyText}>VERIFY →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  selfieButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 100,
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  selfieText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  verifyButton: {
    backgroundColor: '#91b49c',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  verifyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
