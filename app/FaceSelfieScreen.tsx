import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FaceSelfieScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>Face should be centered</Text>

      <View style={styles.faceContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/face-id.png' }}
          style={styles.faceIcon}
        />
      </View>

      <TouchableOpacity style={styles.selfieButton} onPress={() => router.push('/HelpScreen')}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/camera--v1.png' }}
          style={styles.cameraIcon}
        />
        <Text style={styles.selfieText}>Click Selfie</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    alignItems: 'center',
  },
  instruction: {
    color: '#00aaff',
    fontSize: 16,
    marginBottom: 20,
  },
  faceContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  faceIcon: {
    width: 100,
    height: 100,
    tintColor: '#555',
  },
  selfieButton: {
    alignItems: 'center',
  },
  cameraIcon: {
    width: 60,
    height: 60,
    tintColor: '#555',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 30,
    padding: 0,
  },
  selfieText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
  },
});
