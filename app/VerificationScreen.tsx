// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function VerificationScreen() {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 100); // Adjust speed
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Under verification.</Text>
      
//       <View style={styles.progressContainer}>
//         <View style={styles.progressBarBackground}>
//           <View style={[styles.progressBarFill, { width: `${progress}%` }]}/>
//           <View style={[styles.knob, { left: `${progress}%` }]} />
//         </View>
//         <Text style={styles.progressText}>{progress}%</Text>
//         <Text style={styles.loadingText}>Loading</Text>
//       </View>

//       <Text style={styles.bottomText}>
//         Once it's complete, your ID will be activated.
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 18,
//     marginBottom: 40,
//   },
//   progressContainer: {
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   progressBarBackground: {
//     width: '80%',
//     height: 20,
//     backgroundColor: '#a0d468',
//     borderRadius: 10,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   progressBarFill: {
//     height: '100%',
//     backgroundColor: '#4caf50',
//   },
//   knob: {
//     position: 'absolute',
//     top: -5,
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: '#fff',
//     borderWidth: 2,
//     borderColor: '#4caf50',
//   },
//   progressText: {
//     marginTop: 10,
//     fontSize: 16,
//   },
//   loadingText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   bottomText: {
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });
import { useRouter } from 'expo-router'; // Import router
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function VerificationScreen() {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Navigate after short delay
          setTimeout(() => {
            router.push('/HomeScreen'); // Ensure this path matches your file inside /app
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Under verification.</Text>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
          <View style={[styles.knob, { left: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{progress}%</Text>
        <Text style={styles.loadingText}>Loading</Text>
      </View>

      <Text style={styles.bottomText}>
        Once it's complete, your ID will be activated.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginBottom: 40,
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  progressBarBackground: {
    width: '80%',
    height: 20,
    backgroundColor: '#a0d468',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
  knob: {
    position: 'absolute',
    top: -5,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#4caf50',
  },
  progressText: {
    marginTop: 10,
    fontSize: 16,
  },
  loadingText: {
    fontSize: 14,
    color: '#666',
  },
  bottomText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
