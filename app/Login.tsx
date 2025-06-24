import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const [id, setId] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  return (
    <View style={{
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      justifyContent: 'flex-start'
    }}>
      <View style={{
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30
      }}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}  // Replace with your actual image URL
          style={{
            width: 100,
            height: 100,
            borderRadius: 50
          }}
        />
        <TouchableOpacity style={{
          position: 'absolute',
          right: 110,
          bottom: 0,
          backgroundColor: '#fff',
          borderRadius: 12,
          padding: 2
        }}>
          <Text style={{ fontSize: 18 }}>✎</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{
          fontWeight: 'bold',
          marginBottom: 4
        }}>ID</Text>
        <TextInput
          value={id}
          onChangeText={setId}
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            padding: 10,
            marginBottom: 16
          }}
          placeholder="Enter ID"
        />

        <Text style={{
          fontWeight: 'bold',
          marginBottom: 4
        }}>Phone No.</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            padding: 10,
            marginBottom: 16
          }}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={{
          backgroundColor: '#91b49c',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center'
        }}
        onPress={() => {router.push('/SelfieScreen');}} 
        >
          <Text style={{
            color: '#fff',
            fontWeight: 'bold'
          }}>VERIFY →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
