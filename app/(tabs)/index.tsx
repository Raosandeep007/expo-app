import {
  Image,
  StyleSheet,
  Platform,
  View,
  SafeAreaViewBase,
  Text,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Animation } from "@/components/Animation";
import TabTwoScreen from "./explore";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

export default function HomeScreen() {
  const heartScale = useSharedValue(1);

  const startAnimation = () => {
    heartScale.value = withTiming(1.2, {
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    });
  };

  useEffect(() => {
    heartScale.value = withRepeat(withSpring(1), -1, true);
  });

  const animatedHeartStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: heartScale.value }],
      fontSize: 40,
    };
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          style={styles.reactLogo}
          src="https://media.licdn.com/dms/image/D5616AQG1lYaY6ImVTw/profile-displaybackgroundimage-shrink_350_1400/0/1710349016967?e=1720656000&v=beta&t=lKSVai1L7v1aO30pog2jqOOd7zHkM29uA7WtU4fKMEw"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome Sandeep!</ThemedText>
        <HelloWave />
      </ThemedView>
      <View style={styles.step}>
        <Animation uri="https://ca.slack-edge.com/T01R5TMEAV6-U03DKHKMRTR-c8b49ca176f9-512" />
        <Animated.Text style={[animatedHeartStyle]}>🧑‍💻</Animated.Text>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "40%",
    width: "100%",
    bottom: 0,
    left: -2,
    position: "absolute",
  },
  step: {
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
  },
});
