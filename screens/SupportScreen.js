import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import BottomNav from '../components/BottomNav';

export default function SupportScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topPad} />
      <Text style={styles.header}>Support Page</Text>
      <Text style={styles.title}>How the App Works</Text>
      <View style={styles.content}>
        <Text style={styles.item}>
          1. The app opens to a welcoming screen where users can tap the "Get Started" button to begin their journey.
        </Text>
        <Text style={styles.item}>
          2. Next, the main page loads, displaying real-time data from the IoT sensors.
        </Text>
        <Text style={styles.item}>
          3. There is the 'Feedback Form' page where users can fill the form and submit.
        </Text>
      </View>
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  topPad: {
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#FFB74D',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 12,
    borderRadius: 12,
    marginVertical: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 10, // Added padding to left and right
  },
  item: {
    fontSize: 16,
    marginBottom: 12,
  },
});
