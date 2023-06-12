import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import {
  StyleSheet,
  TextInput as TextInput_,
  useColorScheme,
} from "react-native";

type Props = React.ComponentProps<typeof TextInput_>;

export default function TextInput(props: Props) {
  const colorScheme = useColorScheme();
  const activeTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <TextInput_
      {...props}
      style={[
        styles.textInput,
        {
          borderBottomColor: activeTheme.colors.card,
          color: activeTheme.colors.text,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
    borderBottomWidth: 1,
  },
});
