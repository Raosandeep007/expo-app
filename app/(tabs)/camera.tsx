import { Ionicons } from "@expo/vector-icons";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import React, { useRef, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Camera = () => {
  const ref = useRef(null);
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  const [pic, setPic] = useState<{
    height: number;
    uri: string;
    width: number;
  }>({
    height: 0,
    uri: "",
    width: 0,
  });

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const takePicture = async () => {
    if (!ref?.current) {
      return console.error("Camera ref is not ready");
    } else {
      // @ts-ignore
      const photo = await ref?.current?.takePictureAsync();
      setPic(photo);
    }
  };

  const onRemove = () => {
    setPic({
      height: 0,
      uri: "",
      width: 0,
    });
  };

  return (
    <View style={styles.container}>
      {pic.uri && (
        <>
          <Image source={{ uri: pic.uri }} style={{ flex: 1 }} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onRemove} style={styles.button}>
              <Ionicons name="trash" size={48} color="white" />
            </TouchableOpacity>
          </View>
        </>
      )}
      {!pic.uri && (
        <CameraView style={styles.camera} facing={facing} ref={ref}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={takePicture} style={styles.button}>
              <Ionicons name="camera" size={48} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraFacing}
            >
              <Ionicons name="camera-reverse" size={48} color="white" />
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "100%",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
});

export default Camera;
