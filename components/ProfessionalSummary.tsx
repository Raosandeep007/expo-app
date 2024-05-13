import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";

const ProfessionalSummary = () => {
  return (
    <View>
      <ThemedText style={styles.summary}>
        Experienced Frontend Developer at inkle.io with over 2 years of
        experience. Led interface development with high code quality and
        cross-functional collaboration. Strong problem-solving skills and
        experience in End-to-End Testing. Passionate about industry trends and
        technology exploration.
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  summary: {
    fontSize: 16,
    marginTop: 20,
    textAlign: "justify",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});

export default ProfessionalSummary;
