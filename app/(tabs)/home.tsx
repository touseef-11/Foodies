import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CategoryItem from "../../components/CategoryItem";
import FoodCard from "../../components/FoodCard";
import Header from "../../components/Header";
import { useTheme } from "../../context/theme-context";
import { Category, FoodItem } from "../../types";

const { width } = Dimensions.get("window");

// Mock data for food items
const featuredFoods: FoodItem[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    price: "$12.99",
    rating: 4.8,
    image: "🍕",
    category: "Italian",
  },
  {
    id: "2",
    name: "Chicken Burger",
    price: "$9.99",
    rating: 4.6,
    image: "🍔",
    category: "American",
  },
  {
    id: "3",
    name: "Sushi Roll",
    price: "$15.99",
    rating: 4.9,
    image: "🍣",
    category: "Japanese",
  },
  {
    id: "4",
    name: "Caesar Salad",
    price: "$8.99",
    rating: 4.4,
    image: "🥗",
    category: "Healthy",
  },
];

const categories: Category[] = [
  { id: "1", name: "Pizza", icon: "🍕" },
  { id: "2", name: "Burger", icon: "🍔" },
  { id: "3", name: "Sushi", icon: "🍣" },
  { id: "4", name: "Salad", icon: "🥗" },
  { id: "5", name: "Pasta", icon: "🍝" },
  { id: "6", name: "Dessert", icon: "🍰" },
];

export default function HomeScreen() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const styles = createStyles(theme);
  
  // Debug logging
  console.log("HomeScreen - isDark:", isDark, "background:", theme.colors.background, "text:", theme.colors.text);
  
  // Force re-render when theme changes
  const themeKey = isDark ? 'dark' : 'light';

  const renderFoodItem = ({ item }: { item: FoodItem }) => (
    <FoodCard
      id={item.id}
      name={item.name}
      price={item.price}
      rating={item.rating}
      image={item.image}
      category={item.category}
      onPress={() => {
        // Handle food item press
        console.log("Food item pressed:", item.name);
      }}
    />
  );

  const renderCategory = ({ item }: { item: Category }) => (
    <CategoryItem
      id={item.id}
      name={item.name}
      icon={item.icon}
      onPress={() => {
        // Handle category press
        console.log("Category pressed:", item.name);
      }}
    />
  );

  return (
    <View key={themeKey} style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Header
        title={`Good ${new Date().getHours() < 12 ? "Morning" : "Evening"}, John`}
      />
      
      {/* Theme Debug Info */}
      <View style={[styles.debugInfo, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.debugText, { color: theme.colors.text }]}>
          Theme: {isDark ? "Dark" : "Light"} | BG: {theme.colors.background}
        </Text>
      </View>
      
      {/* Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: theme.colors.surface }]}>
        <View style={[styles.searchInputContainer, { backgroundColor: theme.colors.background }]}>
          <Ionicons name="search-outline" size={20} color={theme.colors.textSecondary} />
          <TextInput
            style={[styles.searchInput, { color: theme.colors.text }]}
            placeholder="Search for food..."
            placeholderTextColor={theme.colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Categories
          </Text>
          <FlatList
            key={isDark ? 'dark-categories' : 'light-categories'}
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Featured Foods */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
              Featured Foods
            </Text>
            <TouchableOpacity>
              <Text style={[styles.seeAll, { color: theme.colors.primary }]}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            key={isDark ? 'dark-foods' : 'light-foods'}
            data={featuredFoods}
            renderItem={renderFoodItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={styles.foodsList}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    ...theme.shadows.small,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.lg,
    ...theme.shadows.small,
  },
  searchInput: {
    flex: 1,
    marginLeft: theme.spacing.sm,
    ...theme.typography.body,
  },
  section: {
    paddingHorizontal: theme.spacing.xl,
    marginTop: theme.spacing.lg,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    ...theme.typography.heading2,
  },
  seeAll: {
    ...theme.typography.button,
    fontSize: 14,
  },
  categoriesList: {
    marginTop: theme.spacing.sm,
    // paddingRight: theme.spacing.xl,
  },
  foodsList: {
    // paddingRight: theme.spacing.md,
  },
  debugInfo: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    marginHorizontal: theme.spacing.md,
    marginTop: theme.spacing.sm,
    borderRadius: theme.radius.md,
    ...theme.shadows.small,
  },
  debugText: {
    ...theme.typography.caption,
    textAlign: "center",
  },
});
