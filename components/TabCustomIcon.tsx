import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import Animated from "react-native-reanimated";

export const TabCustomIcon = ({
  uri,
  focused,
}: {
  uri: string;
  focused: boolean;
}) => {
  return (
    <Animated.Image
      style={[styles.box]}
      source={{
        uri,
      }}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    height: 36,
    width: 36,
    borderRadius: 1000,
  },
});
