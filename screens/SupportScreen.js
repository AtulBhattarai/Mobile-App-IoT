import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import BottomNav from '../components/BottomNav';

const screenHeight = Dimensions.get('window').height;

export default function SupportScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topPad} />
      <View style={styles.scrollWrapper}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
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
        </ScrollView>
      </View>
      <View style={styles.bottomNav}>
        <BottomNav />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topPad: {
    paddingTop: 40,
  },
  scrollWrapper: {
    height: screenHeight * 0.84,
  },
  scrollContainer: {
    paddingBottom: 20,
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
    width: "100%"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 15,
  },
  item: {
    fontSize: 16,
    marginBottom: 12,
  },
  bottomNav: {
    paddingHorizontal: 12,
  },
});
