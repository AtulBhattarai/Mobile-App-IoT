import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BottomNav() {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => navigation.navigate('Feedback')} style={styles.navItem}>
        <Feather name="message-square" size={20} color="white" />
        <Text style={styles.navLabel}>FeedBack</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.navItem}>
        <Ionicons name="home" size={20} color="white" />
        <Text style={styles.navLabel}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Support')} style={styles.navItem}>
        <Feather name="headphones" size={20} color="white" />
        <Text style={styles.navLabel}>Support</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#c62828',
    borderRadius: 16,
    justifyContent: 'space-around',
    paddingVertical: 12,
    marginBottom: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
});
