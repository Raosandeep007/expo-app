import { Linking, StyleSheet, View } from "react-native";
import { ExternalLink } from "@/components/ExternalLink";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

const Contact = () => {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"].tint;

  const call = () => {
    Linking.openURL(`tel:9166250560`);
  };

  const mail = () => {
    Linking.openURL(`mailto:yadavsandeep775@gmail.com?body=Hi Sandeep, 
        I hope you are doing well.
        I am reaching out to you to discuss a potential opportunity.
        Please let me know your availability for a call.
        Thanks!
        `);
  };

  return (
    <View style={styles.contact}>
      <ExternalLink href="https://github.com/Raosandeep007">
        <Ionicons name="logo-github" size={28} color={color} />
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/sandeep-yadav-828779149/">
        <Ionicons name="logo-linkedin" size={28} color={color} />
      </ExternalLink>
      <ExternalLink href="https://raosandeep007.netlify.app/">
        <Ionicons name="globe" size={28} color={color} />
      </ExternalLink>
      <ExternalLink href="">
        <Ionicons name="call" size={28} onPress={call} color={color} />
      </ExternalLink>
      <ExternalLink href="">
        <Ionicons name="mail" size={28} onPress={mail} color={color} />
      </ExternalLink>
    </View>
  );
};
export default Contact;

const styles = StyleSheet.create({
  contact: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
    width: "100%",
  },
});
