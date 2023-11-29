
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  interface typesState {
    listGoals: string[]
  }
  const [text, setText] = useState<string>("")
  const [goals, setGoals] = useState<string[]>()
  function goalInputHandler (e : string){
    if(e){
      
      setText(e)
      
    }

  }
  function addGoalHandler () {
    setText("")
    setGoals((prevGoals) => {
      return prevGoals ? [...prevGoals, text]:[text];
    })

    console.log(goals)
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput value={text} onChangeText={goalInputHandler} style={styles.textInput}  placeholder='Your course goals'/>
          <Button onPress={addGoalHandler} color={"pink"}  title='Add goal'/>
        </View>
      <View style={styles.gaolsContainer}>
        {goals && goals.map((goal, index) => (
        <Text key={index}>{goal}</Text>
       
        )
        )}
      </View>

      <View>
        <Text>Clear</Text>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    
  },
  textInput:{
    borderWidth: 1,
    borderColor: "#cccc",
    width: "80%",
    marginRight:8,
    padding: 8,
   
    
  },
  gaolsContainer:{
    flex:5 
  },
  button:{
    flex:1,
    borderRadius: 2
  }
});
