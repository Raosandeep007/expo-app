import React from "react";
import { SectionList, StyleSheet, View } from "react-native";
import Divider from "./Divider";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const DATA = [
  {
    title: "Responsibilities",
    data: [
      "Led the development of engaging user interfaces.",
      "Collaborated effectively with cross-functional teams.",
      "Ensured adherence to high standards of code quality.",
      "Conducted problem-solving and End-to-End Testing.",
      "Stayed updated with the latest industry trends.",
    ],
  },
  {
    title: "Features",
    data: [
      "Developed a secure document storage vault.",
      "Integrated Docusign for seamless document management.",
      "Developed End-to-End bookkeeping products tailored for US-based entities.",
      "Developed tax filing products for US-based entities.",
      "Implemented intuitive drag-and-drop features for file and folder uploads.",
      "Engineered drag-and-drop UI components.",
      "Developed CRM solutions for internal team customer tracking.",
      "Integrated chat products using Stream for seamless communication.",
      "Developed ticketing systems for efficient customer query management.",
      "Integrated banking solutions using Plaid, Mercury, and Brex APIs.",
      "Developed a chat app using React Native and GetStream for on-thego communication.",
    ],
  },
];

const ResponsibilitiesAndFeatures = () => {
  return (
    <View style={styles.responsibilities}>
      <SectionList
        data={[]}
        style={styles.list}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => (
          <ThemedText style={styles.item}>
            {index + 1}. {item}
          </ThemedText>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <ThemedView>
            <Divider label={title} />
          </ThemedView>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  responsibilities: {
    flex: 1,
  },

  list: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
  },

  item: {
    fontSize: 14,
    textAlign: "left",
    lineHeight: 24,
  },
});

export default ResponsibilitiesAndFeatures;
