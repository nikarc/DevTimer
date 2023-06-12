import { StatusBar } from "expo-status-bar";
import { Button, Platform, StyleSheet } from "react-native";
import { useForm, SubmitHandler } from "react-hook-form";

import { Text, View } from "../components/Themed";
import { Job } from "../types";
import TextInput from "../components/TextInput";
import { FlexV } from "../components/Base";

type FormData = Omit<Job, "timers">;

export default function NewJobModalScreen() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <FlexV style={styles.form}>
        <TextInput {...register("title", { required: true })} defaultValue="" />

        <TextInput {...register("description")} defaultValue="" />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </FlexV>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  form: {
    width: "100%",
    flex: 1,
    padding: 10,
    rowGap: 10,
  },
});
