// import React from "react";
// import { Button, View, StyleSheet } from "react-native";
// import Animated, {
//   useSharedValue,
//   withSpring,
//   useAnimatedStyle,
// } from "react-native-reanimated";

// export const Animation = () => {
//   const translateX = useSharedValue<number>(0);

//   const handlePress = () => {
//     translateX.value += 50;
//   };

//   const handlePressBack = () => {
//     translateX.value -= 50;
//   };

//   const animatedStyles = useAnimatedStyle(() => ({
//     transform: [{ translateX: withSpring(translateX.value * 2) }],
//   }));

//   return (
//     <>
//       <Animated.Image
//         style={[styles.box, animatedStyles]}
//         source={{
//           uri: "https://ca.slack-edge.com/T01R5TMEAV6-U03DKHKMRTR-c8b49ca176f9-512",
//         }}
//       />

//       <View style={styles.container}>
//         <Button onPress={handlePress} title="Click to move =>" />
//         <Button onPress={handlePressBack} title="Click to move <=" />
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//     height: 120,
//     width: 120,
//     backgroundColor: "#b58df1",
//     borderRadius: 20,
//     marginVertical: 50,
//   },
// });

import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export const Animation = ({ uri }: { uri: string }) => {
  const pressed = useSharedValue<boolean>(false);
  // highlight-next-line

  const offset = useSharedValue<number>(0);

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    // highlight-start
    .onChange((event) => {
      offset.value = event.translationX;
    })
    // highlight-end
    .onFinalize(() => {
      // highlight-next-line
      offset.value = withSpring(0);
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      // highlight-next-line
      { translateX: offset.value },
      { scale: withTiming(pressed.value ? 2 : 1) },
    ],
    backgroundColor: pressed.value ? "#FFE04B" : "#b58df1",
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <GestureDetector gesture={pan}>
          <Animated.Image
            style={[styles.box, animatedStyles]}
            source={{
              uri,
            }}
          />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  circle: {
    height: 120,
    width: 120,
    backgroundColor: "#b58df1",
    borderRadius: 500,
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: "#b58df1",
    borderRadius: 20,
    marginVertical: 50,
  },
});
