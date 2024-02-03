import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./src/components/AddTask";
import AddTaskButton from "./src/components/AddTaskButton";

import colors from "./src/utils/global/colors";

export default function App() {
  const screenWidth = Dimensions.get("window").width;
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [creatingTask, setcreatingTask] = useState(false);

  const newTast = () => {
    const task = {
      id: uuidv4(),
      title: taskTitle,
      desciption: taskDescription,
      createDate: new Date().toLocaleString(),
      updateDate: new Date().toLocaleString(),
      complete: false,
    };

    setTasks([...tasks, task]);
    setTaskTitle("");
    setTaskDescription("");
    onHandleCreatingTask();
  };

  const cancelNewTask = () => {
    setTaskTitle("");
    setTaskDescription("");
    onHandleCreatingTask();
  };
  const onHandleCreatingTask = () => {
    setcreatingTask(!creatingTask);
  };

  const onHandlerTitle = (t) => {
    setTaskTitle(t);
  };

  const onHandlerDescription = (t) => {
    setTaskDescription(t);
  };

  return (
    <View
      style={{
        flex: 1,

        backgroundColor: colors.bgPrimary,
      }}
    >
      <View
        style={{
          flex: 1,
          direction: "row",
        }}
      >
        <Text style={styles.appTitle}>Bienvenidos al generador de Tareas</Text>
      </View>
      <View style={styles.container}>
        {!creatingTask && (
          <AddTaskButton onHandleCreatingTask={onHandleCreatingTask} />
        )}
        {creatingTask && (
          <AddTask
            onHandlerTitle={onHandlerTitle}
            taskTitle={taskTitle}
            taskDescription={taskDescription}
            onHandlerDescription={onHandlerDescription}
            newTast={newTast}
            cancelNewTask={cancelNewTask}
          />
        )}
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderRadius: 20,
    flex: 9,
    backgroundColor: colors.bgSecondary,
    alignItems: "center",
    paddingVertical: 25,
  },
  appTitle: {
    marginTop: 45,
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: 10,
  },
});
