import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const Interests = () => {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"].tint;
  const imageColor = colorScheme === "dark" && { backgroundColor: color };

  return (
    <View style={styles.container}>
      <View style={styles.skillsList}>
        <View style={styles.skillRow}>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Boxing</ThemedText>
            <Image
              source={{
                uri: "https://cdn.iconscout.com/icon/premium/png-256-thumb/boxing-71-163276.png?f=webp&w=256",
              }}
              style={[styles.logo, imageColor]}
            />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Running</ThemedText>
            <Image
              source={{
                uri: "https://cdn.iconscout.com/icon/premium/png-512-thumb/running-1465833-1241831.png?f=webp&w=512",
              }}
              style={[styles.logo, imageColor]}
            />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Badminton</ThemedText>
            <Image
              source={{
                uri: "https://cdn.iconscout.com/icon/free/png-512/free-badminton-2581245-2152507.png?f=webp&w=512",
              }}
              style={[styles.logo, imageColor]}
            />
          </View>
        </View>
        <View style={styles.skillRow}>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Chess</ThemedText>
            <Image
              source={{
                uri: "https://cdn.iconscout.com/icon/premium/png-256-thumb/chess-board-battle-game-sport-58247.png?f=webp&w=256",
              }}
              style={[styles.logo, imageColor]}
            />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Traveling</ThemedText>
            <Ionicons name="bus" size={28} color={color} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Problem Solving</ThemedText>
            <Image
              source={{
                uri: "https://cdn.iconscout.com/icon/premium/png-512-thumb/problem-solving-3757150-3138959.png?f=webp&w=512",
              }}
              style={[styles.logo, imageColor]}
            />
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

  logo: {
    height: 28,
    width: 28,
    borderRadius: 5,
  },

  skillText: {
    fontSize: 14,
    fontWeight: "semibold",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});

export default Interests;
