import React, { FC } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
interface GoalInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<any>>;
  setGoals: React.Dispatch<React.SetStateAction<any>>;
  setModalIsVisible: React.Dispatch<React.SetStateAction<any>>;
  modalIsVisible: boolean;
}

const GoalInput: FC<GoalInputProps> = ({
  text,
  setText,
  setGoals,
  modalIsVisible,
  setModalIsVisible,
}) => {
  function goalInputHandler(e: string) {
    setText(e);
  }
  function addGoalHandler() {
    setText("");
    setGoals((prevGoals: []) =>
      prevGoals
        ? [...prevGoals, { text, key: Math.random().toString() }]
        : [{ text, key: Math.random().toString() }]
    );
    setModalIsVisible(false);
  }
  const cancelHandleFunction = () => {
    setModalIsVisible(false);
  };
  return (
    <>
      <Modal visible={modalIsVisible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image source={require("../images/goal.png")} style={styles.image} />
          <TextInput
            value={text}
            onChangeText={goalInputHandler}
            style={styles.textInput}
            placeholder="Your course goals"
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                onPress={addGoalHandler}
                title="Add goal"
                color={"#5E0ACC"}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={"#f31282"}
                title="Cancel"
                onPress={cancelHandleFunction}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311B6B",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
