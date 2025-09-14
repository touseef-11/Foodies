import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useTheme } from "../context/theme-context";
import { Category } from "../types";

interface CategoryItemProps extends Category {
  onPress?: () => void;
}

export default function CategoryItem({
  id,
  name,
  icon,
  onPress,
}: CategoryItemProps) {
  const { theme, isDark } = useTheme();
  const styles = createStyles(theme);
  
  // Debug logging
  console.log("CategoryItem - isDark:", isDark, "text color:", theme.colors.text, "name:", name);
  
  // Force re-render when theme changes
  const themeKey = isDark ? 'dark' : 'light';

  return (
    <TouchableOpacity
      key={themeKey}
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.iconContainer, { backgroundColor: theme.colors.surface }]}>
        <Text style={styles.iconEmoji}>{icon}</Text>
      </View>
      <Text style={[styles.name, { color: theme.colors.text }]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: theme.spacing.lg,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
    ...theme.shadows.small,
  },
  iconEmoji: {
    fontSize: 24,
  },
  name: {
    ...theme.typography.caption,
    textAlign: "center",
  },
});
