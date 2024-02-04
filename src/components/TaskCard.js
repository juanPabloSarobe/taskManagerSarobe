import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import colors from "../utils/global/colors";

const TaskCard = ({ item, screenWidth, updateCompleteTask, onHandleModal }) => {
  return (
    <View style={[styles.cardContainer, { width: screenWidth - 40 }]}>
      <View style={styles.cardTitle}>
        <Text style={styles.cardTextTitle}>{item.title}</Text>
        <Pressable
          style={styles.closeButton}
          onPress={() => {
            onHandleModal(item);
          }}
        >
          <Text style={styles.closeText}> X </Text>
        </Pressable>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTextCommon}>{item.description}</Text>
      </View>
      <View style={styles.cardButtons}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={item.complete ? colors.textSecondary : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => {
            updateCompleteTask(item.id);
          }}
          value={item.complete}
        />
        <Text style={styles.cardTextSwitch}>
          {item.complete ? "Completada" : "pendiente"}
        </Text>
        <View style={styles.fechas}>
          <View>
            <Text style={styles.cardTextButtons}>Creacion:</Text>
            <Text style={styles.cardTextButtons}>Actualiz:</Text>
          </View>
          <View>
            <Text style={styles.cardTextButtons}>{item.createDate}</Text>
            <Text style={styles.cardTextButtons}>{item.updateDate}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  cardContainer: {
    minHeight: 200,
    borderRadius: 15,
    backgroundColor: colors.bgPrimary,
    padding: 5,
    paddingHorizontal: 12,
    paddingBottom: 0,
    marginBottom: 12,
  },
  cardTitle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTextTitle: {
    color: colors.textSecondary,
    fontSize: 22,
    textTransform: "uppercase",
    paddingStart: 20,
    paddingTop: 5,
  },
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
  cardBody: { flex: 5, borderRadius: 10 },
  cardButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  cardTextCommon: { color: colors.textSecondary, fontSize: 16 },
  cardTextButtons: {
    color: colors.textSecondary,
    fontSize: 12,
    alignSelf: "flex-end",
    marginBottom: 3,
  },
  cardTextSwitch: {
    color: colors.textSecondary,
    fontSize: 12,
    alignSelf: "center",
    marginBottom: 3,
    paddingEnd: 40,
  },
  fechas: {
    flexDirection: "row",
    gap: 3,
  },
});
