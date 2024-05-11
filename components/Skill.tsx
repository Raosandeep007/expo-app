import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";

const Skill = () => {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.subtitle}>
        SKILL
      </ThemedText>

      <View style={styles.skillsList}>
        <View style={styles.skillRow}>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>HTML</ThemedText>
            <Ionicons name="logo-html5" size={28} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>CSS</ThemedText>
            <Ionicons name="logo-css3" size={28} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Javascript</ThemedText>
            <Ionicons name="logo-javascript" size={28} />
          </View>
        </View>
        <View style={styles.skillRow}>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>TypeScript</ThemedText>
            <Image
              source={{
                uri: "https://cdn.iconscout.com/icon/free/png-256/free-typescript-2336947-1982828.png?f=webp&w=256",
              }}
              style={styles.logo}
            />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>React.js</ThemedText>
            <Ionicons name="logo-react" size={28} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Redux</ThemedText>
            <Image
              source={{
                uri: "https://cdn.iconscout.com/icon/free/png-512/free-redux-3628430-3032265.png?f=webp&w=512",
              }}
              style={styles.logo}
            />
          </View>
        </View>

        <View style={styles.skillRow}>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Next.js</ThemedText>
            <Ionicons name="logo-nodejs" size={28} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>React-Native</ThemedText>
            <Image
              source={{
                uri: "https://cdn.iconscout.com/icon/premium/png-512-thumb/atom-11276664-9339327.png?f=webp&w=512",
              }}
              style={styles.logo}
            />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Expo</ThemedText>
            <Image
              source={{
                uri: "https://styles.redditmedia.com/t5_r5s6c/styles/communityIcon_s4jytydsjrx11.jpg?format=pjpg&s=b837558d39c49984b5ff217cf0008a0331e1643a",
              }}
              style={styles.logo}
            />
          </View>
        </View>
        <View style={styles.skillRow}>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Testing</ThemedText>
            <Image
              source={{
                uri: "https://cdn.iconscout.com/icon/free/png-512/free-jest-3628272-3031965.png?f=webp&w=512",
              }}
              style={styles.logo}
            />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Node.js</ThemedText>
            <Ionicons name="logo-nodejs" size={28} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Express.js</ThemedText>
            <Image
              source={{
                uri: "https://cdn.iconscout.com/icon/free/png-512/free-express-8-1175029.png?f=webp&w=512",
              }}
              style={styles.logo}
            />
          </View>
        </View>
      </View>
      <View style={styles.skill}>
        <ThemedText style={styles.skillText}>MongoDB</ThemedText>
        <Image
          source={{
            uri: "https://cdn.iconscout.com/icon/premium/png-512-thumb/mongodb-2749309-2284699.png?f=webp&w=512",
          }}
          style={styles.logo}
        />
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
    marginTop: 20,
    gap: 15,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
  },

  skillRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },

  skillsList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
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
  },

  skillText: {
    fontSize: 14,
    fontWeight: "semibold",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});

export default Skill;
