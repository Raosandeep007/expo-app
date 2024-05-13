import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].icon,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        tabBarShowLabel: false,
        headerTitle: "",
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
          shadowColor: Colors[colorScheme ?? "light"].text,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 5,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={28}
              style={{
                transform: [{ scale: focused ? 1.5 : 1 }],
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="experience"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? "work" : "work-outline"}
              size={28}
              color={color}
              style={{ transform: [{ scale: focused ? 1.5 : 1 }] }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
