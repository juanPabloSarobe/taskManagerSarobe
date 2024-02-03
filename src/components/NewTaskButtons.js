import { Button, StyleSheet, View } from "react-native";
import colors from "../utils/global/colors";

const NewTaskButtons = ({
  taskDescription,
  taskTitle,
  cancelNewTask,
  newTast,
}) => {
  return (
    <View style={styles.aceptTaskButton}>
      <Button
        color={colors.bgWarning}
        onPress={cancelNewTask}
        title={
          (taskTitle.length && taskDescription.length) <= 10
            ? "  X  "
            : "Cancelar"
        }
      />
      {(taskTitle.length && taskDescription.length) > 10 && (
        <Button color={colors.bgSuccess} onPress={newTast} title={"Aceptar"} />
      )}
    </View>
  );
};

export default NewTaskButtons;

const styles = StyleSheet.create({
  aceptTaskButton: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "95%",
    gap: 5,
  },
});
