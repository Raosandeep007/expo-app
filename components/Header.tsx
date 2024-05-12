import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useToggleTheme } from "@/hooks/useToggleTheme";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";

const Header = () => {
  const colorScheme = useColorScheme();
  const { toggle } = useToggleTheme();
  const color = Colors[colorScheme ?? "light"].tint;
  const isWeb = Platform.OS === "web";

  if (isWeb) {
    return (
      <View
        style={{
          padding: 20,
          backgroundColor: Colors[colorScheme ?? "light"].background,
        }}
      ></View>
    );
  }

  return (
    <TouchableOpacity
      onPress={toggle}
      style={[
        styles.theme,
        {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
      ]}
    >
      <StatusBar hidden />
      {colorScheme === "light" ? (
        <Feather name="moon" size={24} color={color} />
      ) : (
        <Feather name="sun" size={24} color={color} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  theme: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    textAlign: "right",
    padding: 15,
    paddingHorizontal: 53,
  },
});

export default Header;
