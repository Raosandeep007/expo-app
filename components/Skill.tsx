import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Fontisto, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";

const Skill = () => {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"].tint;
  const imageColor = colorScheme === "dark" && { backgroundColor: color };

  return (
    <View style={styles.container}>
      <View style={styles.skillsList}>
        <View style={styles.skillRow}>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>HTML</ThemedText>
            <Ionicons name="logo-html5" size={28} color={color} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>CSS</ThemedText>
            <Ionicons name="logo-css3" size={28} color={color} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Javascript</ThemedText>
            <Ionicons name="logo-javascript" size={28} color={color} />
          </View>
        </View>
        <View style={styles.skillRow}>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>TypeScript</ThemedText>
            <MaterialCommunityIcons
              name="language-typescript"
              size={28}
              color={color}
            />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>React.js</ThemedText>
            <Ionicons name="logo-react" size={28} color={color} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Redux</ThemedText>
            <Fontisto name="redux" size={28} color={color} />
          </View>
        </View>

        <View style={styles.skillRow}>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Next.js</ThemedText>
            <Image
              source={{
                uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACGElEQVRIS7WWDVFDMQzHmQKGAh4KYAoYCmAKAAWAAoYCmINNAThgKGASngRQAPn1mruua5uMe/Qu1/eR5J/vdnTgX2fCei3EPo470huhr7iv4m5qHRkcANwJ3UcwU2E04kX2RXwuyrSAr0TiWajzoBV4evn2IPRWkq8BYzGeDrHmouQpV1QCXgoTuRxyofM2VZgDD+lpbjhe431YKTA5fR3SzYKumeZcganeT6Hun4F70X+SekwIHiugk/h9LfuhwzB15qfCG0KuTAyAmlLloZdpL2tZwGAdwTQVem9oS+uAnrw0kC1gxCcwWZWcAlML5KkVcg/wAiZyd+7wmMjA641QLcdAfQDMkD91AJObToi9FSWPxxuYWpZhT6qIHNOLrJrBHuCgdB9gABn8eMzxSOjzfLuBvaFWAwn1RfS41GJuYKz2FFcaGYzVwZK3mAc4FJe3nfKUcNDrBaFPQu4BDu1ErpjTtdVSRMiJ2FRIh5AHeLbPyCwVIflm6Fstljr1LS9jBZ7LS+2QsDzwtFgKvHVIMAopmONCvC1gRKwWU7V42xGhdA7XLgIeYKvFFHjnIqA/rApv1GCIWK3FkNMuCDpSj1XpUh7+etmrtdhKdN6kVpeA+d8qtpbX/MtbbMtTFa4B85+cE/pSwbXA0xZjRpCCndUCVma8Z0J57lvIULmElTarLg+wCmM9CtlpPz3DAcIraG0BqrJfsyB/Cy9dXQ0AAAAASUVORK5CYII=",
              }}
              style={[styles.logo, imageColor]}
            />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>React-Native</ThemedText>
            <MaterialCommunityIcons name="react" size={28} color={color} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Expo</ThemedText>
            <Image
              source={{
                uri: "data:image/png;base64,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",
              }}
              style={[styles.logo, imageColor]}
            />
          </View>
        </View>
        <View style={styles.skillRow}>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Testing</ThemedText>
            <MaterialCommunityIcons name="ab-testing" size={28} color={color} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Node.js</ThemedText>
            <Ionicons name="logo-nodejs" size={28} color={color} />
          </View>
          <View style={styles.skill}>
            <ThemedText style={styles.skillText}>Express.js</ThemedText>
            <Image
              source={{
                uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADvElEQVRoQ+2XjXHTQBCFkwqAChAVABWgVABUgKkAUgGmAqACTAVABSgVkFSAqIBQAbwvc+s5X+5PJ02YDLqZHdnW3u57+3O3Pj665ev4luM/Wgn86wyuGVgzMDMCawnNDODs7f9FBp4qTL3kkaST3JWcS0bJIPkquSyEkn33Jb/d3rmRf+IMXOQy8ExK7xzonEPAv5d8yBCBAKTvSHaSl40MCN43F8xPem5iBFD6LOmdkzM9vzgAgACwZQOSL5zeqOfzTITRxS7rrWTbQIL92Llw+C5DAj5DlF5LhoKjTu93EtIKuZMMCUC/cfYeZ/RiLsFCRVCGve0NCXzXC6JLethQqm3fESTIBnsANyaIExDI8h69Gh9gAhuL8sPX1fIJUMevJJRMn3Be+tnAXdVnQpksA55+oDQpu9xCH/Cd5JpdI8DLHxLSw+eaqMScmh3e5UqEANGMrFMJwUuta3XvKxqBnX4k/a3N5ds0WxyvNFxqWU3nyEbrPkbgl34kVfdmRN/sWhbIIvZyixLinhklYT9Q92QJXAd1HxLoneKc2g9BAoiLq3TSAI6jGV2/H/zTkPuFTEQXJbSVcLQtUT7mxCJbqm/0ifQgoakt0h/1eSPhKOd9ckHAnCXTlDOQeDc1KIAFNGVHQ7OfAwXwY4kAp08n2ZWUJxDppYtMySr+7VbHFRfiUPJJBv6UlGa8n0IAwna04jI3p+0h+QS4JLLpaiBCBItRlI7ftOamirxPoCplDSRqtvhNu9EGGxuKmCBAhJhNiso1SBp0AAwBf0jb6jsnI039wD2jpiGwk9A8NUdeA77sltxlZYHlSXCTBIxtbgCbCpwRgsGQo3nMbPanXzLhL3/oS/YDGbBRFUeka4llown2UgRs+t3/OYk4JhD2Jyha4nZU4YTrfInLzJz+lL0uEQ0fWGncMKLRfjACpI9GWiILnOV9JhiQonQokZq+Q2+QPHTPg37wLwvLQtX5m4isjb+56Fvdl8Zt34U/Lx3g8wlYL7CxpZQoC7JIxPiXxYwVLisHCOKPsqhdFhz09/3gE+DFxoHgM85gW3ICYE6crUOSKotiQ1YwscFz3w8hAWz0LnqMtyjuJByx54EDLj90iQwkuIj4jH64Ov1gdT+nRPEDDg6cQXISI4BzFAGDQKS0zpxuSNL25c77ku3wvd8PpykCtgkivYT0E0UE9gAmO0SBtI4ZFNiwek8RnErCbNaNrFOt36R+KQM3iaXJ10qgKWwLblozsGAwm0ytGWgK24Kb1gwsGMwmU38BaHfo8QIRaT4AAAAASUVORK5CYII=",
              }}
              style={[styles.logo, imageColor]}
            />
          </View>
        </View>
      </View>
      <View style={styles.skill}>
        <ThemedText style={styles.skillText}>MongoDB</ThemedText>
        <Fontisto name="mongodb" size={28} color={color} />
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
    gap: 15,
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
    borderRadius: 5,
  },

  skillText: {
    fontSize: 14,
    fontWeight: "semibold",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});

export default Skill;
