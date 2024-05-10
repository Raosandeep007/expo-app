import { useHeaderHeight } from "@react-navigation/elements";
import React, { FC, ReactNode } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

const KeyboradWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const isIos = Platform.OS === "ios";
  const headerHeight = useHeaderHeight();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        behavior={isIos ? "padding" : undefined}
        keyboardVerticalOffset={isIos ? headerHeight : 0}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboradWrapper;
