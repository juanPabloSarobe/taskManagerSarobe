import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./src/components/AddTask";
import AddTaskButton from "./src/components/AddTaskButton";
import DeleteModal from "./src/components/DeleteModal";
import TasksContainer from "./src/components/TasksContainer";

import colors, { colores } from "./src/utils/global/colors";

export default function App() {
  const screenWidth = Dimensions.get("window").width;
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [creatingTask, setcreatingTask] = useState(false);
  const [deleteModalVisible, setdeleteModalVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});

  const newTast = () => {
    const task = {
      id: uuidv4(),
      title: taskTitle,
      description: taskDescription,
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

  const updateCompleteTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id)
          return {
            ...task,
            ...{
              complete: !task.complete,
              updateDate: new Date().toLocaleString(),
            },
          };
        return task;
      })
    );
  };

  const onHandleModal = (task) => {
    setdeleteModalVisible(!deleteModalVisible);
    setTaskSelected(task);
  };

  const deleteTask = () => {
    setTasks(tasks.filter((task) => task.id != taskSelected.id));
    setdeleteModalVisible(!deleteModalVisible);
    setTaskSelected({});
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
        {!creatingTask && (
          <AddTaskButton onHandleCreatingTask={onHandleCreatingTask} />
        )}
        {!creatingTask && (
          <TasksContainer
            tasks={tasks}
            screenWidth={screenWidth}
            updateCompleteTask={updateCompleteTask}
            onHandleModal={onHandleModal}
          />
        )}
        <DeleteModal
          deleteModalVisible={deleteModalVisible}
          onHandleModal={onHandleModal}
          taskSelected={taskSelected}
          deleteTask={deleteTask}
        />
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
    paddingVertical: 10,
  },
  appTitle: {
    marginTop: 45,
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: 10,
  },
});
