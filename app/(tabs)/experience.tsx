import Divider from "@/components/Divider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import {
  SectionList,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from "react-native";
import React from "react";

const Experience = () => {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"].background;

  const DATA = [
    {
      title: (
        <ThemedView style={styles.profileContainer}>
          <ThemedText style={styles.name} type="title">
            Inkle (May 2022 - Present)
          </ThemedText>
        </ThemedView>
      ),
      data: [],
    },
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

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <ThemeSwitcher />
      <SectionList
        contentContainerStyle={{
          backgroundColor: color,
          paddingTop: StatusBar.currentHeight || 90,
        }}
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
  container: {
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
    textAlign: "auto",
    lineHeight: 24,
    paddingVertical: 5,
  },

  profileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Experience;
