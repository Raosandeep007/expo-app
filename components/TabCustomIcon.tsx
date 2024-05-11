import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export const TabCustomIcon = ({
  uri,
  focused,
}: {
  uri: string;
  focused: boolean;
}) => {
  return (
    <Animated.Image
      style={[
        styles.box,
        focused ? { borderColor: "#A1CEDC" } : { borderColor: "transparent" },
      ]}
      source={{
        uri,
      }}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    height: 40,
    width: 40,
    borderRadius: 1000,
    borderWidth: 2,
    borderStyle: "solid",
  },
});
