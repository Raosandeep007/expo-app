import Contact from "@/components/Contact";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import Profile from "@/components/Profile";
import Skill from "@/components/Skill";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView style={styles.container2}>
        <ThemedView style={styles.profileContainer}>
          <Profile />
          <View>
            <ThemedText style={styles.name} type="title">
              SANDEEP YADAV
            </ThemedText>
            <ThemedText type="subtitle" style={styles.subtitle}>
              SOFTWARE ENGINEER
            </ThemedText>
          </View>
        </ThemedView>
        <Contact />
        <ProfessionalSummary />
        <Skill />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  container2: {
    flex: 1,
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "inherit",
    gap: 10,
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
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});
