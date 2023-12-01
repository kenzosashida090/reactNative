import React, { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
{
  /*
interface item {
    text: string;
    key: string;
}
*/
}

interface GoalItemProps {
  itemData: string;
  id: string;
  onDelete: Function;
}

const GoalItem: FC<GoalItemProps> = ({ itemData, id, onDelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        onPress={() => onDelete(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
export default GoalItem;
