export interface FoodItem {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface ProfileMenuItem {
  id: string;
  title: string;
  icon: string;
  action: string;
}

export interface Theme {
  colors: {
    background: string;
    surface: string;
    border: string;
    text: string;
    textSecondary: string;
    primary: string;
    primaryLight: string;
    accent: string;
    success: string;
    warning: string;
    error: string;
    foodHighlight: string;
    drinkHighlight: string;
    overlay: string;
  };
  shadows: {
    small: any;
    medium: any;
    large: any;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    heading1: any;
    heading2: any;
    button: any;
    body: any;
    caption: any;
  };
  gradients: any;
}
