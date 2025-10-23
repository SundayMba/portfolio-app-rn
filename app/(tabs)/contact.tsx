import HeaderThemeToggle from '@/components/HeaderThemeToggle';
import { useTheme } from '@/hook/ThemeProvider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSend = () => {
    // Non-functional placeholder
    Alert.alert('Thanks!', 'This is a demo form — no actual message was sent.');
    setName('');
    setEmail('');
    setMessage('');
  };

  const { theme } = useTheme();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <SafeAreaView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'flex-end',
          }}
        >
          <HeaderThemeToggle />
        </View>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Get in touch
        </Text>
        <Text style={[styles.info, { color: theme.colors.muted }]}>
          I&apos;d love to hear about your project or opportunities.
        </Text>

        <View
          style={[
            styles.contactCard,
            {
              backgroundColor: theme.colors.card,
              borderColor: theme.colors.border,
            },
          ]}
        >
          <View style={styles.cardRow}>
            <MaterialCommunityIcons
              name="email-outline"
              size={18}
              color={theme.colors.text}
            />
            <View style={{ marginLeft: 8 }}>
              <Text style={[styles.cardLabel, { color: theme.colors.muted }]}>
                Email
              </Text>
              <Text style={[styles.cardValue, { color: theme.colors.text }]}>
                sundinoh@gmail.com
              </Text>
            </View>
          </View>

          <View style={[styles.cardRow, { marginTop: 12 }]}>
            <MaterialCommunityIcons
              name="map-marker"
              size={18}
              color={theme.colors.text}
            />
            <View style={{ marginLeft: 8 }}>
              <Text style={[styles.cardLabel, { color: theme.colors.muted }]}>
                Location
              </Text>
              <Text style={[styles.cardValue, { color: theme.colors.text }]}>
                Remote — Lekki, Nigeria
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.form}>
          <TextInput
            placeholder="Your name"
            placeholderTextColor={theme.colors.muted}
            value={name}
            onChangeText={setName}
            style={[
              styles.input,
              { borderColor: theme.colors.border, color: theme.colors.text },
            ]}
          />
          <TextInput
            placeholder="Your email"
            placeholderTextColor={theme.colors.muted}
            value={email}
            onChangeText={setEmail}
            style={[
              styles.input,
              { borderColor: theme.colors.border, color: theme.colors.text },
            ]}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Message"
            placeholderTextColor={theme.colors.muted}
            value={message}
            onChangeText={setMessage}
            style={[
              styles.input,
              styles.textarea,
              { borderColor: theme.colors.border, color: theme.colors.text },
            ]}
            multiline
          />
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.colors.primary }]}
            onPress={onSend}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700', color: '#0f172a' },
  info: { color: '#475569', marginTop: 8, marginBottom: 18 },
  contactCard: { backgroundColor: '#f1f5f9', padding: 12, borderRadius: 8 },
  cardRow: { flexDirection: 'row', alignItems: 'center' },
  cardLabel: { color: '#64748b', fontSize: 12 },
  cardValue: { color: '#0f172a', marginTop: 4, fontWeight: '600' },
  form: { marginTop: 18 },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  textarea: { minHeight: 100, textAlignVertical: 'top' },
  button: {
    backgroundColor: '#06b6d4',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '700' },
});
