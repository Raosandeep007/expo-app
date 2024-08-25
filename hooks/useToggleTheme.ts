import { Appearance, useColorScheme } from "react-native";
export { useColorScheme } from "./useColorScheme";

export function useToggleTheme() {
  const colorScheme = useColorScheme();

  const toggle = () => {
    Appearance.setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  return { colorScheme, toggle };
}
