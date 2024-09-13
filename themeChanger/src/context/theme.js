import { createContext, useContext } from "react"; // Importing necessary functions from React for context creation and usage.

export const ThemeContext = createContext({
  themeMode: "light", // Default theme mode is set to 'light'.
  darkTheme: () => {}, // Placeholder function for switching to dark theme.
  lightTheme: () => {}, // Placeholder function for switching to light theme.
});

export const ThemeProvider = ThemeContext.Provider; // Exporting the provider for wrapping components to supply the theme context.

export default function useTheme() {
  return useContext(ThemeContext); // Custom hook to access the theme context in components.
}
