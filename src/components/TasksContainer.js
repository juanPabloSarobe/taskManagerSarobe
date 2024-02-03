import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import TaskCard from "./TaskCard";
import colors from "../utils/global/colors";

const TasksContainer = ({ tasks, screenWidth }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  console.log(tasks);
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.cardContainer, { width: screenWidth - 40 }]}>
            <View style={styles.cardTitle}>
              <Text style={styles.cardTextTitle}>{item.title}</Text>
              <Pressable style={styles.closeButton}>
                <Text style={styles.closeText}> X </Text>
              </Pressable>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardTextCommon}>{item.description}</Text>
            </View>
            <View style={styles.cardButtons}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? colors.textSecondary : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text style={styles.cardTextButtons}>
                {item.createDate < item.updateDate
                  ? item.createDate
                  : item.updateDate}
              </Text>
            </View>
          </View>
        )}
      />
      <TaskCard />
    </View>
  );
};

export default TasksContainer;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    minHeight: 200,
    borderRadius: 15,
    backgroundColor: colors.bgPrimary,
    padding: 5,
    paddingHorizontal: 12,
    paddingBottom: 0,
  },
  cardTitle: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: "500",
  },
  cardBody: { flex: 5, backgroundColor: colors.bgSecondary, borderRadius: 10 },
  cardButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  cardTextTitle: { color: colors.textSecondary, fontSize: 20 },
  cardTextCommon: { color: colors.textSecondary, fontSize: 16 },
  cardTextButtons: {
    color: colors.textSecondary,
    fontSize: 12,
    alignSelf: "flex-end",
    marginBottom: 3,
  },
});
