import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";

const Divider = ({ label }: { label: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
      <ThemedText type="subtitle" style={styles.subtitle}>
        {label}
      </ThemedText>
      <View style={styles.divider}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 15,
    overflow: "hidden",
    paddingTop: 20,
    paddingBottom: 20,
  },

  divider: {
    borderBottomWidth: 2,
    borderBottomColor: "#E5E5E5",
    width: "100%",
  },

  subtitle: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});

export default Divider;
