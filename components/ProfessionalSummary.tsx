import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";

const ProfessionalSummary = () => {
  return (
    <View>
      <ThemedText style={styles.summary}>
        Experienced Frontend Developer at inkle.io with over 2 years of
        experience. Proficient in JavaScript (ES6), TypeScript, React js, React
        Native, Redux js, Tailwind CSS, CSS, and HTML. Led interface development
        with high code quality and cross-functional collaboration. Strong
        problem-solving skills and experience in End-to-End Testing. Passionate
        about industry trends and technology exploration.
      </ThemedText>
    </View>
  );
};

export default ProfessionalSummary;

const styles = StyleSheet.create({
  summary: {
    fontSize: 16,
    marginTop: 20,
    textAlign: "justify",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});

// HTML | CSS | JavaScript | TypeScript | React js | Redux | Next js | React-Native | Expo | Testing | Node.js | Express.js | MongoDB |
// Tailwind CSS
