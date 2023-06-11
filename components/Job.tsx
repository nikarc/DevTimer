import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { StyleSheet, useColorScheme } from "react-native";
import { Job } from "../types";
import { Text, View } from "./Themed";

export default function JobView({ title, description }: Job) {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        colorScheme === "dark" ? styles.containerDark : styles.containerLight,
      ]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
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
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 10,
  },
  containerDark: {
    backgroundColor: DarkTheme.colors.card,
  },
  containerLight: {
    backgroundColor: DefaultTheme.colors.card,
  },
  title: {
    fontSize: 20,
  },
});
