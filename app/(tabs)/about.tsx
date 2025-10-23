import HeaderThemeToggle from '@/components/HeaderThemeToggle';
import { useTheme } from '@/hook/ThemeProvider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const About = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
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
      <View style={styles.avatar}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={{ width: 120, height: 120, borderRadius: 60 }}
        />
      </View>
      <Text style={[styles.name, { color: theme.colors.text }]}>
        Sunday Mba
      </Text>
      <Text style={[styles.role, { color: theme.colors.muted }]}>
        Mobile App Developer
      </Text>

      <Text style={[styles.bio, { color: theme.colors.text }]}>
        I build delightful, accessible user interfaces and mobile experiences. I
        love working with React, TypeScript, NodeJs and animation libraries to
        bring designs to life.
      </Text>

      <View style={styles.links}>
        <Pressable
          style={styles.linkItem}
          onPress={() => Linking.openURL('https://github.com/sundaymba')}
        >
          <MaterialCommunityIcons
            name="github"
            size={18}
            color={theme.colors.text}
          />
          <Text style={[styles.linkText, { color: theme.colors.text }]}>
            GitHub
          </Text>
        </Pressable>

        <Pressable
          style={styles.linkItem}
          onPress={() => Linking.openURL('https://twitter.com/sundaykama1')}
        >
          <MaterialCommunityIcons
            name="twitter"
            size={18}
            color={theme.colors.text}
          />
          <Text style={[styles.linkText, { color: theme.colors.text }]}>
            Twitter
          </Text>
        </Pressable>

        <Pressable
          style={styles.linkItem}
          onPress={() => Linking.openURL('mailto:hello@sundaymba.com')}
        >
          <MaterialCommunityIcons
            name="email-outline"
            size={18}
            color={theme.colors.text}
          />
          <Text style={[styles.linkText, { color: theme.colors.text }]}>
            Email
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: { fontSize: 22, fontWeight: '700', marginTop: 12 },
  role: { fontSize: 14, marginTop: 4 },
  bio: { marginTop: 16, lineHeight: 20, textAlign: 'center' },
  links: { flexDirection: 'row', marginTop: 18, gap: 12 },
  linkItem: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 6 },
  linkText: { marginLeft: 8 },
});
