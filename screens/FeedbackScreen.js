import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import BottomNav from '../components/BottomNav';

export default function FeedbackScreen({ navigation }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleSubmit = () => {
    console.log(form);
    alert('Feedback Sent!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topPad} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Contact Us</Text>

        <View style={styles.formWrapper}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={form.name}
            onChangeText={v => handleChange('name', v)}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            value={form.email}
            onChangeText={v => handleChange('email', v)}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            value={form.phone}
            onChangeText={v => handleChange('phone', v)}
          />

          <Text style={styles.label}>Your Message</Text>
          <TextInput
            style={[styles.input, styles.messageBox]}
            multiline
            numberOfLines={4}
            value={form.message}
            onChangeText={v => handleChange('message', v)}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  topPad: {
    paddingTop: 20,
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
  },
  formWrapper: {
    paddingHorizontal: 16, // Add horizontal padding to the form
  },
  label: {
    fontSize: 16,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginTop: 6,
  },
  messageBox: {
    height: 100,
  },
  button: {
    backgroundColor: '#c62828',
    padding: 14,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
