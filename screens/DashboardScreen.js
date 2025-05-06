import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';

export default function DashboardScreen() {
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    fetch('https://apiiot-idm4.onrender.com/latest-sensor-data')
      .then(res => res.json())
      .then(data => {
        if (data?.status === 'success' && data?.data?.length > 0) {
          setSensorData(data.data[0]);
        }
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  const getMQ2Status = (value) => {
    const v = parseInt(value, 10);
    if (v <= 100) return 'Fresh';
    if (v <= 300) return 'Normal';
    if (v <= 500) return 'High';
    return 'Danger';
  };

  const getMQ135Status = (value) => {
    const v = parseInt(value, 10);
    return v === 1 ? 'Good Air Quality' : 'Poor Air Quality';
  };

  const getFireStatus = (value) => {
    return parseInt(value) === 1 ? 'Safe, No Fire' : '🔥 Fire Detected!';
  };

  const getHumidityStatus = (value) => {
    const v = parseInt(value, 10);
    if (v <= 30) return 'Dry';
    if (v <= 60) return 'Comfortable';
    if (v <= 80) return 'Humid';
    return 'Very Humid';
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg.jpg')}
        style={styles.imageBackground}
        resizeMode="cover">
      </ImageBackground>

      <View style={styles.tiles}>
        <View style={styles.row}>
          <AnimatedTile
            label="Gas Detected"
            color="#6D4200"
            icon="gas-cylinder"
            delay={100}
            value={
              sensorData
                ? `${sensorData.mq2} - ${getMQ2Status(sensorData.mq2)}`
                : 'Loading...'
            }
          />
          <AnimatedTile
            label="Air Quality"
            color="#007C6D"
            icon="weather-windy"
            delay={200}
            value={
              sensorData
                ? `${sensorData.mq135} - ${getMQ135Status(sensorData.mq135)}`
                : 'Loading...'
            }
          />
        </View>

        <View style={styles.row}>
          <AnimatedTile
            label="Flame"
            color="#F17212"
            icon="fire"
            delay={300}
            value={
              sensorData
                ? `${getFireStatus(sensorData.fire)}`
                : 'Loading...'
            }
          />
          <AnimatedTile
            label="Humidity"
            color="#4B91AA"
            icon="water-percent"
            delay={400}
            value={
              sensorData
                ? `${sensorData.humidity}% - ${getHumidityStatus(sensorData.humidity)}`
                : 'Loading...'
            }
          />
        </View>

        <View style={styles.fullWidthRow}>
          <AnimatedTile
            label="Temperature"
            color="#FF6F61"
            icon="thermometer"
            delay={500}
            value={
              sensorData
                ? `${sensorData.temperature}°C`
                : 'Loading...'
            }
            isFullWidth={true}
          />
        </View>
      </View>

      <View style={styles.footerText}>
        <Text style={styles.motto}>Your Kitchen, Our Priority</Text>
        <Text style={styles.motto}>Stay Safe, Stay Smart!</Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <BottomNav />
      </View>
    </View>
  );
}

function AnimatedTile({ label, color, icon, delay, value, isFullWidth }) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500, delay, easing: Easing.out(Easing.ease) });
    translateY.value = withTiming(0, { duration: 500, delay, easing: Easing.out(Easing.ease) });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View
      style={[
        styles.tile,
        { backgroundColor: color },
        animatedStyle,
        isFullWidth ? styles.fullWidthTile : null,
      ]}
    >
      <MaterialCommunityIcons name={icon} size={24} color="white" />
      <Text style={styles.tileText}>{label}</Text>
      <Text style={styles.tileSub}>{value}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imageBackground: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    marginTop: 80,
  },
  header: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  headerText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  tiles: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  fullWidthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  tile: {
    width: '48%',
    height: 100,
    borderRadius: 12,
    padding: 12,
    justifyContent: 'space-between',
  },
  fullWidthTile: {
    width: '100%',
  },
  tileText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  tileSub: {
    color: '#fff',
    fontSize: 14,
  },
  footerText: {
    alignItems: 'center',
    marginVertical: 10,
  },
  motto: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },
});
