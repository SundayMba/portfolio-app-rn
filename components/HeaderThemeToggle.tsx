import { useTheme } from '@/hook/ThemeProvider';
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = { size?: number };

const HeaderThemeToggle: React.FC<Props> = ({ size = 22 }) => {
  const { theme, toggle, preference } = useTheme();
  const isDark = theme.name === 'dark';

  // Icon picks (sun for light, moon for dark)
  const icon = useMemo(
    () => (isDark ? 'sunny-outline' : 'moon-outline'),
    [isDark]
  );

  return (
    <Pressable
      onPress={toggle}
      accessibilityRole="button"
      accessibilityLabel="Toggle theme"
      hitSlop={10}
      style={({ pressed }) => [
        styles.btn,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
          opacity: pressed ? 0.8 : 1,
        },
      ]}
    >
      <Ionicons name={icon as any} size={size} color={theme.colors.text} />
      {/* tiny dot when overriding system (visual hint) */}
      {preference !== 'system' && (
        <View
          style={[
            styles.dot,
            {
              backgroundColor: theme.colors.primary,
              borderColor: theme.colors.card,
            },
          ]}
        />
      )}
    </Pressable>
  );
};

export default HeaderThemeToggle;

const styles = StyleSheet.create({
  btn: {
    height: 36,
    minWidth: 36,
    paddingHorizontal: 10,
    borderRadius: 18,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 4,
    borderWidth: 1,
  },
});
