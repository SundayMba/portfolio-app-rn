# Portfolio App

A small Expo + React Native portfolio app with three main tabs: About, Skills and Contact.

This repository is a personal portfolio starter built with Expo Router and TypeScript. It includes a simple theme system (light/dark) with a header toggle, themed tab bar and theme-aware screens.

## What's included

- Expo Router-based navigation with a tab bar (`app/(tabs)/_layout.tsx`).
- Three tab screens:
  - `About` — profile, bio and links (`app/(tabs)/about.tsx`).
  - `Skills` — scrollable list of skills with progress bars (`app/(tabs)/skill.tsx`).
  - `Contact` — contact card and demo contact form (`app/(tabs)/contact.tsx`).
- Theme support:
  - Theme provider and hook: `hook/ThemeProvider.tsx`.
  - Theme constants: `constant/theme.ts` (light/dark palettes).
  - Header theme toggle: `components/HeaderThemeToggle.tsx`.
  - The tab bar and screens use the active theme colors.
- Vector icons via `@expo/vector-icons`.

## Prerequisites

- Node.js (LTS recommended)
- Expo CLI (optional but helpful): `npm install -g expo-cli`
- Xcode / Android Studio for simulators, or Expo Go on a physical device

## Install

From the project root:

```zsh
npm install
# If you need native Expo dependencies (recommended):
npx expo install
```

Note: The project uses `@react-native-async-storage/async-storage` for persisting theme preference. If you haven't installed it yet run:

```zsh
npx expo install @react-native-async-storage/async-storage
```

(You may have already installed this locally.)

## Run locally

Start the dev server:

```zsh
npx expo start
```

Then press `i` to open the iOS simulator (macOS), `a` to open the Android emulator, or scan the QR code with Expo Go on a device.

## Theme behavior

- The theme system lives in `hook/ThemeProvider.tsx` and exposes `useTheme()` to components.
- `constant/theme.ts` defines `lightTheme` and `darkTheme` color palettes used by screens and the tab bar.
- `HeaderThemeToggle` (rendered in the skills screen header) toggles between light and dark preferences (and visually indicates when you’ve overridden the system preference).
- Screens read `theme.colors.*` for background, text, card, border and primary colors, so switching the theme updates the UI colors across the app.

## Files of interest

- `app/(tabs)/_layout.tsx` — Tab layout and where the tab bar reads theme colors.
- `hook/ThemeProvider.tsx` — Theme provider and `useTheme` hook.
- `constant/theme.ts` — Theme color definitions.
- `components/HeaderThemeToggle.tsx` — Header button that toggles theme.
- `app/(tabs)/about.tsx`, `app/(tabs)/skill.tsx`, `app/(tabs)/contact.tsx` — Screens that use the theme.

## Troubleshooting

- If colors don't change when toggling theme:
  - Ensure the app is wrapped by the `ThemeProvider` (check `app/(tabs)/_layout.tsx`).
  - Confirm `@react-native-async-storage/async-storage` is installed (used for preference persistence).
- If you run into TypeScript import errors, run `npm install` and restart your editor's TS server.

## Next improvements (ideas)

- Extract a small utility to generate theme-aware styles to reduce inline style merging.
- Use the `StatusBar` API to match the theme's preferred status bar style.
- Wire the contact form to a real email endpoint or API.

## License

MIT

---

If you want this content to replace `README.md`, I can overwrite it for you. Otherwise you can review `README_PROJECT.md` and copy sections you like.
