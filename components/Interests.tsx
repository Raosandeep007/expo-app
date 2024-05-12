import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  AntDesign,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";

const Interests = () => {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"].tint;

  return (
    <View style={styles.container}>
      <View style={styles.skillsList}>
        <View style={styles.skillRow}>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Boxing</ThemedText>
            <MaterialCommunityIcons
              name="boxing-glove"
              size={28}
              color={color}
            />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Running</ThemedText>
            <FontAwesome6 name="person-running" size={28} color={color} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Badminton</ThemedText>
            <MaterialCommunityIcons name="badminton" size={28} color={color} />
          </View>
        </View>
        <View style={styles.skillRow}>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Chess</ThemedText>
            <FontAwesome5 name="chess-board" size={28} color={color} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Traveling</ThemedText>
            <Ionicons name="bus" size={28} color={color} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Problem Solving</ThemedText>
            <AntDesign name="solution1" size={28} color={color} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 15,
  },

  skillsList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
  },

  skillRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },

  skill: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  skillText: {
    fontSize: 14,
    fontWeight: "semibold",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});

export default Interests;
