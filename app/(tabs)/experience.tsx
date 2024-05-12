import ResponsibilitiesAndFeatures from "@/components/ResponsibilitiesAndFeatures";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Experience = () => {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"].background;

  return <ResponsibilitiesAndFeatures />;
};

export default Experience;
