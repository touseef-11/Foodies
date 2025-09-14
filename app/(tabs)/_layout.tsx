import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useTheme } from "../../context/theme-context";

export default function TabLayout() {
  const { theme, isDark } = useTheme();
  
  // Debug logging
  console.log("TabLayout - isDark:", isDark, "activeTint:", theme.colors.primary, "inactiveTint:", theme.colors.textSecondary);

  const screenOptions = {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: theme.colors.surface,
      borderTopColor: theme.colors.border,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingTop: 8,
      height: 60,
    },
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: theme.colors.textSecondary,
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: "500" as const,
      color: theme.colors.textSecondary,
    },
  };

  return (
    <Tabs key={isDark ? 'dark' : 'light'} screenOptions={screenOptions}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? "home" : "home-outline"} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? "person" : "person-outline"} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}
