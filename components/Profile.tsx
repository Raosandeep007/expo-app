import React, { useState, useEffect, useRef } from "react";
import { View, Animated, Text } from "react-native";

const Profile = () => {
  const [profileImage, setProfileImage] = useState("");
  const fadeAnim = useRef(new Animated.Value(0)).current;

  //   useEffect(() => {
  //     const imageUrls = [
  //       "https://ai-avatar-generator.com/results/663f6417414fe.png",
  //       "https://ai-avatar-generator.com/results/663f64c23211f.png",
  //       "https://ca.slack-edge.com/T01R5TMEAV6-U03DKHKMRTR-c8b49ca176f9-512",
  //     ];

  //     let currentIndex = 0;

  //     const interval = setInterval(() => {
  //       currentIndex = (currentIndex + 1) % imageUrls.length;
  //       setProfileImage(imageUrls[currentIndex]);
  //       Animated.timing(fadeAnim, {
  //         toValue: 1,
  //         duration: 1000,
  //         useNativeDriver: true,
  //         isInteraction: true,
  //       }).start();
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <View>
      <Animated.Image
        source={{
          uri: "https://ca.slack-edge.com/T01R5TMEAV6-U03DKHKMRTR-c8b49ca176f9-512",
        }}
        accessibilityLabel="Profile Image"
        style={{
          //   opacity: fadeAnim,
          height: 150,
          width: 150,
          borderRadius: 1000,
        }}
      />
    </View>
  );
};

export default Profile;
