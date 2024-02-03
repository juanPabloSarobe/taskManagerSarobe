import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/global/colors";

const AddTaskButton = ({ onHandleCreatingTask }) => {
  return (
    <Pressable style={styles.container} onPress={onHandleCreatingTask}>
      <View style={styles.newCard}>
        <Text style={[styles.text, { fontSize: 30 }]}>+</Text>
        <Text style={[styles.text, { fontSize: 30 }]}>{"    "}</Text>

        <Text style={styles.text}>Añadir una nueva tarjeta</Text>
      </View>
    </Pressable>
  );
};

export default AddTaskButton;

const styles = StyleSheet.create({
  container: { width: "100%", height: 40, marginBottom: 15 },

  newCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: colors.textSecondary,
    fontSize: 18,
  },
});
