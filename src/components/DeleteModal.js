import { Button, Modal, StyleSheet, Text, View } from "react-native";
import colors from "../utils/global/colors";
import ShadowPrimary from "./wrappers/ShadowPrimary";

const DeleteModal = ({
  deleteModalVisible,
  onHandleModal,
  taskSelected,
  deleteTask,
}) => {
  return (
    <Modal
      visible={deleteModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        onHandleModal({});
      }}
    >
      <View style={styles.container}>
        <ShadowPrimary>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>
              Esta seguro que quiere eliminar la tarea {taskSelected.title} ?
            </Text>
            <View style={styles.deleteButtons}>
              <Button
                title="Eliminar"
                onPress={deleteTask}
                color={colors.bgWarning}
              />
              <Button
                title="Cancelar"
                onPress={() => {
                  onHandleModal({});
                }}
                color={colors.bgSuccess}
              />
            </View>
          </View>
        </ShadowPrimary>
      </View>
    </Modal>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.textSecondary,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  modalTitle: { color: colors.bgPrimary },
  deleteButtons: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "95%",
    gap: 5,
  },
});
