import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
export default function App() {
  interface typesState {
    listGoals: string[];
  }
  const [text, setText] = useState<string>("");
  const [goals, setGoals] = useState<{ text: string; key: string }[]>([]);
  const [modalIsVisible, setModalVisible] = useState<boolean>(false);
  const deleteGoalHandler = (id: string) => {
    const newGoals = goals.filter((el) => el.key !== id);
    console.log(newGoals);
    setGoals(newGoals);
  };
  const startAddGoalHandler = () => {
    setModalVisible(true);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.buttonGoal}>
          <Button
            title="Add New Goal"
            color={"#5e0acc"}
            onPress={startAddGoalHandler}
          />
        </View>
        {modalIsVisible && (
          <GoalInput
            text={text}
            setText={setText}
            setGoals={setGoals}
            modalIsVisible={modalIsVisible}
            setModalIsVisible={setModalVisible}
          />
        )}
        <View style={styles.gaolsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData.item.text}
                  id={itemData.item.key}
                  onDelete={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(
              item: { key: string; text: string },
              index: number
            ) => {
              return item.key;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  gaolsContainer: {
    flex: 6,
  },
  buttonGoal: {
    paddingBottom: 25,
  },
});
