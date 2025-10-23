import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// restored to original plain Text and static colors
import HeaderThemeToggle from '@/components/HeaderThemeToggle';
import { useTheme } from '@/hook/ThemeProvider';

const DUMMY_SKILLS = [
  { name: 'React', level: 90 },
  { name: 'React Native', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 70 },
  { name: 'GraphQL', level: 60 },
  { name: 'Design Systems', level: 75 },
  { name: 'Animation', level: 65 },
  { name: 'Accessibility', level: 70 },
];

const SkillRow = ({ name, level }: { name: string; level: number }) => {
  const { theme } = useTheme();
  return (
    <View style={styles.skillRow}>
      <View style={styles.skillHeader}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[styles.skillName, { color: theme.colors.text }]}>
            {name}
          </Text>
        </View>
        <Text style={[styles.skillLevel, { color: theme.colors.muted }]}>
          {level}%
        </Text>
      </View>
      <View
        style={[
          styles.progressTrack,
          {
            backgroundColor: theme.colors.card,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <View
          style={[
            styles.progressFill,
            { width: `${level}%`, backgroundColor: theme.colors.primary },
          ]}
        />
      </View>
    </View>
  );
};

const Skills = () => {
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
      <ScrollView>
        <Text style={[styles.title, { color: theme.colors.text }]}>Skills</Text>
        <Text style={[styles.subtitle, { color: theme.colors.muted }]}>
          Some of my technical strengths and familiarity.
        </Text>

        {DUMMY_SKILLS.map((s) => (
          <SkillRow key={s.name} name={s.name} level={s.level} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Skills;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    flex: 1,
  },
  toggleContainer: {
    width: '100%',
  },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 6 },
  subtitle: { marginBottom: 18 },
  skillRow: { marginBottom: 14 },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  skillName: { fontSize: 16, fontWeight: '600' },
  skillLevel: {},
  progressTrack: {
    height: 10,
    backgroundColor: '#e2e8f0',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: '#06b6d4' },
});
