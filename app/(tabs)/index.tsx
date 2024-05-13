import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Interests from "@/components/Interests";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import Profile from "@/components/Profile";
import Skill from "@/components/Skill";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? "light"].background;

  return (
    <Animated.ScrollView
      style={[styles.scrollContainer, { backgroundColor: backgroundColor }]}
    >
      <ThemeSwitcher />
      <SafeAreaView style={styles.container}>
        <ThemedView style={styles.profileContainer}>
          <Profile />

          <View>
            <ThemedText style={styles.name} type="title">
              Sandeep yadav
            </ThemedText>
            <ThemedText type="subtitle" style={styles.subtitle}>
              software engineer
            </ThemedText>
          </View>
        </ThemedView>
        <Contact />
        <ProfessionalSummary />
        <Divider label="Skill" />
        <Skill />
        <Divider label="Interests" />
        <Interests />
      </SafeAreaView>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  profileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
  },

  image: {
    height: 150,
    width: 150,
    borderRadius: 1000,
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
