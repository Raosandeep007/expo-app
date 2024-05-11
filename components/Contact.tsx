import {
  Image,
  StyleSheet,
  Platform,
  View,
  SafeAreaViewBase,
  Text,
  Linking,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TabCustomIcon } from "@/components/TabCustomIcon";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExternalLink } from "@/components/ExternalLink";
import { Ionicons } from "@expo/vector-icons";

const Contact = () => {
  const call = () => {
    Linking.openURL(`tel:9166250560`);
  };

  const mail = () => {
    Linking.openURL(`mailto:yadavsandeep775@gmail.com?body=Hi Sandeep, 
        I hope you are doing well.
        I am reaching out to you to discuss a potential opportunity.
        Please let me know your availability for a call.
        Thanks!
        `);
  };

  return (
    <View style={styles.contact}>
      <ExternalLink href="https://github.com/Raosandeep007">
        <Ionicons name="logo-github" size={28} />
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/sandeep-yadav-828779149/">
        <Ionicons name="logo-linkedin" size={28} />
      </ExternalLink>
      <ExternalLink href="https://raosandeep007.netlify.app/">
        <Ionicons name="globe" size={28} />
      </ExternalLink>
      <ExternalLink href="">
        <Ionicons name="call" size={28} onPress={call} />
      </ExternalLink>
      <ExternalLink href="">
        <Ionicons name="mail" size={28} onPress={mail} />
      </ExternalLink>
    </View>
  );
};
export default Contact;

const styles = StyleSheet.create({
  contact: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
    width: "100%",
  },
});
