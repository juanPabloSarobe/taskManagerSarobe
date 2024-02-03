import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import colors from "../utils/global/colors";
import NewTaskButtons from "./NewTaskButtons";
import ShadowPrimary from "./wrappers/ShadowPrimary";

const AddTask = ({
  onHandlerTitle,
  taskTitle,
  newTast,
  onHandlerDescription,
  taskDescription,
  cancelNewTask,
}) => {
  return (
    <View style={styles.card}>
      <ShadowPrimary style={styles.shadowStyle}>
        <View style={styles.container}>
          <View style={{ width: "100%" }}>
            <TextInput
              placeholder="Introduzca un titulo para esta tarea..."
              placeholderTextColor={colors.textSecondary}
              maxLength={25}
              value={taskTitle}
              multiline
              numberOfLines={2}
              onChangeText={onHandlerTitle}
              style={styles.input}
            />
            {taskTitle.length >= 10 && (
              <TextInput
                style={styles.input}
                placeholder="Describa la tarea"
                placeholderTextColor={colors.textSecondary}
                multiline
                numberOfLines={4}
                maxLength={100}
                onChangeText={onHandlerDescription}
                title={taskDescription}
              />
            )}
          </View>
        </View>
      </ShadowPrimary>

      {
        <NewTaskButtons
          taskDescription={taskDescription}
          taskTitle={taskTitle}
          cancelNewTask={cancelNewTask}
          newTast={newTast}
        />
      }
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  shadowStyle: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.bgPrimary,
    borderRadius: 5,
  },
  card: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.bgPrimary,
    borderRadius: 5,
    width: "90%",
    padding: 3,
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.textSecondary,
  },

  input: {
    width: "100%",
    backgroundColor: colors.bgPrimary,
    color: colors.textSecondary,
    textAlignVertical: "center",
    fontSize: 18,
  },
});
