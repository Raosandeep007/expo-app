/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorDark = "black";
const tintColorLight = "#fff";

export const Colors = {
  light: {
    text: tintColorDark,
    background: tintColorLight,
    tint: tintColorDark,
    icon: tintColorDark,
    tabIconDefault: tintColorDark,
    tabIconSelected: tintColorDark,
  },

  dark: {
    text: tintColorLight,
    background: tintColorDark,
    tint: tintColorLight,
    icon: tintColorLight,
    tabIconDefault: tintColorLight,
    tabIconSelected: tintColorLight,
  },
};
