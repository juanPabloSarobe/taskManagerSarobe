import { FlatList, StyleSheet, View } from "react-native";
import TaskCard from "./TaskCard";

const TasksContainer = ({
  tasks,
  screenWidth,
  updateCompleteTask,
  onHandleModal,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            item={item}
            screenWidth={screenWidth}
            updateCompleteTask={updateCompleteTask}
            onHandleModal={onHandleModal}
          />
        )}
      />
    </View>
  );
};

export default TasksContainer;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingBottom: 50,
  },
});
