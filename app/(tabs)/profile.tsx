import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Header from "../../components/Header";
import { useTheme } from "../../context/theme-context";
import { ProfileMenuItem } from "../../types";

const profileMenuItems: ProfileMenuItem[] = [
  {
    id: "1",
    title: "Edit Profile",
    icon: "person-outline",
    action: "editProfile",
  },
  {
    id: "2",
    title: "Order History",
    icon: "receipt-outline",
    action: "orderHistory",
  },
  {
    id: "3",
    title: "Favorites",
    icon: "heart-outline",
    action: "favorites",
  },
  {
    id: "4",
    title: "Payment Methods",
    icon: "card-outline",
    action: "payment",
  },
  {
    id: "5",
    title: "Notifications",
    icon: "notifications-outline",
    action: "notifications",
  },
  {
    id: "6",
    title: "Help & Support",
    icon: "help-circle-outline",
    action: "help",
  },
  {
    id: "7",
    title: "About",
    icon: "information-circle-outline",
    action: "about",
  },
];

export default function ProfileScreen() {
  const { theme, toggleTheme, isDark } = useTheme();
  const styles = createStyles(theme);
  
  // Force re-render when theme changes
  const themeKey = isDark ? 'dark' : 'light';

  const handleMenuAction = (action: string) => {
    switch (action) {
      case "editProfile":
        Alert.alert("Edit Profile", "Profile editing feature coming soon!");
        break;
      case "orderHistory":
        Alert.alert("Order History", "Order history feature coming soon!");
        break;
      case "favorites":
        Alert.alert("Favorites", "Favorites feature coming soon!");
        break;
      case "payment":
        Alert.alert("Payment Methods", "Payment methods feature coming soon!");
        break;
      case "notifications":
        Alert.alert("Notifications", "Notifications settings coming soon!");
        break;
      case "help":
        Alert.alert("Help & Support", "Help & support feature coming soon!");
        break;
      case "about":
        Alert.alert("About", "Foodies App v1.0.0\nBuilt with React Native & Expo");
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => router.replace("/"),
        },
      ]
    );
  };

  return (
    <View key={themeKey} style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Header title="Profile" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Info */}
        <View style={[styles.profileInfo, { backgroundColor: theme.colors.surface }]}>
          <View style={[styles.avatar, { backgroundColor: theme.colors.primary }]}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={[styles.userName, { color: theme.colors.text }]}>
              John Doe
            </Text>
            <Text style={[styles.userEmail, { color: theme.colors.textSecondary }]}>
              john.doe@example.com
            </Text>
          </View>
        </View>

        {/* Theme Toggle */}
        <View style={[styles.themeSection, { backgroundColor: theme.colors.surface }]}>
          <View style={styles.themeRow}>
            <View style={styles.themeInfo}>
              <Ionicons
                name={isDark ? "moon" : "sunny"}
                size={24}
                color={theme.colors.text}
              />
              <Text style={[styles.themeText, { color: theme.colors.text }]}>
                {isDark ? "Dark Mode" : "Light Mode"}
              </Text>
            </View>
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              trackColor={{
                false: theme.colors.border,
                true: theme.colors.primary,
              }}
              thumbColor={isDark ? theme.colors.surface : theme.colors.primary}
            />
          </View>
          <Text style={[styles.debugText, { color: theme.colors.textSecondary }]}>
            Current theme: {isDark ? "Dark" : "Light"} | Background: {theme.colors.background}
          </Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {profileMenuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.menuItem, { backgroundColor: theme.colors.surface }]}
              onPress={() => handleMenuAction(item.action)}
            >
              <View style={styles.menuItemLeft}>
                <Ionicons
                  name={item.icon as any}
                  size={24}
                  color={theme.colors.textSecondary}
                />
                <Text style={[styles.menuItemText, { color: theme.colors.text }]}>
                  {item.title}
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={theme.colors.textSecondary}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <View style={styles.logoutSection}>
          <TouchableOpacity
            style={[styles.logoutButton, { backgroundColor: theme.colors.error }]}
            onPress={handleLogout}
          >
            <Ionicons name="log-out-outline" size={24} color={theme.colors.surface} />
            <Text style={[styles.logoutText, { color: theme.colors.surface }]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>

        {/* App Version */}
        <View style={styles.versionSection}>
          <Text style={[styles.versionText, { color: theme.colors.textSecondary }]}>
            Foodies App v1.0.0
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    marginHorizontal: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderRadius: theme.radius.lg,
    ...theme.shadows.small,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
  },
  avatarText: {
    ...theme.typography.heading1,
    color: theme.colors.surface,
    fontSize: 32,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    ...theme.typography.heading2,
    marginBottom: 4,
  },
  userEmail: {
    ...theme.typography.body,
    fontSize: 14,
  },
  themeSection: {
    marginHorizontal: theme.spacing.md,
    marginTop: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.lg,
    ...theme.shadows.small,
  },
  themeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  themeInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  themeText: {
    ...theme.typography.body,
    marginLeft: theme.spacing.sm,
  },
  menuSection: {
    marginHorizontal: theme.spacing.md,
    marginTop: theme.spacing.lg,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    borderRadius: theme.radius.lg,
    ...theme.shadows.small,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    ...theme.typography.body,
    marginLeft: theme.spacing.md,
  },
  logoutSection: {
    marginHorizontal: theme.spacing.xl,
    marginTop: theme.spacing.lg,
  },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.lg,
    ...theme.shadows.medium,
  },
  logoutText: {
    ...theme.typography.button,
    marginLeft: theme.spacing.sm,
    fontWeight: "600",
  },
  versionSection: {
    alignItems: "center",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
  },
  versionText: {
    ...theme.typography.caption,
  },
  debugText: {
    ...theme.typography.caption,
    marginTop: theme.spacing.sm,
    textAlign: "center",
  },
});
