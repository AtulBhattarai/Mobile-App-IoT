import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import BottomNav from "../components/BottomNav";

const screenHeight = Dimensions.get("window").height;

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
              1. The app opens to a welcoming screen where users can tap the
              "Get Started" button to begin their journey.
            </Text>
            <Text style={styles.item}>
              2. Next, the main page loads, displaying real-time data from the
              IoT sensors including gas levels, air quality, flame detection,
              and humidity.
            </Text>
            <Text style={styles.item}>
              3. Each sensor reading is color-coded and continuously updates to
              reflect the latest values from the kitchen environment.
            </Text>
            <Text style={styles.item}>
              4. If any value crosses a predefined threshold, the system
              triggers an alert and immediately sends a warning email to the
              user.
            </Text>
            <Text style={styles.item}>
              5. The app also has a 'Feedback Form' where users can share their
              experiences or report issues, helping us improve the service.
            </Text>
            <Text style={styles.item}>
              6. In case of confusion, users can refer back to this Support Page
              to understand the basic flow and usage of the system.
            </Text>
            <Text style={styles.item}>
              7. Make sure the sensors are connected and the NodeMCU is powered
              and connected to Wi-Fi to ensure uninterrupted data updates.
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
    backgroundColor: "#fff",
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
    backgroundColor: "#FFB74D",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 12,
    borderRadius: 12,
    marginVertical: 10,
    alignSelf: "center",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
    textAlign: "center",
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
