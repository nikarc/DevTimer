import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { Job } from "../types";
import { Text, View } from "./Themed";
import { Entypo } from "@expo/vector-icons";

export default function JobView({ title, description }: Job) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const activeTheme = isDark ? DarkTheme : DefaultTheme;

  const onPress = () => {
    /* TODO */
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          isDark ? styles.containerDark : styles.containerLight,
        ]}
      >
        <View style={[styles.textContainer]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Entypo
          name="chevron-small-right"
          size={36}
          color={activeTheme.colors.text}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerDark: {
    backgroundColor: DarkTheme.colors.card,
  },
  containerLight: {
    backgroundColor: DefaultTheme.colors.card,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 10,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 20,
  },
  description: {
    opacity: 0.6,
  },
});
