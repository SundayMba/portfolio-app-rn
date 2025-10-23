import { ThemeProvider, useTheme } from '@/hook/ThemeProvider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const ThemedTabs = () => {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.muted,
        tabBarStyle: {
          paddingVertical: 6,
          height: 60,
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
        },
        tabBarIcon: ({ color, size }) => {
          let name: React.ComponentProps<
            typeof MaterialCommunityIcons
          >['name'] = 'help-circle';
          if (route.name === 'skill') {
            name = 'tools';
          } else if (route.name === 'about') {
            name = 'account-circle';
          } else if (route.name === 'contact') {
            name = 'email-outline';
          }
          return (
            <MaterialCommunityIcons
              name={name}
              size={size ?? 24}
              color={color}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="skill" />
      <Tabs.Screen name="about" />
      <Tabs.Screen name="contact" />
    </Tabs>
  );
};

const TabLayout = () => {
  return (
    <ThemeProvider>
      <ThemedTabs />
    </ThemeProvider>
  );
};

export default TabLayout;
