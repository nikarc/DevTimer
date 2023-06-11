import { FlatList, StyleSheet } from "react-native";
import { Job } from "../types";
import JobView from "./Job";
import { View } from "./Themed";

const mockData: Job[] = [
  {
    title: "Job 1",
    description: "Job 1 description",
  },
  {
    title: "Job 2",
    description: "Job 2 description",
  },
];

export default function JobList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        renderItem={({ item }) => <JobView {...item} />}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  list: {
    flex: 1,
  },
});
