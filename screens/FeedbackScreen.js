import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import BottomNav from '../components/BottomNav';

const screenHeight = Dimensions.get('window').height;

export default function FeedbackScreen({ navigation }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleSubmit = async () => {
    const { name, email, phone, message } = form;
  
    const payload = {
      email: "batul22@tbc.edu.np",
      subject: "Feedback from App",
      body: `Full Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };
  
    try {
      const response = await fetch('https://apiiot-idm4.onrender.com/send-email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        alert('Feedback Sent!');
        setForm({ name: '', email: '', phone: '', message: '' }); // Reset form
      } else {
        alert('Failed to send feedback. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      alert('An error occurred while sending feedback.');
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.topPad} />

      <View style={styles.scrollWrapper}>
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
    width: "100%",
  },
  formWrapper: {
    paddingHorizontal: 16,
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
  bottomNav: {
    paddingHorizontal: 12,
  },
});
