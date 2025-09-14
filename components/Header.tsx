import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../context/theme-context";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
}

export default function Header({
  title,
  showBackButton = false,
  onBackPress,
  rightComponent,
}: HeaderProps) {
  const { theme, toggleTheme, isDark } = useTheme();
  const styles = createStyles(theme);
  
  // Debug logging
  console.log("Header - isDark:", isDark, "background:", theme.colors.background, "surface:", theme.colors.surface);

  return (
    <SafeAreaView edges={["top"]} style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.surface}
      />
      <View style={styles.content}>
        <View style={styles.leftSection}>
          {showBackButton && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={onBackPress}
              activeOpacity={0.7}
            >
              <Ionicons
                name="chevron-back"
                size={24}
                color={theme.colors.text}
              />
            </TouchableOpacity>
          )}
          <Text style={[styles.title, { color: theme.colors.text }]}>
            {title}
          </Text>
        </View>

         <View style={styles.rightSection}>
           {rightComponent || (
             <TouchableOpacity
               style={[styles.themeToggle, { backgroundColor: theme.colors.primary }]}
               onPress={toggleTheme}
               activeOpacity={0.7}
             >
               <Ionicons
                 name={isDark ? "sunny" : "moon"}
                 size={24}
                 color={theme.colors.surface}
               />
             </TouchableOpacity>
           )}
         </View>
      </View>
    </SafeAreaView>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
  container: {
    ...theme.shadows.small,
    zIndex: 1000,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    minHeight: 56,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  backButton: {
    marginRight: theme.spacing.sm,
    padding: theme.spacing.xs,
  },
  title: {
    ...theme.typography.heading2,
    flex: 1,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  themeToggle: {
    padding: theme.spacing.sm,
    borderRadius: theme.radius.lg,
    minWidth: 44,
    minHeight: 44,
    justifyContent: "center",
    alignItems: "center",
  },
});
