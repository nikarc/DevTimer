import AsyncStorage from "@react-native-async-storage/async-storage";
import { Job } from "../types";

export const useJobStorage = () => {
  const storeData = async (value: Job) => {
    try {
      await AsyncStorage.setItem(
        `${new Date().valueOf()}`,
        JSON.stringify(value)
      );
    } catch (e) {
      console.log(e);
    }
  };

  const getJobs = async () => {
    try {
      const jobIds = await AsyncStorage.getAllKeys();

      for (const job of jobIds) {
        const jobData = await AsyncStorage.getItem(job);

        if (jobData) {
          return JSON.parse(jobData);
        }

        return [];
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getJob = async (id: string) => {
    try {
      const jobData = await AsyncStorage.getItem(id);

      if (jobData) {
        return JSON.parse(jobData);
      }

      return null;
    } catch (e) {
      console.log(e);
    }
  };

  return { storeData, getJobs, getJob };
};
