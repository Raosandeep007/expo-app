import { useColorScheme } from "@/hooks/useColorScheme";
import { useToggleTheme } from "@/hooks/useToggleTheme";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const ThemeSwitcher = () => {
  const colorScheme = useColorScheme();
  const { toggle } = useToggleTheme();

  return (
    <View
      style={[
        styles.theme,
        StyleSheet.absoluteFillObject,
        { top: 50, right: 20, zIndex: 1000 },
      ]}
    >
      <TouchableOpacity onPress={toggle} style={[styles.button]}>
        <Image
          source={{
            uri:
              colorScheme === "dark"
                ? "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                : "https://images.unsplash.com/photo-1592029383200-73fb26a5b925?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={[
            StyleSheet.absoluteFillObject,
            {
              transform: [{ scale: colorScheme === "dark" ? 1 : 1.36 }],
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  theme: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 50,
    width: "100%",
    paddingHorizontal: 20,
  },

  button: {
    borderRadius: 50,
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default ThemeSwitcher;
