import { Appearance, ColorSchemeName, useColorScheme } from "react-native";

export { useColorScheme } from "react-native";

// Add toggle to switch between light and dark mode
export function useToggleTheme() {
  const colorScheme = useColorScheme();
  const setScheme = (scheme: ColorSchemeName) => {
    Appearance.setColorScheme(scheme);
  };
  return { colorScheme, setScheme };
}
