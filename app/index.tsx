import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useTheme } from "../context/theme-context";

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const handleGetStarted = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.accent]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.content}>
          {/* Logo/Icon Area */}
          <View style={styles.logoContainer}>
            <View style={[styles.logoCircle, { backgroundColor: theme.colors.surface }]}>
              <Text style={[styles.logoText, { color: theme.colors.primary }]}>
                🍽️
              </Text>
            </View>
          </View>

          {/* Welcome Text */}
          <View style={styles.textContainer}>
            <Text style={[styles.title, { color: theme.colors.surface }]}>
              Welcome to Foodies
            </Text>
            <Text style={[styles.subtitle, { color: theme.colors.surface }]}>
              Discover amazing food and restaurants near you
            </Text>
          </View>

          {/* Get Started Button */}
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.colors.surface }]}
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <Text style={[styles.buttonText, { color: theme.colors.primary }]}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing.xl,
  },
  logoContainer: {
    marginBottom: theme.spacing.xxl,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    ...theme.shadows.large,
  },
  logoText: {
    fontSize: 48,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: theme.spacing.xxl,
  },
  title: {
    ...theme.typography.heading1,
    textAlign: "center",
    marginBottom: theme.spacing.md,
  },
  subtitle: {
    ...theme.typography.body,
    textAlign: "center",
    opacity: 0.9,
  },
  button: {
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.lg,
    ...theme.shadows.medium,
  },
  buttonText: {
    ...theme.typography.button,
    fontWeight: "600",
  },
});
