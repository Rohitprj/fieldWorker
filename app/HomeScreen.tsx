import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Coupon Code */}
      <Text style={styles.title}>Today's Coupon Code</Text>
      <View style={styles.couponContainer}>
        <Text style={styles.couponCode}>G89HG56</Text>
      </View>
      <Text style={styles.validity}>
        Valid from <Text style={styles.bold}>14-06-25</Text> to <Text style={styles.bold}>24-06-25</Text>
      </Text>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.step}>
          <Text style={styles.stepLabel}>1500</Text>
          <View style={[styles.circle, styles.completedCircle]} />
          <Text style={styles.stepSub}>10</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.step}>
          <Text style={styles.stepLabel}>4800</Text>
          <View style={[styles.circle, styles.completedCircle]} />
          <Text style={styles.stepSub}>20</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.step}>
          <Text style={styles.stepLabel}>9000</Text>
          <View style={[styles.circle, styles.currentCircle]} />
          <Text style={styles.stepSub}>30</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.step}>
          <Text style={styles.stepLabel}>20000</Text>
          <View style={[styles.circle, styles.pendingCircle]} />
          <Text style={styles.stepSub}>40</Text>
        </View>
      </View>

      {/* Unrooted Accounts */}
      <TouchableOpacity style={styles.unrootedContainer} onPress={() => router.push('/NotificationScreen')}>
        <Text style={styles.unrootedText}>Tap to see</Text>
        <View style={styles.unrootedBox}>
          <Text style={{ color: '#fff' }}>Unrooted Accounts</Text>
          {/* You can replace with actual icon */}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  couponContainer: {
    backgroundColor: '#d4edda',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  couponCode: {
    fontSize: 18,
    color: '#155724',
  },
  validity: {
    marginTop: 5,
    marginBottom: 30,
  },
  bold: {
    fontWeight: 'bold',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  step: {
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  stepSub: {
    fontSize: 12,
    marginTop: 4,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedCircle: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  currentCircle: {
    backgroundColor: '#fff',
    borderColor: 'blue',
  },
  pendingCircle: {
    backgroundColor: '#fff',
    borderColor: 'grey',
  },
  line: {
    width: 30,
    height: 2,
    backgroundColor: '#ccc',
  },
  unrootedContainer: {
    alignItems: 'center',
  },
  unrootedText: {
    marginBottom: 5,
  },
  unrootedBox: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8,
  },
});
