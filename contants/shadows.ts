// src/theme/shadows.ts

export const shadows = {
    // Very subtle → good for headers, inputs
    sm: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    // Medium → good for cards
    md: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    // Large → for modals, floating buttons
    lg: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 6,
    },
    // Extra-large → used for big popups or bottom sheets
    xl: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      elevation: 10,
    },
  };
  