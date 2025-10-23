// ThemeProvider.tsx
import { darkTheme, lightTheme, type AppTheme } from '@/constant/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';

type ThemePreference = 'system' | 'light' | 'dark';

type ThemeContextValue = {
  theme: AppTheme;
  preference: ThemePreference;
  setPreference: (p: ThemePreference) => void;
  toggle: () => void; // toggles light<->dark (keeps override)
  resetToSystem: () => void; // go back to system follow
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

const STORAGE_KEY = 'APP_THEME_PREFERENCE';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const system = useColorScheme(); // "light" | "dark" | null
  const [preference, setPreferenceState] = useState<ThemePreference>('system');

  // load saved preference once
  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark' || saved === 'system') {
        setPreferenceState(saved);
      }
    })();
  }, []);

  // persist whenever preference changes
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, preference).catch(() => {});
  }, [preference]);

  const setPreference = useCallback((p: ThemePreference) => {
    setPreferenceState(p);
  }, []);

  const resetToSystem = useCallback(() => setPreferenceState('system'), []);

  // compute the active theme
  const activeTheme: AppTheme = useMemo(() => {
    const base = preference === 'system' ? system ?? 'light' : preference;
    return base === 'dark' ? darkTheme : lightTheme;
  }, [preference, system]);

  // simple light<->dark toggle (keeps you off "system")
  const toggle = useCallback(() => {
    setPreferenceState((prev) => {
      const current = prev === 'system' ? system ?? 'light' : prev;
      return current === 'dark' ? 'light' : 'dark';
    });
  }, [system]);

  const value = useMemo(
    () => ({
      theme: activeTheme,
      preference,
      setPreference,
      toggle,
      resetToSystem,
    }),
    [activeTheme, preference, setPreference, toggle, resetToSystem]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Small helper hook
export const useTheme = () => {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
};
