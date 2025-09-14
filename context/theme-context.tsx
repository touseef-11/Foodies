import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../contants";
  type ThemeType = typeof lightTheme | typeof darkTheme;
  interface ThemeContextProps {
    theme: ThemeType;
    toggleTheme: () => void;
    isDark: boolean;
  }
  
  const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
  
  export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const systemColorScheme = useColorScheme();
    const [isDark, setIsDark] = useState<boolean>(false);
    const [isInitialized, setIsInitialized] = useState<boolean>(false);
  
    useEffect(() => {
      // Initialize theme based on system preference
      if (systemColorScheme) {
        setIsDark(systemColorScheme === "dark");
      }
      setIsInitialized(true);
    }, [systemColorScheme]);
    
    const toggleTheme = useCallback(() => {
      console.log("Theme toggled from", isDark ? "dark" : "light", "to", !isDark ? "dark" : "light");
      setIsDark((prev) => !prev);
    }, [isDark]);
    
    // Force re-render when theme changes
    const themeKey = isDark ? 'dark' : 'light';
  
    const currentTheme = isDark ? darkTheme : lightTheme;
    console.log("ThemeProvider - isDark:", isDark, "theme colors:", currentTheme.colors.background, currentTheme.colors.surface);
    
    // Don't render until theme is initialized
    if (!isInitialized) {
      return null;
    }
    
    return (
      <ThemeContext.Provider
        key={themeKey}
        value={{
          theme: currentTheme,
          toggleTheme,
          isDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
    return ctx;
  };
  