import React, { useEffect } from 'react';
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
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg.jpg')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        {/* ✅ Make sure the ONLY child here is <Text> or a View with <Text> inside */}
      </ImageBackground>

      <View style={styles.tiles}>
        <View style={styles.row}>
          <AnimatedTile label="Gas" color="#6D4200" icon="gas-cylinder" delay={100} />
          <AnimatedTile label="Flame" color="#F17212" icon="fire" delay={200} />
        </View>
        <View style={styles.row}>
          <AnimatedTile label="Air" color="#007C6D" icon="weather-windy" delay={300} />
          <AnimatedTile label="Humidity" color="#4B91AA" icon="water-percent" delay={400} />
        </View>
      </View>

      <View style={styles.footerText}>
        <Text style={styles.motto}>Your Kitchen, Our Priority</Text>
        <Text style={styles.motto}>Stay Safe, Stay Smart!</Text>
      </View>

      <BottomNav />
    </View>
  );
}

function AnimatedTile({ label, color, icon, delay }) {
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
    <Animated.View style={[styles.tile, { backgroundColor: color }, animatedStyle]}>
      <MaterialCommunityIcons name={icon} size={24} color="white" />
      <Text style={styles.tileText}>{label}</Text>
      <Text style={styles.tileSub}>25℃</Text>
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
    marginTop: 80
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  imageText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
  },
  tiles: {
    marginTop: 20,
  },
  row: {
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
