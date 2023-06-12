import { FlatList, StyleSheet } from "react-native";
import { Job } from "../types";
import JobView from "./Job";
import { View } from "./Themed";

const mockData: Job[] = [
  {
    title: "Color Development",
    timers: [
      {
        title: "Development",
        duration: 180,
        notes: "102°",
      },
      {
        title: "Blix",
        duration: 60 * 8,
      },
    ],
  },
  {
    title: "DDX/HP5",
    description: "@ 1600 iso",
    timers: [
      {
        title: "Development",
        duration: 600,
        notes: "102°",
      },
      {
        title: "Water Bath",
        duration: 30,
      },
      {
        title: "Fix",
        duration: 60 * 5,
      },
    ],
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
