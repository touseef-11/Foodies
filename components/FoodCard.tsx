import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useTheme } from "../context/theme-context";
import { FoodItem } from "../types";

interface FoodCardProps extends Omit<FoodItem, 'id'> {
  id: string;
  onPress?: () => void;
}

export default function FoodCard({
  id,
  name,
  price,
  rating,
  image,
  category,
  onPress,
}: FoodCardProps) {
  const { theme, isDark } = useTheme();
  const styles = createStyles(theme);
  
  // Debug logging
  console.log("FoodCard - isDark:", isDark, "text color:", theme.colors.text, "name:", name);
  
  // Force re-render when theme changes
  const themeKey = isDark ? 'dark' : 'light';

  return (
    <TouchableOpacity
      key={themeKey}
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        <Text style={styles.imageEmoji}>{image}</Text>
      </View>
      <View style={styles.info}>
        <Text style={[styles.name, { color: theme.colors.text }]}>
          {name}
        </Text>
        <Text style={[styles.category, { color: theme.colors.textSecondary }]}>
          {category}
        </Text>
        <View style={styles.footer}>
          <Text style={[styles.price, { color: theme.colors.primary }]}>
            {price}
          </Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color={theme.colors.accent} />
            <Text style={[styles.rating, { color: theme.colors.text }]}>
              {rating}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    marginRight: theme.spacing.md,
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    ...theme.shadows.medium,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  imageEmoji: {
    fontSize: 48,
  },
  info: {
    flex: 1,
  },
  name: {
    ...theme.typography.button,
    marginBottom: 4,
  },
  category: {
    ...theme.typography.caption,
    marginBottom: theme.spacing.sm,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    ...theme.typography.button,
    fontWeight: "600",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    ...theme.typography.caption,
    marginLeft: 4,
  },
});
