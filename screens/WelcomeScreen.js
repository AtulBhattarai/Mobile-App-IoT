// screens/WelcomeScreen.js
import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableWithoutFeedback, SafeAreaView,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export default function WelcomeScreen({ navigation }) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPressIn = () => {
    scale.value = withSpring(0.95);
  };

  const onPressOut = () => {
    scale.value = withSpring(1);
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>SMART KITCHEN SAFE HOME</Text>
        <Text style={styles.subtitle}>“Prevent Disasters Before They Happen!”</Text>
      </View>

      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.brand}>SMART KITCHEN</Text>
      </View>

      <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
        <Animated.View style={[styles.button, animatedStyle]}>
          <Text style={styles.buttonText}>Get started</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  topSection: {
    marginTop: 60,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111',
    letterSpacing: 1,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 10,
  },
  brand: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2b2b2b',
    letterSpacing: 2,
  },
  button: {
    backgroundColor: '#e53935',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 50,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});