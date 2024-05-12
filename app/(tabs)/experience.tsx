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

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: color }]}>
      <ThemedView style={styles.profileContainer}>
        <ThemedText style={styles.name} type="title">
          Software Engineer, Inkle
        </ThemedText>
        <ThemedText type="subtitle" style={styles.subtitle}>
          May 2022 - Present
        </ThemedText>
      </ThemedView>
      <ResponsibilitiesAndFeatures />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },

  profileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    textTransform: "uppercase",
  },

  subtitle: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});

export default Experience;
