import { StyleSheet } from "react-native";
import { View } from "./Themed";

type Props = {
  children: React.ReactNode;
  style?: Record<string, any>;
};

export const FlexH = ({ children, style }: Props) => (
  <View style={{ ...styles.base, flexDirection: "row", ...style }}>
    {children}
  </View>
);

export const FlexV = ({ children, style }: Props) => (
  <View style={{ ...styles.base, flexDirection: "column", ...style }}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  base: {
    backgroundColor: "transparent",
    display: "flex",
  },
});
